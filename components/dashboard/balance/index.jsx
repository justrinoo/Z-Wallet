import React from "react";
import { ArrowUp, Plus } from "components";
export default function Balance() {
	return (
		<>
			<div className="dashboard_content-info-balance-left">
				<h6 className="dashboard_content-info-balance-title">Balance</h6>
				<h4 className="dashboard_content-info-balance-money">Rp120.000</h4>
				<p className="dashboard_content-info-balance-tel">+62 813-9387-7946</p>
			</div>
			<div className="dashboard_content-info-balance-right">
				<button className="dashboard_content-info-balance-button">
					<ArrowUp stroke="#B5B0ED" />
					<span className="mx-1">Transfer</span>
				</button>
				<button className="dashboard_content-info-balance-button">
					<Plus stroke="#B5B0ED" />
					<span className="mx-1">Topup</span>
				</button>
			</div>
		</>
	);
}
