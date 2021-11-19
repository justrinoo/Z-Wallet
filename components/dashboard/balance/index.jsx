import React, { useEffect } from "react";
import { ArrowUp, Plus } from "components";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
export default function Balance() {
	const router = useRouter();
	const user = useSelector((state) => state);
	const telp = `${user.user.users.telp}`;

	useEffect(() => {
		return user;
	}, [user]);

	const goToTransferPage = () => {
		router.push("/home/transfer");
	};

	const goToTopUpPage = () => {
		router.push("/home/top-up");
	};
	return (
		<>
			<div className="dashboard_content-info-balance-left">
				<h6 className="dashboard_content-info-balance-title">Balance</h6>
				<h4 className="dashboard_content-info-balance-money">
					Rp{new Intl.NumberFormat("id-ID").format(user.user.users.balance)}
				</h4>
				<p className="dashboard_content-info-balance-tel">
					{telp === "undefined" ? "-" : telp}
				</p>
			</div>
			<div className="dashboard_content-info-balance-right">
				<button
					className="dashboard_content-info-balance-button"
					onClick={goToTransferPage}
				>
					<ArrowUp stroke="#B5B0ED" />
					<span className="mx-1">Transfer</span>
				</button>
				<button
					className="dashboard_content-info-balance-button"
					onClick={goToTopUpPage}
				>
					<Plus stroke="#B5B0ED" />
					<span className="mx-1">Topup</span>
				</button>
			</div>
		</>
	);
}
