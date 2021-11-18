import { useRouter } from "next/dist/client/router";

export default function Invoice() {
	const router = useRouter();
	const isSuccess = false;

	const GoBackHome = () => {
		router.push("/home/dashboard");
	};
	return (
		<>
			<section className="transfer_invoice-main">
				<div className="transfer_invoice-status-success transfer_invoice-status-failed">
					{isSuccess ? (
						<img
							src="/icons/success.svg"
							width={70}
							height={70}
							alt="Success"
						/>
					) : (
						<img src="/icons/failed.svg" width={70} height={70} alt="Failed" />
					)}
					<p
						className={`${
							isSuccess
								? " transfer_invoice-status-title-success "
								: "transfer_invoice-status-title-failed"
						}`}
					>
						Transfer {isSuccess ? "Success" : "Failed"}
					</p>

					{!isSuccess && (
						<p className="transfer_invoice-message-failed">
							We can’t transfer your money at the moment, we recommend you to
							check your internet connection and try again.
						</p>
					)}
				</div>

				<div className="transfer_invoice-list">
					<p>Amount</p>
					<h5>Rp.100.000</h5>
				</div>
				<div className="transfer_invoice-list">
					<p>Balance Left</p>
					<h5>Rp20.000</h5>
				</div>
				<div className="transfer_invoice-list">
					<p>Date & Time</p>
					<h5>{new Date(Date.now()).toDateString()}</h5>
				</div>
				<div className="transfer_invoice-list">
					<p>Notes</p>
					<h5>For buying some socks</h5>
				</div>
				<div className="transfer_invoice-list">
					<p>Transfer to</p>
					<div className="transfer_invoice-list-receiver">
						<img src="/images/face1.png" width={70} height={70} alt="Face" />
						<div className="mx-3">
							<h5>Samuel Suhi</h5>
							<p>+62 813-8492-9994</p>
						</div>
					</div>
				</div>

				<div className="transfer_invoice-button-option">
					<button className="transfer_invoice-button-download">
						Download PDF
					</button>
					<button className="transfer_invoice-button-back" onClick={GoBackHome}>
						Back To Home
					</button>
				</div>
			</section>
		</>
	);
}
