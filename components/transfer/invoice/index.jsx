import { useRouter } from "next/dist/client/router";
import axios from "utils/axios";

export default function Invoice({ data }) {
	const {
		amount,
		balanceLeft,
		dateTransaction,
		notes,
		receiverName,
		receiverTelp,
		receiverlastName,
		status,
		image,
		transactionId,
	} = data;
	const router = useRouter();

	const generateTransaction = async () => {
		try {
			const response = await axios.get(`/export/transaction/${transactionId}`);
			router.push(response.data.data.url);
		} catch (error) {
			new Error(error.response);
		}
	};

	const GoBackHome = () => {
		router.push("/home/dashboard");
	};
	return (
		<>
			<section className="transfer_invoice-main">
				<div className="transfer_invoice-status-success transfer_invoice-status-failed">
					{status ? (
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
							status
								? " transfer_invoice-status-title-success "
								: "transfer_invoice-status-title-failed"
						}`}
					>
						Transfer {status ? "Success" : "Failed"}
					</p>

					{!status && (
						<p className="transfer_invoice-message-failed">
							We can’t transfer your money at the moment, we recommend you to
							check your internet connection and try again.
						</p>
					)}
				</div>

				<div className="transfer_invoice-list">
					<p>Amount</p>
					<h5> Rp{new Intl.NumberFormat("id-ID").format(amount)}</h5>
				</div>
				<div className="transfer_invoice-list">
					<p>Balance Left</p>
					<h5>Rp{new Intl.NumberFormat("id-ID").format(balanceLeft)}</h5>
				</div>
				<div className="transfer_invoice-list">
					<p>Date & Time</p>
					<h5>{dateTransaction}</h5>
				</div>
				<div className="transfer_invoice-list">
					<p>Notes</p>
					<h5>{notes}</h5>
				</div>
				<div className="transfer_invoice-list">
					<p>Transfer to</p>
					<div className="transfer_invoice-list-receiver">
						<img
							src={
								image
									? `${process.env.BASE_URL_PROD}/uploads/${image}`
									: "/images/face2.png"
							}
							width={70}
							height={70}
							alt="Face"
						/>
						<div className="mx-3">
							<h5>
								{receiverName} {receiverlastName}
							</h5>
							<p>{receiverTelp === "" ? "-" : receiverTelp}</p>
						</div>
					</div>
				</div>

				<div className="transfer_invoice-button-option">
					<button
						className="transfer_invoice-button-download"
						onClick={generateTransaction}
					>
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
