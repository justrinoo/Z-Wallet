import { useState } from "react";
import {
	Button,
	Input,
	IntroZwallet,
	Layout,
	Person,
	Mail,
	Lock,
} from "components";

// import Image from "next/image";
import Link from "next/link";
import axios from "utils/axios";
import { useRouter } from "next/dist/client/router";
export default function Login() {
	const router = useRouter();
	const [formRegist, setFormRegist] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [isError, setError] = useState(false);
	const [isLoading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const changeTextInput = (event) => {
		setFormRegist({ ...formRegist, [event.target.name]: event.target.value });
	};

	const submitRegistration = async (event) => {
		try {
			setLoading(true);
			event.preventDefault();
			const { firstName, lastName, email, password } = formRegist;
			const setDataRegist = { firstName, lastName, email, password };
			const response = await axios.post("/auth/register", setDataRegist);
			if (response.status === 200) {
				event.target.reset();
				setFormRegist({
					firstName: "",
					lastName: "",
					email: "",
					password: "",
				});
				router.push("/auth/login");
			}
		} catch (error) {
			setLoading(false);
			setError(true);
			setMessage(error.response.data.msg);
		}

		// console.log("form submit running...", setDataRegist);
	};

	const isDisabled = formRegist.password.split("").length >= 6 ? true : false;
	const checkFirstName =
		formRegist.firstName.split("").length > 0 ? true : false;
	const checkLastName = formRegist.lastName.split("").length > 0 ? true : false;
	const checkEmail = formRegist.email.split("").length > 0 ? true : false;
	const checkPassword = formRegist.password.split("").length > 0 ? true : false;
	return (
		<>
			<Layout pageTitle="Z-Wallet | Register Page">
				<main className="auth_main">
					{/* Left Content */}
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

						<form className="auth_form" onSubmit={submitRegistration}>
							<div className="mb-4 auth_form-container">
								<Person stroke={checkFirstName ? "#6379F4" : "#A9A9A9"} />
								<Input
									type="text"
									name="firstName"
									checkField={checkFirstName}
									placeholderChildren="Enter your firstname"
									onChange={changeTextInput}
								/>
							</div>
							<div className="mb-4 auth_form-container">
								<Person stroke={checkLastName ? "#6379F4" : "#A9A9A9"} />
								<Input
									type="text"
									name="lastName"
									checkField={checkLastName}
									placeholderChildren="Enter your lastname"
									onChange={changeTextInput}
								/>
							</div>
							<div className="mb-4 auth_form-container">
								<Mail stroke={checkEmail ? "#6379F4" : "#A9A9A9"} />
								<Input
									type="email"
									name="email"
									checkField={checkEmail}
									placeholderChildren="Enter your e-mail"
									onChange={changeTextInput}
								/>
							</div>
							<div className="mb-4 auth_form-container">
								<Lock stroke={checkPassword ? "#6379F4" : "#A9A9A9"} />
								<Input
									type="password"
									name="password"
									checkField={checkPassword}
									placeholderChildren="Create your password"
									onChange={changeTextInput}
								/>
							</div>
							{isError ? (
								<p className="text-center auth_form-title-error">{message}</p>
							) : null}
							<Button disabled={!isDisabled}>
								{isLoading ? "Loading..." : "Sign Up"}
							</Button>
							<p className="auth_form-title-to-signup">
								Don{"'"}t have an account? Let{"'"}s
								<Link href="/auth/login" passHref>
									<span
										className="text-decoration-none text-primary"
										style={{ fontWeight: "600", cursor: "pointer" }}
									>
										{" "}
										Login
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
