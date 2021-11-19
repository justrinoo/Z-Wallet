import React from "react";
import { Bar } from "react-chartjs-2";

export default function Chart({ dataListExpanse, dataListIncome }) {
	console.log("expanse =>", dataListExpanse);
	console.log("income =>", dataListIncome);
	const data = {
		labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
		datasets: [
			{
				label: "",
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: ["#6379F4", "#9DA6B5"],
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
			<div style={{ width: "500px", height: "600px" }}>
				<Bar data={data} options={options} />
			</div>
		</>
	);
}
