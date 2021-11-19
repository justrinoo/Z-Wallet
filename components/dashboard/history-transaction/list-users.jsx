import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "utils/axios";

export default function ListUsers({ setSeeAll }) {
	const handleSeeAll = () => {
		setSeeAll(true);
	};
	const [page, setPage] = useState(1);
	const [limit] = useState(4);
	const [receivers, setReceivers] = useState([]);
	const filterBy = "MONTH";
	const getAllHistoryTransaction = async () => {
		try {
			const response = await axios.get(
				`/transaction/history?page=${page}&limit=${limit}&filter=${filterBy}`
			);
			setReceivers(response.data.data);
			setPage(response.data.pagination.page);
		} catch (error) {
			new Error(error.message);
			console.log(error);
		}
	};

	useEffect(() => {
		getAllHistoryTransaction();
	}, [page, limit]);

	return (
		<>
			<div className="dashboard_content-transaction-history-card">
				<div className="dashboard_content-transaction-history-card-body-link">
					<h4 className="dashboard_content-transaction-history-title">
						Transaction History
					</h4>
					<span
						className="dashboard_content-transaction-history-link-see-all"
						onClick={handleSeeAll}
					>
						See All
					</span>
				</div>

				{receivers.length > 0 ? (
					receivers.map((receiver) => (
						<div
							className="dashboard_content-transaction-history-card-list-users mt-3"
							key={receiver.id}
						>
							<Image
								src="/images/face2.png"
								width={56}
								height={56}
								className="d-block"
								alt="Face User"
								layout="fixed"
							/>
							<div className="dashboard_content-transaction-history-card-list-users-description">
								<div className="d-flex align-items-center justify-content-between">
									<div>
										<h5 className="dashboard_content-transaction-history-card-list-users-name">
											{receiver.fullName}
										</h5>
										<p className="dashboard_content-transaction-history-card-list-users-option">
											{receiver.type}
										</p>
									</div>
									<span
										className={`${
											receiver.status === "success"
												? "dashboard_content-transaction-history-card-list-users-transfer-money"
												: "dashboard_content-transaction-history-card-list-users-accept-money"
										}`}
									>
										{receiver.status === "success"
											? `-Rp${new Intl.NumberFormat("id-ID").format(
													receiver.amount
											  )}`
											: `+Rp${new Intl.NumberFormat("id-ID").format(
													receiver.amount
											  )}`}
									</span>
								</div>
							</div>
						</div>
					))
				) : (
					<p>Please wait...</p>
				)}
			</div>
		</>
	);
}
