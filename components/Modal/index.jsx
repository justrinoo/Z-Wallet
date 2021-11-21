import InputPin from "components/InputPin";
import { useRouter } from "next/dist/client/router";
import { Modal } from "react-bootstrap";

export default function ModalComponent({
	show,
	onHide,
	onClickModal,
	checkPin,
	maxPin,
	messageWrong,
}) {
	return (
		<>
			<Modal show={show} onHide={onHide} centered contentClassName>
				<form onSubmit={(e) => e.preventDefault()}>
					<Modal.Header closeButton style={{ borderBottom: "none" }}>
						<Modal.Title>
							<span className="modal_title">Enter PIN to Transfer</span>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p className="modal_description">
							Enter your 6 digits PIN for confirmation to continue transferring
							money.
						</p>
						<p className="text-center text-danger fw-bold">{messageWrong}</p>
						<div className="row mt-5">
							{maxPin === undefined
								? null
								: maxPin.map((item, idx) => (
										<InputPin changePin={checkPin} key={idx} namePin={item} />
								  ))}
						</div>
					</Modal.Body>
					<Modal.Footer style={{ borderTop: "none", marginTop: "30px" }}>
						<button className="modal_button" onClick={onClickModal}>
							Continue
						</button>
					</Modal.Footer>
				</form>
			</Modal>
		</>
	);
}
