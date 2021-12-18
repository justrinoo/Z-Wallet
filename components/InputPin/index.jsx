import React from "react";

export default function InputPin({
	changePin,
	namePin,
	classNameChildren,
	value,
}) {
	return (
		<>
			<div className="col-2 pin_test">
				<input
					className={`auth_pin-input ${classNameChildren}`}
					name={namePin}
					id={`pin-${namePin}`}
					maxLength={1}
					onChange={changePin}
				/>
			</div>
		</>
	);
}
