import React, { useState } from "react";
import { Layout, Sidebar, Modal } from "components";

export default function TopUp() {
	const [statusSidebar, setStatusSidebar] = useState(false);
	return (
		<>
			<Layout pageTitle="Transfer Page" valueNav={true}>
				<main className="dashboard_main container_main">
					<section className="row">
						<Sidebar />
						<section className="col">SKIPPED</section>
					</section>
				</main>
			</Layout>
		</>
	);
}
