import Head from "next/head";
import { Navbar, Footer } from "components";
export default function Layout({ children, pageTitle, valueNav }) {
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content="Z-Wallet Easy To Transfer Money." />
			</Head>
			<div>
				{valueNav ? (
					<>
						<Navbar />
						{children}
						<Footer />
					</>
				) : (
					children
				)}
			</div>
		</>
	);
}
