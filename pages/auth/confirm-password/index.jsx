import React, { useState } from "react";
import { Layout, IntroZwallet, Input, Button } from "components";
export default function ConfirmPassword() {
	const [confirmPassword, setConfirmPassword] = useState({
		email: "",
	});

	const changeTextPassword = (event) => {
		setConfirmPassword({
			...confirmPassword,
			[event.target.name]: event.target.value,
		});
	};
	const isDisabled = confirmPassword.email.split("").length > 6 && true; // REGEX PATTERN
	return (
		<>
			<Layout pageTitle="Z-Wallet | Confirm Password">
				<main className="auth_main">
					<IntroZwallet />
					<section className="auth_reset">
						<h5 className="auth_reset-title">
							Did You Forgot Your Password? Don’t Worry, You Can Reset Your
							Password In a Minutes.
						</h5>
						<p className="auth_reset-paragraph">
							Now you can create a new password for your Zwallet account. Type
							your password twice so we can confirm your new passsword.
						</p>
						<form className="auth_form mt-4">
							<div className="mt-3 auth_form-container">
								<img src="/icons/lock.svg" alt="password" />
								<Input
									type="password"
									name="password"
									placeholderChildren="Create new password"
									onChange={changeTextPassword}
								/>
							</div>
							<div className="mt-5 auth_form-container">
								<img src="/icons/lock.svg" alt="password" />
								<Input
									type="password"
									name="password"
									placeholderChildren="Create new password"
									onChange={changeTextPassword}
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
