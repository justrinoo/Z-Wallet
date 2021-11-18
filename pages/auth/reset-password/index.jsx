import LeftContent from "components/auth/intro-zwallet";
import { Layout, Input, Button } from "components";
import { useState } from "react";

export default function ResetPassword() {
	const [resetForm, setResetForm] = useState({
		email: "",
	});

	const changeTextEmail = (event) => {
		setResetForm({ ...resetForm, [event.target.name]: event.target.value });
	};
	const isDisabled = resetForm.email.split("").length > 6 && true; // REGEX PATTERN
	return (
		<>
			<Layout pageTitle="Z-wallet | Reset Password">
				<main className="auth_main">
					<LeftContent />
					<section className="auth_reset">
						<h5 className="auth_reset-title">
							Did You Forgot Your Password? Don’t Worry, You Can Reset Your
							Password In a Minutes.
						</h5>
						<p className="auth_reset-paragraph">
							To reset your password, you must type your e-mail and we will send
							a link to your email and you will be directed to the reset
							password screens.
						</p>
						<form className="auth_form mt-4">
							<div className="mt-4 auth_form-container">
								<img src="/icons/mail.svg" alt="email" />
								<Input
									type="email"
									name="email"
									placeholderChildren="Enter your e-mail"
									onChange={changeTextEmail}
								/>
							</div>
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
