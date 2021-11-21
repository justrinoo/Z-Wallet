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
		};
		router.push({
			pathname: `/home/transfer/amount/detail/${receiverId}`,
			query: setDataTransaction,
		});
	};

	return (
		<>
			<Layout pageTitle="Transfer Amount">
				<main className="transfer_amoundreceiver-main position-relative">
					<section className="transfer_amoundreceiver-card">
						<h5 className="transfer_amoundreceiver-title">Transfer Money</h5>
						<div className="transfer-card-list-users mt-3">
							<Image
								src="/images/face1.png"
								width={70}
								height={70}
								alt="Profile"
							/>
							<div className="transfer-card-list-users-description">
								<h5>
									{user ? user.firstName : null} {user ? user.lastName : null}
								</h5>
								<p>
									{user ? (user.telp === undefined ? "-" : user.telp) : null}
								</p>
							</div>
						</div>

						<p className="transfer_amoundreceiver-instruction">
							Type the amount you want to transfer and then press continue to
							the next steps.
						</p>
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
									className="transfer_amoundreceiver-button"
								>
									Continue
								</button>
							</div>
						</div>
					</section>
				</main>
			</Layout>
		</>
	);
}
