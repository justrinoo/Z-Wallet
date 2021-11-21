import { useRouter } from "next/router";
import React from "react";

export default function NotificationMidtrans() {
	const router = useRouter();
	const dataMidtrans = router.query;
	console.log(dataMidtrans);
	return (
		<>
			<h2>Notif midtrans!</h2>
		</>
	);
}
