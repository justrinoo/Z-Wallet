import { Layout, Sidebar, Invoice } from "components";
import { useRouter } from "next/router";

export default function InvoicePage() {
	const router = useRouter();
	const data = router.query;
	const {
		amount,
		balanceLeft,
		dateTransaction,
		notes,
		receiverName,
		receiverTelp,
		receiverlastName,
		transactionId,
		status,
	} = data;
	const setDataInvoice = {
		amount,
		balanceLeft,
		dateTransaction,
		notes,
		receiverName,
		receiverTelp,
		receiverlastName,
		status,
		transactionId,
	};
	// console.log("data hasil transaksi", data);
	return (
		<>
			<Layout pageTitle="Transfer Invoice Detail" valueNav={true}>
				<main className="container_main">
					<section className="row">
						<Sidebar />
						<section className="col mt-4">
							<Invoice data={setDataInvoice} />
						</section>
					</section>
				</main>
			</Layout>
		</>
	);
}
