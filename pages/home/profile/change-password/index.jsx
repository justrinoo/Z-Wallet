import { Layout, Sidebar, Input, Lock, Button } from "components";
import { useRouter } from "next/router";
import { useState } from "react";

import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import axios from "utils/axios";
export default function ChangePassword() {
	const router = useRouter();
	const user = useSelector((state) => state.user);
	const id = `${user.users.id}`;
	const [message, setMessage] = useState("");
	const [error, setError] = useState(false);
	const [formChangePassword, setFormChangePassword] = useState({
		oldPassword: "",
		newPassword: "",
		confirmPassword: "",
	});

	const changeInputPassword = (event) => {
		setFormChangePassword({
			...formChangePassword,
			[event.target.name]: event.target.value,
		});
	};

	const changePasswordSubmit = async (event) => {
		try {
			event.preventDefault();
			const { oldPassword, newPassword, confirmPassword } = formChangePassword;
			const setDataChangePassword = {
				oldPassword,
				newPassword,
				confirmPassword,
			};

			const response = await axios.patch(
				`/user/password/${id}`,
				setDataChangePassword
			);
			setFormChangePassword({
				oldPassword: "",
				newPassword: "",
				confirmPassword: "",
			});
			event.target.reset();
			toast.success(response.data.msg);
			setTimeout(() => {
				router.push("/home/profile");
			}, 1500);
		} catch (error) {
			setError(true);
			setMessage(error.response.data.msg);
		}
	};

	let isDisabled;
	if (formChangePassword.newPassword === formChangePassword.confirmPassword) {
		isDisabled = true;
	} else if (
		formChangePassword.newPassword &&
		formChangePassword.confirmPassword === ""
	) {
		isDisabled = false;
	} else {
		isDisabled = false;
	}
	return (
		<>
			<Layout pageTitle="Profile | Change Password" valueNav={true}>
				<main className="container_main">
					<section className="row">
						<Sidebar />
						<section className="col profile_changepassword-main mt-4">
							<ToastContainer />
							<section className="profile_changepassword-container">
								<h6 className="profile_main-information-detail-title">
									Change Password
								</h6>
								<p className="profile_main-information-detail-description">
									You must enter your current password and then type your new
									password twice.
								</p>

								<form
									className="profile_changepassword-form"
									onSubmit={changePasswordSubmit}
								>
									<div className="profile_changepassword-form-wrapper mt-5">
										<Lock stroke="#A9A9A9" />
										<Input
											type="password"
											name="oldPassword"
											placeholderChildren="Current password"
											classNameChildren="w-50"
											onChange={changeInputPassword}
										/>
									</div>
									<div className="profile_changepassword-form-wrapper mt-5">
										<Lock stroke="#A9A9A9" />
										<Input
											type="password"
											name="newPassword"
											placeholderChildren="New password"
											classNameChildren="w-50"
											onChange={changeInputPassword}
										/>
									</div>
									<div className="profile_changepassword-form-wrapper mt-5">
										<Lock stroke="#A9A9A9" />
										<Input
											type="password"
											name="confirmPassword"
											placeholderChildren="Repeat new password"
											classNameChildren="w-50"
											onChange={changeInputPassword}
										/>
									</div>
									{error ? (
										<p className="text-center mt-2 fw-bold text-danger">
											{message}
										</p>
									) : null}
									<div className="profile_changepassword-button-change mx-auto mt-3">
										<Button disabled={!isDisabled}>Change Password</Button>
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
