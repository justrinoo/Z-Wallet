import React from "react";
import {
	InfoBalance,
	StatisticInCome,
	ListUserTransactionHistory,
} from "components";

export default function DashboardComponent({ setSeeAll }) {
	return (
		<>
			<section className="col-md-9 mt-4 dashboard_content">
				<section className="dashboard_content-info-balance">
					{/* Balance */}
					<InfoBalance />
				</section>

				<section className="dashboard_content-container">
					{/* Statistic */}
					<section className="dashboard_content-statistic-container">
						<StatisticInCome />
					</section>

					<section className="dashboard_content-transaction-history">
						{/* History */}
						<ListUserTransactionHistory setSeeAll={setSeeAll} />
					</section>
				</section>
			</section>
		</>
	);
}
