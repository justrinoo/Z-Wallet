import { Button, InputPin, Layout, IntroZwallet, SuccessPin } from "components";
import Cookies from "js-cookie";
import { useState } from "react";
import axios from "utils/axios";

export default function Pin() {
	const totalPin = [1, 2, 3, 4, 5, 6];
	const user_id = Cookies.get("user_id");
	const [pin, setPin] = useState({});
	const [statusSubmit, setStatusSubmit] = useState(false);

	const changePin = (event) => {
		const nextPinSibling = document.getElementById(
			`pin-${parseInt(event.target.name, 10) + 1}`
		);

		if (nextPinSibling !== null) {
			nextPinSibling.focus();
		}
		setPin({ ...pin, [`pin${event.target.name}`]: event.target.value });
	};

	const udpatePinUsers = async (event) => {
		try {
			event.preventDefault();
			setTimeout(() => {
				setStatusSubmit(true);
			}, 4000);
			let setDataPin =
				pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;
			const newPin = parseInt(setDataPin);
			await axios.patch(`/user/pin/${user_id}`, {
				pin: newPin,
			});
		} catch (error) {
			new Error(error.response);
		}
	};

	let tempPin = [];
	for (const data in pin) {
		tempPin.push(pin[data]);
	}
	const isDisabled = tempPin.length === 6 && true;
	return (
		<>
			<Layout pageTitle="Z-Wallet | Pin Page">
				<main className="auth_main">
					<IntroZwallet />
					{!statusSubmit ? (
						<section className="auth_pin">
							<h5 className="auth_pin-title">
								Secure Your Account, Your Wallet, and Your Data With 6 Digits
								PIN That You Created Yourself.
							</h5>
							<p className="auth_pin-description">
								Create 6 digits pin to secure all your money and your data in
								Zwallet app. Keep it secret and don’t tell anyone about your
								Zwallet account password and the PIN.
							</p>
							<form className="auth_pin-form" onSubmit={udpatePinUsers}>
								<div className="row">
									{totalPin.map((item, idx) => (
										<InputPin changePin={changePin} namePin={item} key={idx} />
									))}
								</div>
								<Button disabled={!isDisabled}>Confirm</Button>
							</form>
						</section>
					) : (
						<SuccessPin />
					)}
				</main>
			</Layout>
		</>
	);
}
