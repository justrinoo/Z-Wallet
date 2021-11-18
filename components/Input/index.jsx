import React from "react";

export default function Input({
	placeholderChildren,
	type,
	name,
	onChange,
	classNameChildren,
	checkField,
}) {
	return (
		<>
			<input
				type={type}
				name={name}
				className={`${
					checkField ? "auth_form-input-active" : "auth_form-input"
				} ${classNameChildren === undefined ? "" : classNameChildren}`}
				placeholder={placeholderChildren}
				autoComplete="off"
				onChange={onChange}
			/>
		</>
	);
}
