import { useState } from "react";
import Link from "next/link";
import { Button, Input, IntroZwallet, Layout, Mail, Lock } from "components";
import axios from "utils/axios";
import { useRouter } from "next/dist/client/router";

export default function Login() {
	const router = useRouter();
	const [formLogged, setFormLogged] = useState({
		email: "",
		password: "",
	});
	const [message, setMessage] = useState("");
	const [isError, setError] = useState(false);

	const changeTextInput = (event) => {
		setFormLogged({ ...formLogged, [event.target.name]: event.target.value });
	};

	const handleSubmitLogged = async (event) => {
		try {
			event.preventDefault();
			const { email, password } = formLogged;
			const setDataLogged = { email, password };
			const response = await axios.post("/auth/login", setDataLogged);
			const pin = response.data.data.pin;
			if (pin === null) {
				router.push("/auth/pin");
			} else {
				router.push("/home/dashboard");
			}
			event.target.reset();
			setFormLogged({
				email: "",
				password: "",
			});
		} catch (error) {
			setError(true);
			setMessage(error.response.data.msg);
		}
	};

	const isDisabled = formLogged.password.split("").length >= 6 && true;

	console.log(message);
	return (
		<>
			<Layout pageTitle="Z-Wallet | Login Page">
				<main className="auth_main">
					<IntroZwallet />
					<section className="auth_column">
						<h4 className="auth_form-title">
							Start Accessing Banking Needs With All Devices and All Platforms
							With 30.000+ Users
						</h4>
						<p className="auth_form-paragraph">
							Transfering money is eassier than ever, you can access Zwallet
							wherever you are. Desktop, laptop, mobile phone? we cover all of
							that for you!
						</p>

						<form className="auth_form" onSubmit={handleSubmitLogged}>
							<div className="mb-5 auth_form-container">
								<Mail stroke={"#A9A9A9"} />
								<Input
									type="email"
									name="email"
									placeholderChildren="Enter your e-mail"
									onChange={changeTextInput}
								/>
							</div>
							<div className="mb-4 auth_form-container">
								<Lock stroke={"#A9A9A9"} />
								<Input
									type="password"
									name="password"
									placeholderChildren="Enter your password"
									onChange={changeTextInput}
								/>
							</div>
							<div className="text-end">
								<Link
									href="/auth/reset-password"
									className="text-decoration-none"
									passHref
								>
									<span className="auth_form-forgotpassword">
										Forgot Password?
									</span>
								</Link>
							</div>
							{isError ? (
								<p
									className="text-center auth_form-title-error"
									style={{ marginTop: "24px" }}
								>
									{message}
								</p>
							) : null}
							<Button disabled={!isDisabled}>Login</Button>
							<p className="auth_form-title-to-signup">
								Don{"'"}t have an account? Let{"'"}s
								<Link href="/auth/registration" passHref>
									<span
										className="text-decoration-none text-primary"
										style={{ fontWeight: "600", cursor: "pointer" }}
									>
										{" "}
										Sign Up
									</span>
								</Link>
							</p>
						</form>
					</section>
				</main>
			</Layout>
		</>
	);
}
