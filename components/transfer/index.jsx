import { useState } from "react";
import { Search, ListReCeiver, AmoundReCeiver, Invoice } from "components";

export default function TransferComponent() {
	const [statusNextComp, setStatusNextComp] = useState(false);
	const [statusInvoicePage, setStatusInvoicePage] = useState(false);

	return (
		<>
			<section className="transfer-main">
				{/* SEARCH RECEIVER */}

				{!statusNextComp ? (
					<div className="transfer-card">
						<p className="transfer-title">Search Receiver</p>
						<div className="transfer-form-container">
							<form>
								<div
									className="position-absolute"
									style={{
										top: "213px",
										left: "465px",
										cursor: "default",
									}}
								>
									<Search stroke="#A9A9A9" />
								</div>
								<input
									type="text"
									className="transfer-form-input position-relative"
									name="search"
									placeholder="Search receiver here"
									autoComplete="off"
								/>
							</form>
						</div>
						{/* LIST RECEIVER */}
						<ListReCeiver status={true} setStatusNextComp={setStatusNextComp} />
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
