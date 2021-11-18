import InputPin from "components/InputPin";
import { useRouter } from "next/dist/client/router";
import { Modal } from "react-bootstrap";

export default function ModalComponent({ show, onHide, setStatusInvoicePage }) {
	const VerivicationPin = (text) => {
		if (text === "TESTING") {
			setStatusInvoicePage(true);
		} else {
			setStatusInvoicePage(false);
		}
	};
	console.log("show =>", show);
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
						<div className="row mt-5">
							<InputPin changePin={() => null} />
						</div>
					</Modal.Body>
					<Modal.Footer style={{ borderTop: "none", marginTop: "30px" }}>
						<button
							className="modal_button"
							onClick={() => VerivicationPin("TESTING")}
						>
							Continue
						</button>
					</Modal.Footer>
				</form>
			</Modal>
		</>
	);
}
