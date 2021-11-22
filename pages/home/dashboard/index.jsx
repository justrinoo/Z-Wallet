import {
	Layout,
	Sidebar,
	Dashboard,
	FilterHistoryTransaction,
} from "components";

import React, { useState } from "react";
import Transfer from "../transfer";
import { getDataCookie } from "middlewares/authorization";

export async function getServerSideProps(context) {
	const storageCookie = await getDataCookie(context);
	if (!storageCookie.token) {
		return {
			redirect: {
				destination: "/auth/login",
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
}
export default function HomeDashboard() {
	const [statusSidebar, setStatusSidebar] = useState(false);
	const [seeAll, setSeeAll] = useState(false);

	return (
		<>
			<Layout pageTitle="Home Dashboard" valueNav={true}>
				<main className="dashboard_main container_main">
					<section className="row">
						<Sidebar />
						{/* DASHBOARD COMPOENENT */}
						{seeAll ? (
							<FilterHistoryTransaction />
						) : (
							<Dashboard setSeeAll={setSeeAll} />
						)}
					</section>
				</main>
			</Layout>
		</>
	);
}
