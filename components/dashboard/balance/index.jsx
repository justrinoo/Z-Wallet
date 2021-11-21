import React, { useEffect, useState } from "react";
import { ArrowUp, Plus } from "components";
import { getUserById } from "store/actions/user";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Balance() {
	const dispatch = useDispatch();
	const router = useRouter();
	const [user, setUser] = useState({});
	// const telp = `${user.telp}`;

	const getUserByIdUser = async () => {
		const response = await dispatch(getUserById(Cookies.get("user_id")));
		setUser(response.value.data.data);
	};

	useEffect(() => {
		getUserByIdUser();
	}, []);

	const goToTransferPage = () => {
		router.push("/home/transfer");
	};

	const goToTopUpPage = () => {
		router.push("/home/top-up");
	};

	let balanceMoney = new Intl.NumberFormat("id-ID").format(user.balance);
	return (
		<>
			<div className="dashboard_content-info-balance-left">
				<h6 className="dashboard_content-info-balance-title">Balance</h6>
				<h4 className="dashboard_content-info-balance-money">
					{balanceMoney === "NaN" ? "Please Wait..." : `Rp${balanceMoney}`}
				</h4>
				<p className="dashboard_content-info-balance-tel">
					{user.telp === "undefined" ? "-" : user.telp}
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
