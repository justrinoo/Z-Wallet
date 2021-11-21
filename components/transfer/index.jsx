import { useEffect, useState } from "react";
import { Search, ListReCeiver, AmoundReCeiver, Invoice } from "components";
import axios from "utils/axios";
import Pagination from "react-paginate";
import { useRouter } from "next/router";

export default function TransferComponent() {
	const router = useRouter();
	const [statusNextComp, setStatusNextComp] = useState(false);
	const [statusInvoicePage, setStatusInvoicePage] = useState(false);
	const [receivers, setReceivers] = useState([]);
	const [totalPage, setTotalPage] = useState(0);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(6);

	const getListReceivers = async () => {
		try {
			const response = await axios.get(`/user?page=${page}&limit=${limit}`);
			setReceivers(response.data.data);
			setTotalPage(response.data.pagination.totalPage);
			console.log("total page", totalPage);
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
			setLimit(response.data.pagniation.limit);
			setPage(response.data.pagination.page);
			setTotalPage(response.data.pagination.totalPage);
			setReceivers(response.data.data);
		}
	};

	const changePagination = (event) => {
		const selectedPage = event.selected + 1;
		router.push(`/home/transfer?page=${selectedPage}&limit=${limit}`);
		setPage(selectedPage, () => getListReceivers());
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
						<div className="mt-5">
							<Pagination
								previousLabel={"<"}
								nextLabel={">"}
								pageCount={totalPage}
								onPageChange={changePagination}
								containerClassName="transfer_list-receiers_pagination"
								activeClassName="transfer_list-receiers_pagination-active"
								previousClassName="transfer_list-receiers_pagination-previous"
								nextClassName="transfer_list-receiers_pagination-next"
								pageClassName="transfer_list-receiers_pagination-previous"
							/>
						</div>
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
