import { Layout, Sidebar, Input, Button } from "components";
import Image from "next/image";
import router, { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import axios from "utils/axios";
export default function NewPhoneNumber() {
	const router = useRouter();
	const user = useSelector((state) => state.user);
	const id = user.users.id;
	const [noTelp, setNoTelp] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState(false);

	const submitUpdatePhoneNumber = async (event) => {
		try {
			event.preventDefault();
			const response = await axios.patch(`/user/profile/${id}`, {
				noTelp,
			});
			setNoTelp("");
			setError(false);
			event.target.reset();
			toast.success(response.data.msg);
			setTimeout(() => {
				router.push(`/home/profile/detail/${response.data.data.id}`);
			}, 1500);
		} catch (error) {
			setError(true);
			new Error(error.response);
		}
	};

	const isDisabled = noTelp.split("").length >= 11 && true;
	return (
		<>
			<Layout pageTitle="Profile | Add Phone Number" valueNav={true}>
				<main className="container_main">
					<section className="row">
						<Sidebar />
						<section className="col profile_phonenumber-main mt-4">
							<ToastContainer />
							<h6 className="profile_main-information-detail-title">
								Add Phone Number
							</h6>
							<p className="profile_main-information-detail-description">
								Add at least one phone number for the transfer ID so you can
								start transfering your money to another user.
							</p>
							<form
								className="profile_phonenumber-form mt-5"
								onSubmit={submitUpdatePhoneNumber}
							>
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
										name="noTelp"
										onChange={(e) => setNoTelp(`+62${e.target.value}`)}
										placeholderChildren="Enter your phone number"
										classNameChildren="profile_phonenumber-form-input"
									/>
								</div>
								{error ? (
									<p className="text-center fw-bold text-danger mt-2">
										{message}
									</p>
								) : null}
								<div className="profile_phonenumber-button-add-phone mx-auto">
									<Button disabled={!isDisabled}>Add Phone Number</Button>
								</div>
							</form>
						</section>
					</section>
				</main>
			</Layout>
		</>
	);
}
