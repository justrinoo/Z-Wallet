import LeftContent from "components/auth/intro-zwallet";
import { Layout, Input, Button, Mail } from "components";
import { useEffect, useState } from "react";
import { forgotPassword } from "store/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

export default function ForgotPassword() {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const [isMessage, setMessage] = useState("");
	const [isError, setError] = useState(false);
	const [isLoading, setLoading] = useState(auth.loading);
	const [FormEmail, setFormEmail] = useState({
		email: "",
	});

	const changeTextEmail = (event) => {
		setFormEmail({
			...FormEmail,
			[event.target.name]: event.target.value,
		});
	};

	const sendEmailVerification = async (event) => {
		try {
			event.preventDefault();
			const { email } = FormEmail;
			const setDataForgotPassword = {
				email,
				linkDirect: "http://localhost:3000/reset-password",
			};
			setLoading(true);
			const response = await dispatch(forgotPassword(setDataForgotPassword));
			setLoading(true);
			toast(response.value.data.msg);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(true);
			// setMessage(auth.message);
		}
	};

	useEffect(() => {
		setMessage(auth.message);
	}, [auth.message]);
	const isDisabled = FormEmail.email.split("").length > 6 && true; // REGEX PATTERN
	console.log(isError ? "ERRORNYA" : "NULL");
	return (
		<>
			<Layout pageTitle="Z-wallet | Reset Password">
				<main className="auth_main">
					<LeftContent />
					<section className="auth_reset">
						<ToastContainer />
						<h5 className="auth_reset-title">
							Did You Forgot Your Password? Don’t Worry, You Can Reset Your
							Password In a Minutes.
						</h5>
						<p className="auth_reset-paragraph">
							To reset your password, you must type your e-mail and we will send
							a link to your email and you will be directed to the reset
							password screens.
						</p>
						<form className="auth_form mt-4" onSubmit={sendEmailVerification}>
							<div className="mt-4 auth_form-container">
								<Mail stroke={"#A9A9A9"} />
								<Input
									type="email"
									name="email"
									placeholderChildren="Enter your e-mail"
									onChange={changeTextEmail}
								/>
							</div>
							{isError ? (
								<p className="text-center mt-3 auth_form-title-error">
									{isMessage}
								</p>
							) : null}
							<div className="mt-4">
								<Button disabled={!isDisabled}>
									{isLoading ? "Loading..." : "Confirm"}
								</Button>
							</div>
						</form>
					</section>
				</main>
			</Layout>
		</>
	);
}
