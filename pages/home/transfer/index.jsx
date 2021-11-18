import { Layout, Sidebar, TransferComp } from "components";
import { useState } from "react";

export default function Transfer() {
	const [statusSidebar, setStatusSidebar] = useState(false);
	const [seeAll, setSeeAll] = useState(false);
	return (
		<>
			<Layout pageTitle="Transfer Page" valueNav={true}>
				<main className="dashboard_main container_main">
					<section className="row">
						<Sidebar setStatusSidebar={setStatusSidebar} />
						<section className="col">
							<TransferComp />
						</section>
					</section>
				</main>
			</Layout>
		</>
	);
}
