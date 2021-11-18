import React from "react";

export default function Button({ children, disabled }) {
	return (
		<>
			<button type="submit" className="auth_form-button" disabled={disabled}>
				{children}
			</button>
		</>
	);
}
