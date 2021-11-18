import React from "react";
import Link from "next/link";
export default function Navbar(props) {
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
							src="/images/dummyProfile.png"
							width={52}
							height={52}
							alt="Profile"
						/>
						<div className="d-block mx-3">
							<h5 className="nav__profile-user-name">Robert Chandler</h5>
							<p className="nav__profile-user-tel">+62 8139 3877 7946</p>
						</div>
						<img
							src="/icons/bell.svg"
							className="mt-2 mx-2"
							width={24}
							height={24}
							alt="Profile"
						/>
					</div>
				</section>
			</nav>
		</>
	);
}
