import { Layout, Sidebar } from "components";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Profile() {
	const router = useRouter();
	const profileMenuChangePage = (someText) => {
		if (someText === "2uh3jo388972-232jhuy9772") {
			router.push(`/home/profile/detail/${someText}`);
		} else {
			router.push(`/home/profile/${someText}`);
		}
	};
	return (
		<>
			<Layout pageTitle="Profile" valueNav={true}>
				<main className="container_main">
					<section className="row">
						<Sidebar />
						<section className="col profile_main mt-4">
							<section className="profile_information">
								<Image
									src="/images/face1.png"
									width={80}
									height={80}
									alt="Profile"
								/>
								<div className="profile_information-edit">
									<Image
										src="/icons/edit.svg"
										width={11}
										height={11}
										alt="Edit Profile"
									/>
									<p className="profile_information-text-edit">Edit</p>
								</div>
								<h3 className="profile_information-edit-name">
									Robert Chandler
								</h3>
								<span className="profile_information-edit-telp">
									+62 813-9387-7946
								</span>
								<div
									className="profile_information-edit-menu"
									onClick={() =>
										profileMenuChangePage("2uh3jo388972-232jhuy9772")
									}
								>
									<span className="profile_information-edit-menu-text">
										Personal Information
									</span>
									<Image
										src="/icons/arrow-left.svg"
										width={28}
										height={28}
										alt="Link Menu"
									/>
								</div>
								<div
									className="profile_information-edit-menu"
									onClick={() => profileMenuChangePage("change-password")}
								>
									<span className="profile_information-edit-menu-text">
										Change Password
									</span>
									<Image
										src="/icons/arrow-left.svg"
										width={28}
										height={28}
										alt="Link Menu"
									/>
								</div>
								<div
									className="profile_information-edit-menu"
									onClick={() => profileMenuChangePage("change-pin")}
								>
									<span className="profile_information-edit-menu-text">
										Change Pin
									</span>
									<Image
										src="/icons/arrow-left.svg"
										width={28}
										height={28}
										alt="Link Menu"
									/>
								</div>
								<div className="profile_information-edit-menu">
									<span className="profile_information-edit-menu-text">
										Logout
									</span>
									<Image
										src="/icons/arrow-left.svg"
										width={28}
										height={28}
										alt="Link Menu"
									/>
								</div>
							</section>
						</section>
					</section>
				</main>
			</Layout>
		</>
	);
}
