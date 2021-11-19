import React from "react";

export default function Button({ children, disabled, handleClick }) {
	return (
		<>
			<button
				type="submit"
				className="auth_form-button"
				disabled={disabled}
				onClick={handleClick}
			>
				{children}
			</button>
		</>
	);
}
