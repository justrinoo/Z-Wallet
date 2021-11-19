import { Layout, Sidebar, InputPin, Button } from "components";
import { useState } from "react";

export default function ChangePin() {
	const activePin = useState(true);
	const [statusPin, setStatusPin] = useState(false);
	const [pinIsSame, setPinIsSame] = useState(false);
	const checked = true; // <== di hapus ketika udah integrais check pin
	const maxPin = [1, 2, 3, 4, 5, 6];

	const continueNewPin = () => {
		// VALIDASI PIN COCOK ATAU ENGGA
		// PENGECEKAN PIN
		setStatusPin(true);
		if (checked === true) {
			setPinIsSame(true);
		} else {
			setPinIsSame(false);
		}
	};

	const changeNewPin = () => {
		console.log("new pin...");
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
												/>
											) : (
												<InputPin
													key={idx}
													classNameChildren={`${
														activePin ? "pin-active" : "pin-default"
													} `}
												/>
											)}
										</>
									))}
									<div className="mt-4">
										<Button
											disabled={false}
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
