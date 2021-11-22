import { Layout, Sidebar, Modal, DetailTransfer } from "components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import axios from "utils/axios";

export default function DetailTransferPage() {
	const maxPin = [1, 2, 3, 4, 5, 6];
	const router = useRouter();
	const [pin, setPin] = useState({});
	const [showModal, setShowModal] = useState(false);
	const [receiver, setReceiver] = useState({});
	const [messageModal, setMessageModal] = useState("");
	const { amount, balanceLeft, dateTransaction, notes, receiverId } =
		router.query;
	const setDataDetails = { amount, balanceLeft, dateTransaction, notes };

	useEffect(() => {
		axios
			.get(`/user/profile/${receiverId}`)
			.then((response) => {
				setReceiver(response.data.data);
			})
			.catch((error) => new Error(error.response));
	}, []);

	const showPopUpPin = () => {
		setShowModal(true);
	};

	const closePopUpPin = () => {
		setShowModal(false);
	};

	const createTransactionTransfer = async () => {
		try {
			const setDataPin =
				pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;
			const setDataTransfer = { receiverId, amount, notes };
			const response = await axios.get(`/user/pin?pin=${setDataPin}`);
			if (response.status === 200) {
				// PROSES TRANSFER
				const response = await axios.post(
					"/transaction/transfer",
					setDataTransfer
				);
				console.log("berhasil transaksi =>", response.data);
				const transactionId = response.data.data.id;
				const setDataInvoice = {
					amount,
					balanceLeft,
					dateTransaction,
					transactionId,
					notes,
					receiverName: receiver.firstName,
					receiverlastName: receiver.lastName,
					receiverTelp: receiver.noTelp,
					status: "success",
				};
				router.push({
					pathname: "/home/transfer/invoice",
					query: setDataInvoice,
				});
			}
		} catch (error) {
			if (error.response.status === 400) {
				new Error(error.response);
				setMessageModal(error.response.data.msg);
			}
		}
	};

	const changeInputPin = (event) => {
		const nextPin = document.getElementById(
			`pin-${parseInt(event.target.name, 10) + 1}`
		);

		if (nextPin !== null) {
			nextPin.focus();
		}
		setPin({ ...pin, [`pin${event.target.name}`]: event.target.value });
	};

	console.log(receiver);
	return (
		<>
			<Layout pageTitle="Transfer Detail" valueNav={true}>
				<main className="container_main">
					<section className="row">
						<Sidebar />
						<Modal
							show={showModal}
							onHide={closePopUpPin}
							onClickModal={createTransactionTransfer}
							checkPin={changeInputPin}
							maxPin={maxPin}
							messageWrong={messageModal}
						/>
						<section className="col transfer_detail-container mt-4">
							<p className="transfer_detail-container-title">Transfer to</p>
							<div className="transfer-card-list-users mt-3">
								<img
									src={
										receiver.image
											? `http://localhost:3001/uploads/${receiver.image}`
											: "/images/face2.png"
									}
									width={70}
									height={70}
									alt="Face"
								/>
								<div className="transfer-card-list-users-description">
									<h5>
										{receiver ? receiver.firstName : null}{" "}
										{receiver ? receiver.lastName : null}
									</h5>
									<p>
										{receiver
											? receiver.noTelp === undefined
												? "-"
												: receiver.noTelp
											: null}
									</p>
								</div>
							</div>
							<DetailTransfer data={setDataDetails} />
							<div className="d-flex justify-content-end mt-5">
								<button
									onClick={showPopUpPin}
									className="transfer_amoundreceiver-button"
								>
									Continue
								</button>
							</div>
						</section>
					</section>
				</main>
			</Layout>
		</>
	);
}
