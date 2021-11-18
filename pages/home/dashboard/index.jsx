import {
	Layout,
	Sidebar,
	Dashboard,
	FilterHistoryTransaction,
} from "components";

import React, { useState } from "react";
import Transfer from "../transfer";

export default function HomeDashboard() {
	const [statusSidebar, setStatusSidebar] = useState(false);
	const [seeAll, setSeeAll] = useState(false);

	return (
		<>
			<Layout pageTitle="Home Dashboard" valueNav={true}>
				<main className="dashboard_main container_main">
					<section className="row">
						<Sidebar setStatusSidebar={setStatusSidebar} />
						{/* DASHBOARD COMPOENENT */}
						{!statusSidebar ? (
							seeAll ? (
								<FilterHistoryTransaction />
							) : (
								<Dashboard setSeeAll={setSeeAll} />
							)
						) : (
							<Transfer />
						)}
					</section>
				</main>
			</Layout>
		</>
	);
}
