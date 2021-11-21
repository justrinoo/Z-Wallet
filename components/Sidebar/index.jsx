import { ArrowUp, Plus, Menu, UserIc } from "components";
import Cookies from "js-cookie";
import { Modal } from "react-bootstrap";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "utils/axios";

export default function Sidebar() {
	const router = useRouter();
	const [isActive, setActive] = useState("dashboard");
	const [show, setShow] = useState(false);
	const [formTopUp, setFormTopUp] = useState({
		amount: "",
	});

	const handleChangePageSidebar = (text) => {
		setActive(text);
		router.push(`/home/${text}`);
	};

	const handleLogout = () => {
		Cookies.remove("token");
		Cookies.remove("user_id");
		localStorage.clear();
		toast.warning("You has been Logout!");
		setTimeout(() => {
			router.push("/auth/login");
		}, 2500);
	};

	const showTopUp = () => {
		setShow(true);
	};

	const handleClose = () => {
		setShow(false);
	};

	// TOP UP CREATE TRANSACTION
	const createTopUp = async (event) => {
		try {
			event.preventDefault();
			const { amount } = formTopUp;
			const response = await axios.post("/transaction/top-up", { amount });
			event.target.reset();
			setFormTopUp({ amount: "" });
			router.push(response.data.data.redirectUrl);
		} catch (error) {
			console.log(error.response);
		}
	};

	const changeAmountText = (event) => {
		setFormTopUp({ ...formTopUp, [event.target.name]: event.target.value });
	};

	return (
		<>
			<section className="col-md-3 mt-4 dashboard_sidebar active-sidebar">
				<ToastContainer />
				<div className="menu-sidebar mx-3 d-flex items-center mt-5">
					<Menu stroke={isActive === "dashboard" ? "#6379F4" : "#4D4B57"} />
					<span
						className={`mx-3 ${
							isActive === "dashboard"
								? "text-sidebar-active"
								: "text-sidebar-default"
						} `}
						onClick={() => handleChangePageSidebar("dashboard")}
					>
						Dashboard
					</span>
				</div>
				<div className="menu-sidebar mx-3 d-flex items-center mt-5">
					<ArrowUp stroke={isActive === "transfer" ? "#6379F4" : "#4D4B57"} />
					<span
						className={`mx-3 ${
							isActive === "transfer"
								? "text-sidebar-active"
								: "text-sidebar-default"
						} `}
						onClick={() => handleChangePageSidebar("transfer")}
					>
						Transfer
					</span>
				</div>
				<div className="menu-sidebar mx-3 d-flex items-center mt-5">
					<Plus stroke={isActive === "top-up" ? "#6379F4" : "#4D4B57"} />
					<span
						className={`mx-3 ${
							isActive === "top-up"
								? "text-sidebar-active"
								: "text-sidebar-default"
						} `}
						onClick={showTopUp}
					>
						Top up
					</span>
				</div>
				<div className="menu-sidebar mx-3 d-flex items-center mt-5">
					<UserIc stroke={isActive === "profile" ? "#6379F4" : "#4D4B57"} />
					<span
						className={`mx-3 ${
							isActive === "profile"
								? "text-sidebar-active"
								: "text-sidebar-default"
						} `}
						onClick={() => handleChangePageSidebar("profile")}
					>
						Profile
					</span>
				</div>
				<div
					className="menu-sidebar mx-3 d-flex items-center mt-5"
					style={{ position: "absolute", bottom: "-60px" }}
				>
					<img src="/icons/log-out.svg" width={28} height={28} alt="Logout" />
					<span className="mx-3 text-sidebar-default" onClick={handleLogout}>
						Logout
					</span>
				</div>
			</section>
			<Modal show={show} onHide={handleClose} centered contentClassName>
				<Modal.Header closeButton style={{ borderBottom: "none" }}>
					<Modal.Title>
						<p className="modal_title">Top up</p>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p className="modal_description" style={{ width: "60%" }}>
						Enter the amount of money, and click submit
					</p>
					<form onSubmit={createTopUp}>
						<input
							type="text"
							name="amount"
							className="form-control py-3"
							onChange={changeAmountText}
						/>
						<div className="d-flex justify-content-end">
							<button type="submit" className="modal_button">
								Submit
							</button>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer
					style={{ borderTop: "none", marginTop: "30px" }}
				></Modal.Footer>
			</Modal>
		</>
	);
}
