import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
export default function Navbar({ setStatusNotif }) {
	console.log(setStatusNotif);
	const user = useSelector((state) => state.user);
	const fullname = `${user.users.firstName}${user.users.lastName}`;
	const telp = `${user.users.telp}`;
	const image = `${user.users.image}`;

	const ShowNotification = (text) => {
		if (text === "notif") {
			setStatusNotif(true);
		} else {
			setStatusNotif(false);
		}
	};

	return (
		<>
			<nav className="nav__main d-flex justify-content-between items-center py-4 container_main">
				<section className="nav__brand">
					<Link href="/">
						<span className="nav__brand-title">Zwallet</span>
					</Link>
				</section>
				<section className="nav__profile-user">
					<div className="d-flex items-center">
						<img
							src={
								image === "null"
									? `/images/dummyProfile.png`
									: `http://localhost:3001/uploads/${image}`
							}
							width={52}
							style={{ borderRadius: "14px" }}
							height={52}
							alt="Profile"
						/>
						<div className="d-block mx-3">
							<h5 className="nav__profile-user-name">{fullname}</h5>
							<p className="nav__profile-user-tel">
								{telp === "undefined" ? "-" : telp}
							</p>
						</div>
						<img
							src="/icons/bell.svg"
							className="mt-2 mx-2"
							style={{ cursor: "pointer" }}
							width={24}
							height={24}
							alt="Profile"
							onClick={() => ShowNotification("notif")}
						/>
					</div>
				</section>
			</nav>
		</>
	);
}
