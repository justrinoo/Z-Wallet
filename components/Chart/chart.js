import React from "react";
import { Bar } from "react-chartjs-2";

export default function Chart({ dataListExpanse, dataListIncome }) {
	let tempDayExapanse = [];

	dataListExpanse.map((value) => {
		tempDayExapanse.push(value.day);
	});

	const totalIncome = dataListIncome.map((value) => value.total);
	const totalExpanse = dataListExpanse.map((value) => value.total);

	const data = {
		labels: tempDayExapanse,
		datasets: [
			{
				label: "Income",
				data: totalIncome,
				backgroundColor: ["#6379F4", "#6379F4"],
				borderRadius: 100,
				barThickness: 12,
			},
			{
				label: "Expanse",
				data: totalExpanse,
				backgroundColor: ["#9DA6B5", "#9DA6B5"],
				borderRadius: 100,
				barThickness: 12,
			},
		],
	};

	const options = {
		responsive: true,
	};
	return (
		<>
			<div>
				<Bar data={data} options={options} />
			</div>
		</>
	);
}
