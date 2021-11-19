import React, { useEffect, useState } from "react";
import { Layout, IntroZwallet, Input, Button, Mail } from "components";
import { useRouter } from "next/router";
import { resetPassword } from "store/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

export default function ResetPassword() {
	const router = useRouter();
	const auth = useSelector((state) => state.auth);
	const [error, setError] = useState(false);
	const dispatch = useDispatch();
	const { key } = router.query;
	const [message, setMessage] = useState("");
	const [formConfirmPassword, setFormConfirmPassword] = useState({
		newPassword: "",
		confirmPassword: "",
	});

	const changeTextPassword = (event) => {
		setFormConfirmPassword({
			...formConfirmPassword,
			[event.target.name]: event.target.value,
		});
	};

	const forgotPasswordConfirmation = async (event) => {
		try {
			event.preventDefault();
			const { newPassword, confirmPassword } = formConfirmPassword;
			const setDataForgotPassword = {
				keysChangePassword: key,
				newPassword,
				confirmPassword,
			};
			// console.log("FORGOT PASSWORD RUNNING...", setDataForgotPassword);
			const response = await dispatch(resetPassword(setDataForgotPassword));
			setError(false);
			toast(response.value.data.msg);
			router.push("/auth/login");
		} catch (error) {
			setError(true);
		}
	};

	useEffect(() => {
		// return null;
		setMessage(auth.message);
	}, [auth.message]);

	const isDisabled =
		formConfirmPassword.confirmPassword.split("").length >= 6 && true; // REGEX PATTERN
	return (
		<>
			<Layout pageTitle="Z-Wallet | Confirm Password">
				<main className="auth_main">
					<IntroZwallet />
					<section className="auth_reset">
						<ToastContainer />
						<h5 className="auth_reset-title">
							Did You Forgot Your Password? Don’t Worry, You Can Reset Your
							Password In a Minutes.
						</h5>
						<p className="auth_reset-paragraph">
							Now you can create a new password for your Zwallet account. Type
							your password twice so we can confirm your new passsword.
						</p>
						<form
							className="auth_form mt-4"
							onSubmit={forgotPasswordConfirmation}
						>
							<div className="mt-3 auth_form-container">
								<Mail stroke={"#A9A9A9"} />
								<Input
									type="password"
									name="newPassword"
									placeholderChildren="Create new password"
									onChange={changeTextPassword}
								/>
							</div>
							<div className="mt-5 auth_form-container">
								<Mail stroke={"#A9A9A9"} />
								<Input
									type="password"
									name="confirmPassword"
									placeholderChildren="Create new password"
									onChange={changeTextPassword}
								/>
							</div>
							{error ? (
								<p className="text-center mt-3 fs-6 auth_form-title-error">
									{message}
								</p>
							) : null}
							<div className="mt-4">
								<Button disabled={!isDisabled}>Confirm</Button>
							</div>
						</form>
					</section>
				</main>
			</Layout>
		</>
	);
}
