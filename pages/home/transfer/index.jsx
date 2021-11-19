import { Layout, Sidebar, TransferComp } from "components";
import { useState } from "react";
import TopUp from "../top-up";

export default function Transfer() {
	return (
		<>
			<Layout pageTitle="Transfer Page" valueNav={true}>
				<main className="dashboard_main container_main">
					<section className="row">
						<Sidebar />
						<section className="col">
							<TransferComp />
						</section>
					</section>
				</main>
			</Layout>
		</>
	);
}
