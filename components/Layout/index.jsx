import Head from "next/head";
import React, { useState } from "react";
import { Navbar, Footer, Notification } from "components";
export default function Layout({ children, pageTitle, valueNav }) {
	const [statusNotif, setStatusNotif] = useState(false);

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content="Z-Wallet Easy To Transfer Money." />
			</Head>
			<div>
				{valueNav ? (
					<>
						<Navbar setStatusNotif={setStatusNotif} />
						{statusNotif ? <Notification /> : null}
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
