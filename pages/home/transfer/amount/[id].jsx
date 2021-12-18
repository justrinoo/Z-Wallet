import { Layout, Sidebar, AmoundReCeiver } from "components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "utils/axios";

export default function AmountDetailTransferMoney(props) {
	const router = useRouter();
	const [user, setUser] = useState({});
	const { id } = router.query;
	const getDetailTransferMoneyReceiver = async () => {
		try {
			const response = await axios.get(`/user/profile/${id}`);
			setUser(response.data.data);
		} catch (error) {
			new Error(error);
		}
	};

	useEffect(() => {
		getDetailTransferMoneyReceiver();
	}, [id]);

	return (
		<>
			<Layout pagetitle="Transfer Amount Receiver" valueNav={true}>
				<main className="container_main">
					<section className="row">
						<Sidebar />
						<div className="col mt-4">
							<AmoundReCeiver user={user} />
						</div>
					</section>
				</main>
			</Layout>
		</>
	);
}
