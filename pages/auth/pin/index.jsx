import { Button, InputPin, Layout, IntroZwallet } from "components";
import { useState } from "react";

export default function Pin() {
	const [formPin, setFormPin] = useState({
		pin: [],
	});

	const changePin = (event) => {};

	return (
		<>
			<Layout pageTitle="Z-Wallet | Pin Page">
				<main className="auth_main">
					<IntroZwallet />
					<section className="auth_pin">
						<h5 className="auth_pin-title">
							Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
							That You Created Yourself.
						</h5>
						<p className="auth_pin-description">
							Create 6 digits pin to secure all your money and your data in
							Zwallet app. Keep it secret and don’t tell anyone about your
							Zwallet account password and the PIN.
						</p>
						<form className="auth_pin-form">
							<div className="row">
								<InputPin changePin={changePin} />
							</div>
							<Button>Confirm</Button>
						</form>
					</section>
				</main>
			</Layout>
		</>
	);
}
