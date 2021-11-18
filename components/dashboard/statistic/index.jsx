import React from "react";
import { ArrowUp, ArrowDown } from "components";
export default function Statistic() {
	return (
		<>
			<div className="dashboard_content-statistic-outcome">
				<div className="dashboard_content-statictic-income-outcome">
					{/* <img src="/icons/arrow-up.svg" width={28} height={28} alt="OutCome" /> */}
					<ArrowDown stroke="#1EC15F" />
					<p className="dashboard_content-statistic-title">Income</p>
					<p className="dashboard_content-statistic-money">Rp.2.200.000</p>
				</div>
				<div className="dashboard_content-statictic-income-outcome">
					<ArrowUp stroke="#FF5B37" />
					<p className="dashboard_content-statistic-title">Expense</p>
					<p className="dashboard_content-statistic-money">Rp.1.500.000</p>
				</div>
			</div>
			<p className="text-center">CHART JS</p>
		</>
	);
}
