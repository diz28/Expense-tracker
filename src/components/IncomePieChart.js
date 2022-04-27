import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { GlobalContext } from "../context/State";

/**
 * show the income pie chart
 * @returns income pie chart
 */
const IncomePieChart = () => {
	const { transaction } = useContext(GlobalContext);

	const incomeChartData = {
		labels: transaction
			.filter((transaction) => transaction.amount >= 0)
			.map((transaction) => transaction.text),
		datasets: [
			{
				label: "Income",
				data: transaction
					.filter((transaction) => transaction.amount >= 0)
					.map((transaction) => transaction.amount),
				backgroundColor: [
					"#9400D3",
					"#4B0082",
					"#0000FF",
					"#00FF00",
					"#FFFF00",
					"#FF7F00",
					"#FF0000",
				],
			},
		],
	};
	return <Pie data={incomeChartData} />;
};

export default IncomePieChart;
