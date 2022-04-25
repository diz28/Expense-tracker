import "./App.css";
import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";

import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import PieChart from "./components/PieChart";
import { GlobalProvider, GlobalContext } from "./context/State";

/**
 * main function for the progeam
 * @returns null
 */

function App() {
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

	return (
		<Container>
			<Row>
				<GlobalProvider>
					<Col>
						<h3 className="text-center">Income</h3>
						<PieChart chartData={incomeChartData} />
					</Col>
					<Col>
						<h2 className="text-center">Expense Tracker</h2>
						<Balance />
						<IncomeExpense />
						<TransactionList />
						<AddTransaction incomeChartData={incomeChartData} />
					</Col>

					<Col>
						<h3 className="text-center">Expense</h3>
						<PieChart chartData={expenseChartData} />
					</Col>
				</GlobalProvider>
			</Row>
		</Container>
	);
}

export default App;
