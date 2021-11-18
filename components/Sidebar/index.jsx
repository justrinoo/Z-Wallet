import { ArrowUp, Plus, Menu } from "components";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

export default function Sidebar() {
	const router = useRouter();
	const [isActive, setActive] = useState("dashboard");

	const handleChangePageSidebar = (text) => {
		setActive(text);
		router.push(`/home/${text}`);
	};

	return (
		<>
			<section className="col-md-3 mt-4 dashboard_sidebar active-sidebar">
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
					<Plus />
					<span className="mx-3 text-sidebar-default">Top up</span>
				</div>
				<div className="menu-sidebar mx-3 d-flex items-center mt-5">
					<img src="/icons/user.svg" width={28} height={28} alt="User" />
					<span className="mx-3 text-sidebar-default">Profile</span>
				</div>
				<div
					className="menu-sidebar mx-3 d-flex items-center mt-5"
					style={{ position: "absolute", bottom: "-60px" }}
				>
					<img src="/icons/log-out.svg" width={28} height={28} alt="Logout" />
					<span className="mx-3 text-sidebar-default">Logout</span>
				</div>
			</section>
		</>
	);
}
