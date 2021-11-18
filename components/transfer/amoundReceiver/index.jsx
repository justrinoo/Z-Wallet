import { ListReCeiver, Input, DetailTransfer, Modal } from "components";
import { useState } from "react";

export default function AmoundReCeiver({
	statusInvoicePage,
	setStatusInvoicePage,
}) {
	const [statusTransfer, setStatusTransfer] = useState(false);
	const [statusPopUp, setStatusPopUp] = useState(false);

	const handleDetailTransfer = (textTransfer) => {
		console.log("detail transfer");
		if (textTransfer === "detailTransfer") {
			setStatusTransfer(true);
		} else {
			setStatusTransfer(false);
		}
	};

	const popUpPin = () => {
		setStatusPopUp(true);
	};
	const ClosePopUpPin = () => {
		setStatusPopUp(false);
	};

	return (
		<>
			<main className="transfer_amoundreceiver-main position-relative">
				{/* POP UP PIN */}

				<section className="transfer_amoundreceiver-card">
					{statusPopUp && (
						<Modal
							show={statusPopUp}
							onHide={ClosePopUpPin}
							setStatusInvoicePage={setStatusInvoicePage}
						/>
					)}
					<h5 className="transfer_amoundreceiver-title">Transfer Money</h5>
					<ListReCeiver status={false} />

					{statusTransfer ? (
						<DetailTransfer />
					) : (
						<>
							<p className="transfer_amoundreceiver-instruction">
								Type the amount you want to transfer and then press continue to
								the next steps.
							</p>
							<div className="transfer_amoundreceiver-rows">
								<input
									type="text"
									className="transfer_amoundreceiver-input"
									placeholder="0.00"
								/>
								<p className="transfer_amoundreceiver-money-available">
									Rp.120.000 Availabe
								</p>
								<div className="transfer_amoundreceiver-parent-notes">
									{/* ICON PENCIL */}
									<img src="/icons/pencil.svg" alt="Email" />
									<Input
										type="text"
										name="notes"
										classNameChildren="w-50"
										placeholderChildren="Add some notes"
									/>
								</div>
							</div>
						</>
					)}
					<div className="d-flex justify-content-end mt-5">
						<button
							onClick={
								statusTransfer
									? () => popUpPin("PIN")
									: () => handleDetailTransfer("detailTransfer")
							}
							className="transfer_amoundreceiver-button"
						>
							Continue
						</button>
					</div>
				</section>
			</main>
		</>
	);
}
