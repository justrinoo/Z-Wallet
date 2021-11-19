import React, { useEffect, useState } from "react";
import { ArrowUp, ArrowDown, Chart } from "components";
import { useSelector } from "react-redux";
import axios from "utils/axios";
export default function Statistic() {
	const user = useSelector((state) => state.user);
	const id = user.users.id;
	const [listExpense, setListExpense] = useState([]);
	const [listIncome, setListIncome] = useState([]);
	const [totalExpense, setTotalExpense] = useState(0);
	const [totalIncome, setTotalIncome] = useState(0);

	const getStatisticIncomeOutcome = async () => {
		try {
			const response = await axios.get(`/dashboard/${id}`);
			setListExpense(response.data.data.listExpense);
			setListIncome(response.data.data.listIncome);
			setTotalExpense(response.data.data.totalExpense);
			setTotalIncome(response.data.data.totalIncome);
		} catch (error) {
			new Error(error.response);
		}
	};

	useEffect(() => {
		getStatisticIncomeOutcome();
	}, []);

	return (
		<>
			<div className="dashboard_content-statistic-outcome">
				<div className="dashboard_content-statictic-income-outcome">
					{/* <img src="/icons/arrow-up.svg" width={28} height={28} alt="OutCome" /> */}
					<ArrowDown stroke="#1EC15F" />
					<p className="dashboard_content-statistic-title">Income</p>
					<p className="dashboard_content-statistic-money">
						Rp.{new Intl.NumberFormat("id-ID").format(totalIncome)}
					</p>
				</div>
				<div className="dashboard_content-statictic-income-outcome">
					<ArrowUp stroke="#FF5B37" />
					<p className="dashboard_content-statistic-title">Expense</p>
					<p className="dashboard_content-statistic-money">
						Rp.{new Intl.NumberFormat("id-ID").format(totalExpense)}
					</p>
				</div>
			</div>
			<p className="text-center">
				<Chart dataListExpanse={listExpense} dataListIncome={listIncome} />
			</p>
		</>
	);
}
