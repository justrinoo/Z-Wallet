import { Layout, Sidebar, InputPin, Button } from "components";
import router, { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "utils/axios";

export default function ChangePin() {
	const user = useSelector((state) => state.user);
	const router = useRouter();
	const id = `${user.users.id}`;
	const activePin = useState(true);
	const [pin, setPin] = useState({});
	const [message, setMessage] = useState("");
	const [error, setError] = useState(false);
	const [statusPin, setStatusPin] = useState(false);
	const [pinIsSame, setPinIsSame] = useState(false);
	// const checked = true; // <== di hapus ketika udah integrais check pin
	const maxPin = [1, 2, 3, 4, 5, 6];

	const continueNewPin = async () => {
		try {
			const dataPin =
				pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;
			// VALIDASI PIN COCOK ATAU ENGGA
			// PENGECEKAN PIN
			const response = await axios.get(`/user/pin?pin=${dataPin}`);
			if (response.data.msg === "Correct pin") {
				setStatusPin(true);
				setPinIsSame(true);
				setError(false);
			} else {
				setError(false);
				setPinIsSame(false);
			}
		} catch (error) {
			setMessage(error.response.data.msg);
			setError(true);
			new Error(error.response);
			console.log(error.response);
			console.log("pin => ", pin);
		}
	};

	const changeNewPin = async () => {
		try {
			const dataPin =
				pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;
			const response = await axios.patch(`/user/pin/${id}`, { pin: dataPin });
			toast.success(response.data.msg);
			setTimeout(() => {
				router.push("/home/profile");
			}, 1500);
		} catch (error) {
			console.log(error.response);
		}
	};

	const changeNextValuePin = (event) => {
		const nextChangePin = document.getElementById(
			`pin-${parseInt(event.target.name, 10) + 1}`
		);

		if (nextChangePin !== null) {
			nextChangePin.focus();
		}
		setPin({ ...pin, [`pin${event.target.name}`]: event.target.value });
	};

	return (
		<>
			<Layout pageTitle="Profile | Change Pin" valueNav={true}>
				<main className="container_main">
					<section className="row">
						<Sidebar />
						<section className="col profile_changepin-main mt-4">
							<h6 className="profile_main-information-detail-title">
								Change PIN
							</h6>
							<p className="profile_main-information-detail-description">
								{statusPin && pinIsSame
									? "Type your new 6 digits security PIN to use in Zwallet."
									: "Enter your current 6 digits Zwallet PIN below to continue to the	next steps."}
							</p>
							<div className="profile_changepin-wrapper-pin">
								<div className="row">
									{maxPin.map((item, idx) => (
										<>
											{pinIsSame ? (
												<InputPin
													key={idx}
													classNameChildren={`${
														activePin ? "pin-active" : "pin-default"
													} `}
													namePin={item}
													changePin={changeNextValuePin}
												/>
											) : (
												<InputPin
													key={idx}
													classNameChildren={`${
														activePin ? "pin-active" : "pin-default"
													} `}
													namePin={item}
													changePin={changeNextValuePin}
												/>
											)}
										</>
									))}
									{error ? (
										<p className="mt-3 text-center text-danger fw-bold">
											{message}
										</p>
									) : null}
									<div className="mt-4">
										<Button
											handleClick={pinIsSame ? changeNewPin : continueNewPin}
										>
											{pinIsSame ? "Change PIN" : "Continue"}
										</Button>
									</div>
								</div>
							</div>
						</section>
					</section>
				</main>
			</Layout>
		</>
	);
}
