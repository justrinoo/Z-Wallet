import { Layout, Sidebar, Input, Lock, Button } from "components";
export default function ChangePassword() {
	return (
		<>
			<Layout pageTitle="Profile | Change Password" valueNav={true}>
				<main className="container_main">
					<section className="row">
						<Sidebar />
						<section className="col profile_changepassword-main mt-4">
							<section className="profile_changepassword-container">
								<h6 className="profile_main-information-detail-title">
									Change Password
								</h6>
								<p className="profile_main-information-detail-description">
									You must enter your current password and then type your new
									password twice.
								</p>

								<form className="profile_changepassword-form">
									<div className="profile_changepassword-form-wrapper mt-5">
										<Lock stroke="#A9A9A9" />
										<Input
											type="password"
											name="curent"
											placeholderChildren="Current password"
											classNameChildren="w-50"
											onChange={() => null}
										/>
									</div>
									<div className="profile_changepassword-form-wrapper mt-5">
										<Lock stroke="#A9A9A9" />
										<Input
											type="password"
											name="curent"
											placeholderChildren="New password"
											classNameChildren="w-50"
											onChange={() => null}
										/>
									</div>
									<div className="profile_changepassword-form-wrapper mt-5">
										<Lock stroke="#A9A9A9" />
										<Input
											type="password"
											name="curent"
											placeholderChildren="Repeat new password"
											classNameChildren="w-50"
											onChange={() => null}
										/>
									</div>
									<div className="w-50 mx-auto mt-3">
										<Button disabled={true}>Change Password</Button>
									</div>
								</form>
							</section>
						</section>
					</section>
				</main>
			</Layout>
		</>
	);
}
