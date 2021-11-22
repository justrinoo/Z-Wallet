import { Input, Layout } from "components";
import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";

export default function AmoundReCeiver({ user }) {
	const router = useRouter();
	const { id } = router.query;
	const users = useSelector((state) => state.user);

	const [formAmound, setFormAmount] = useState({
		amount: "",
		notes: "",
	});

	const changeInputAmount = (event) => {
		setFormAmount({
			...formAmound,
			[event.target.name]: event.target.value,
		});
	};

	const changeToPageDetailTransfer = () => {
		const { amount, notes } = formAmound;
		const receiverId = id;
		const balance = users.users.balance;
		const sisaBalance = balance - amount;
		const dateTransaction = new Date(Date.now()).toDateString();

		const setDataTransaction = {
			receiverId,
			amount,
			notes,
			balanceLeft: sisaBalance,
			dateTransaction,
			image: user.image,
		};
		router.push({
			pathname: `/home/transfer/amount/detail/${receiverId}`,
			query: setDataTransaction,
		});
	};

	const isDisabled = formAmound.amount.split("").length >= 4 && true;
	console.log();
	return (
		<>
			<Layout pageTitle="Transfer Amount">
				<main className="transfer_amoundreceiver-main position-relative">
					<section className="transfer_amoundreceiver-card">
						<h5 className="transfer_amoundreceiver-title">Transfer Money</h5>
						<div className="transfer-card-list-users mt-3">
							<img
								src={
									user && user.image
										? `http://localhost:3001/uploads/${user.image}`
										: "/images/face2.png"
								}
								width={70}
								height={70}
								alt="Profile"
							/>
							<div className="transfer-card-list-users-description">
								<h5>
									{user ? user.firstName : null} {user ? user.lastName : null}
								</h5>
								<p>
									{user
										? user.noTelp === undefined
											? "-"
											: user.noTelp
										: null}
								</p>
							</div>
						</div>

						<p className="transfer_amoundreceiver-instruction">
							Type the amount you want to transfer and then press continue to
							the next steps.
						</p>
						{users.users.balance > 0 ? (
							<div className="transfer_amoundreceiver-rows">
								<input
									type="text"
									className="transfer_amoundreceiver-input"
									onChange={changeInputAmount}
									name="amount"
									placeholder="0.00"
								/>
								<p className="transfer_amoundreceiver-money-available">
									Rp.
									{new Intl.NumberFormat("id-ID").format(
										users.users.balance
									)}{" "}
									Availabe
								</p>
								<div className="transfer_amoundreceiver-parent-notes">
									{/* ICON PENCIL */}
									<img src="/icons/pencil.svg" alt="Email" />
									<Input
										type="text"
										name="notes"
										classNameChildren="w-50"
										onChange={changeInputAmount}
										placeholderChildren="Add some notes"
									/>
								</div>
								<div className="d-flex justify-content-end mt-5">
									<button
										onClick={changeToPageDetailTransfer}
										className={` ${
											isDisabled
												? "transfer_amoundreceiver-button"
												: "transfer_amoundreceiver-button-disabled"
										}`}
										disabled={!isDisabled}
									>
										Continue
									</button>
								</div>
							</div>
						) : (
							<p className="text-center fw-bold text-danger fs-4">
								You don{"'"}t have enough balance 😒
							</p>
						)}
					</section>
				</main>
			</Layout>
		</>
	);
}
