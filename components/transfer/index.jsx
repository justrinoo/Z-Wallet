import { useEffect, useState } from "react";
import { Search, ListReCeiver, AmoundReCeiver, Invoice } from "components";
import axios from "utils/axios";

export default function TransferComponent() {
	const [statusNextComp, setStatusNextComp] = useState(false);
	const [statusInvoicePage, setStatusInvoicePage] = useState(false);
	const [receivers, setReceivers] = useState([]);
	const [error, setError] = useState(false);
	const [page] = useState(1);
	const [limit] = useState(6);

	const getListReceivers = async () => {
		try {
			const response = await axios.get(`/user?page=${page}&limit=${limit}`);
			setReceivers(response.data.data);
		} catch (error) {
			new Error(error.response);
		}
	};

	const findReceiver = async (event) => {
		const search = event.target.value;
		if (event.key === "Enter") {
			const response = await axios.get(
				`/user?page=${page}&limit=${limit}&search=${search}`
			);
			setReceivers(response.data.data);
		}
	};

	useEffect(() => {
		getListReceivers();
	}, [page, limit]);

	return (
		<>
			<section className="transfer-main">
				{/* SEARCH RECEIVER */}

				{!statusNextComp ? (
					<div className="transfer-card">
						<p className="transfer-title">Search Receiver</p>
						<div className="transfer-form-container">
							<input
								type="text"
								className="transfer-form-input position-relative"
								name="search"
								onKeyPress={findReceiver}
								placeholder="Search receiver here"
								autoComplete="off"
							/>
						</div>
						{/* LIST RECEIVER */}
						{receivers.length > 0 ? (
							receivers.map((receiver) => (
								<ListReCeiver
									receivers={receiver}
									setStatusNextComp={setStatusNextComp}
									key={receiver.id}
								/>
							))
						) : (
							<p className="text-center fw-bold text-danger">
								Receiver Not found...
							</p>
						)}
					</div>
				) : statusInvoicePage ? (
					<Invoice />
				) : (
					<AmoundReCeiver setStatusInvoicePage={setStatusInvoicePage} />
				)}
				{/* AMMOUND RECEIVER */}

				{/* INVOICE PAGE */}
			</section>
		</>
	);
}
