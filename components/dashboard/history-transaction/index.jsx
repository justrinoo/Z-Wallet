import React, { useState } from "react";
import axios from "utils/axios";

export default function FilterHistoryTransaction() {
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(4);
	const [receivers, setReceivers] = useState([]);
	const [showMenu, setShowMenu] = useState(false);
	const filterBy = ['firstname','noTelp'];
	const isAccept = false;

	const showMenuFilter = (text) => {
		if (text === "filter") {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	};

	const getTransactionHistoryReceiver = async () => {
		try {
			// const response = await axios.get(`/user?page=${page}&limit=${limit}&sort=${filte}`);
		} catch (error) {}
	};

	return (
		<>
			<div className="col">
				<section className="dashboard_filterhistory-main">
					<div className="dashboard_filterhistory-card">
						<div className="dashboard_filterhistory-card-header">
							<h4 className="dashboard_filterhistory-card-title">
								Transaction History
							</h4>

							<button
								className="dashboard_filterhistory-card-button"
								onClick={() => showMenuFilter("filter")}
							>
								Select Filter
							</button>
						</div>

						{showMenu ? (
							<div className="dashboard_filterhistory-card-filter">
								<span>Filter By firstname</span>
								<hr />
								<span>Filter By No telp</span>
							</div>
						) : null}

						<div className="dashboard_filterhistory-card-body mt-3">
							<img
								src="/images/face1.png"
								width={56}
								height={56}
								alt="Profile Users"
							/>
							<div className="dashboard_filterhistory-card-body-description">
								<div className="mx-4">
									<h5 className="dashboard_filterhistory-card-body-name">
										Samuel Suhi
									</h5>
									<p className="dashboard_filterhistory-card-body-option">
										Accept
									</p>
								</div>
								<span
									className={` ${
										isAccept
											? "dashboard_filterhistory-card-body-accept-money "
											: "dashboard_filterhistory-card-body-transfer-money"
									} `}
								>
									{isAccept ? "+Rp.50.000" : "-Rp.120.000"}
								</span>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
