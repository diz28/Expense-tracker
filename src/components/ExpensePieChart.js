import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { GlobalContext } from "../context/State";

/**
 * show the expense pie chart
 * @returns expense pie chart
 */
const ExpensePieChart = () => {
	const { transaction } = useContext(GlobalContext);

	const expenseChartData = {
		labels: transaction
			.filter((transaction) => transaction.amount < 0)
			.map((transaction) => transaction.text),
		datasets: [
			{
				label: "Income",
				data: transaction
					.filter((transaction) => transaction.amount < 0)
					.map((transaction) => transaction.amount),
				backgroundColor: [
					"red",
					"orange",
					"yellow",
					"green",
					"teal",
					"blue",
					"purple",
				],
			},
		],
	};

	return <Pie data={expenseChartData} />;
};

export default ExpensePieChart;
