import Image from "next/image";

export default function listReceiver({ setStatusNextComp, status }) {
	const handleNextPageAmoundReceiver = (event) => {
		const value = event.target.localName;
		if (value === "div") {
			setStatusNextComp(true);
		} else {
			setStatusNextComp(false);
		}
	};

	return (
		<>
			<div
				className="transfer-card-list-users"
				style={status ? { cursor: "pointer" } : { cursor: "default" }}
				onClick={status ? handleNextPageAmoundReceiver : null}
			>
				<Image src="/images/face1.png" width={70} height={70} alt="Profile" />
				<div className="transfer-card-list-users-description">
					<h5>Samuel Suhi</h5>
					<p>+62 813-8492-9994</p>
				</div>
			</div>
		</>
	);
}
