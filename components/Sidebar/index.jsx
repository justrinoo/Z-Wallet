import { ArrowUp, Plus, Menu, UserIc } from "components";
import Cookies from "js-cookie";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Sidebar() {
	const router = useRouter();
	const [isActive, setActive] = useState("dashboard");

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
						onClick={() => handleChangePageSidebar("top-up")}
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
		</>
	);
}
