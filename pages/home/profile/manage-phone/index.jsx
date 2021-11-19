import { Layout, Sidebar } from "components";
import Image from "next/image";
export default function ManagePhone() {
	return (
		<>
			<Layout pageTitle="Profile | Manage Phone" valueNav={true}>
				<main className="container_main">
					<section className="row">
						<Sidebar />
						<section className="col profile_managephone-main mt-4">
							<h6 className="profile_main-information-detail-title">
								Manage Phone Number
							</h6>
							<p className="profile_main-information-detail-description">
								You can only delete the phone number and then you must add
								another phone number.
							</p>

							<div className="profile_managephone-card-description-phone">
								<div>
									<p>Primary</p>
									<h5>+62 813 9387 7946</h5>
								</div>
								<div className="profile_managephone-card-description-phone-delete">
									<Image
										src="/icons/trash.svg"
										width={28}
										height={28}
										alt="Delete Phone"
									/>
								</div>
							</div>
						</section>
					</section>
				</main>
			</Layout>
		</>
	);
}
