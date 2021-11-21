import { Layout, Sidebar, DetailTransfer } from "components";
export default function DetailTransferPage() {
	return (
		<>
			<Layout pageTitle="Detail Trnasfer Receiver" valueNav={true}>
				<main className="container_main">
					<section className="row">
						<Sidebar />
						<section className="col">
							<DetailTransfer />
						</section>
					</section>
				</main>
			</Layout>
		</>
	);
}
