import { useRouter } from "next/router";

export default function ListReCeiver({ receivers }) {
	const router = useRouter();
	const detailTransferReceiver = (id) => {
		router.push({
			pathname: `/home/transfer/amount/${id}`,
		});
	};
	return (
		<>
			<div
				className="transfer-card-list-users mt-3"
				style={{ cursor: "pointer" }}
				onClick={() => detailTransferReceiver(receivers.id)}
			>
				<img
					src={
						receivers.image
							? `http://localhost:3001/uploads/${receivers.image}`
							: "/images/face1.png"
					}
					width={70}
					height={70}
					alt="Profile"
				/>
				<div className="transfer-card-list-users-description">
					<h5>
						{receivers ? receivers.firstName : null}{" "}
						{receivers ? receivers.lastName : null}
					</h5>
					<p>
						{receivers
							? receivers.telp === undefined
								? "-"
								: receivers.telp
							: null}
					</p>
				</div>
			</div>
		</>
	);
}
