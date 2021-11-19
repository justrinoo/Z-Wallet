import { useRouter } from "next/router";
import { Layout, Sidebar } from "components";
import Link from "next/link";

export default function DetailProfile() {
	const isChecked = true;
	const router = useRouter();
	const { id } = router.query;
	return (
		<>
			<Layout pageTitle="Profile | Detail Profile" valueNav={true}>
				<main className="container_main">
					<section className="row">
						<Sidebar />
						<section className="col mt-4">
							<section className="profile_main-information-detail">
								<h6 className="profile_main-information-detail-title">
									Personal Information
								</h6>
								<p className="profile_main-information-detail-description">
									We got your personal information from the sign up proccess. If
									you want to make changes on your information, contact our
									support.
								</p>
								<div className="profile_main-information-detail-list-description">
									<h6 className="profile_main-information-detail-list-description-title-field">
										First Name
									</h6>
									<h6 className="profile_main-information-detail-list-description-title-value">
										Robert
									</h6>
								</div>
								<div className="profile_main-information-detail-list-description">
									<h6 className="profile_main-information-detail-list-description-title-field">
										First Name
									</h6>
									<h6 className="profile_main-information-detail-list-description-title-value">
										Robert
									</h6>
								</div>
								<div className="profile_main-information-detail-list-description">
									<h6 className="profile_main-information-detail-list-description-title-field">
										Last Name
									</h6>
									<h6 className="profile_main-information-detail-list-description-title-value">
										Chandler
									</h6>
								</div>
								<div className="profile_main-information-detail-list-description">
									<h6 className="profile_main-information-detail-list-description-title-field">
										Verified E-mail
									</h6>
									<h6 className="profile_main-information-detail-list-description-title-value">
										pewdiepie1@gmail.com
									</h6>
								</div>
								<div className="profile_main-information-detail-list-description ">
									<h6 className="profile_main-information-detail-list-description-title-field">
										Phone Number
									</h6>
									<div className="profile_main-information-detail-list-description-manage">
										<h6 className="profile_main-information-detail-list-description-title-value">
											{isChecked ? "+62 813-9387-7946" : "-"}
										</h6>
										<Link
											href={`/home/profile/${
												isChecked ? "manage-phone" : "new-phone-number"
											}`}
										>
											<span className="profile_main-information-detail-list-description-title-link-manage">
												Manage
											</span>
										</Link>
									</div>
								</div>
							</section>
						</section>
					</section>
				</main>
			</Layout>
		</>
	);
}
