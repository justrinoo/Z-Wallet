import React from "react";

export default function InputPin({ changePin }) {
	return (
		<>
			<div className="col-2">
				<input
					className="auth_pin-input"
					name="pin"
					maxLength={1}
					onChange={changePin}
				/>
			</div>
			<div className="col-2">
				<input
					className="auth_pin-input"
					name="pin"
					maxLength={1}
					onChange={changePin}
				/>
			</div>
			<div className="col-2">
				<input
					className="auth_pin-input"
					name="pin"
					maxLength={1}
					onChange={changePin}
				/>
			</div>
			<div className="col-2">
				<input
					className="auth_pin-input"
					name="pin"
					maxLength={1}
					onChange={changePin}
				/>
			</div>
			<div className="col-2">
				<input
					className="auth_pin-input"
					name="pin"
					maxLength={1}
					onChange={changePin}
				/>
			</div>
			<div className="col-2">
				<input
					className="auth_pin-input"
					name="pin"
					maxLength={1}
					onChange={changePin}
				/>
			</div>
		</>
	);
}
