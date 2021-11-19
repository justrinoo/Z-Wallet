import { Layout, Sidebar, Input, Button } from "components";
import Image from "next/image";
export default function NewPhoneNumber() {
	return (
		<>
			<Layout pageTitle="Profile | Add Phone Number" valueNav={true}>
				<main className="container_main">
					<section className="row">
						<Sidebar />
						<section className="col profile_phonenumber-main mt-4">
							<h6 className="profile_main-information-detail-title">
								Add Phone Number
							</h6>
							<p className="profile_main-information-detail-description">
								Add at least one phone number for the transfer ID so you can
								start transfering your money to another user.
							</p>
							<form className="profile_phonenumber-form mt-5">
								<div className="profile_phonenumber-form-wrapper">
									<div className="profile_phonenumber-form-field-phone-wrapper">
										<Image
											src="/icons/phone.svg"
											width={24}
											height={24}
											alt="Phone Number Form"
										/>
										<h6 className="profile_phonenumber-form-field-format-number">
											+62
										</h6>
									</div>
									<Input
										type="text"
										name="phone"
										placeholderChildren="Enter your phone number"
										classNameChildren="profile_phonenumber-form-input"
									/>
								</div>
								<div className="w-50 mx-auto">
									<Button disabled={true}>Add Phone Number</Button>
								</div>
							</form>
						</section>
					</section>
				</main>
			</Layout>
		</>
	);
}
