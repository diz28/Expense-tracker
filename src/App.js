import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";

import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import IncomePieChart from "./components/IncomePieChart";
import ExpensePieChart from "./components/ExpensePieChart";
import { GlobalProvider } from "./context/State";

/**
 * main function for the progeam
 * @returns null
 */

function App() {
	return (
		<Container>
			<Row>
				<GlobalProvider>
					<Col>
						<h3 className="text-center">Income</h3>
						<IncomePieChart />
					</Col>
					<Col>
						<h2 className="text-center">Expense Tracker</h2>
						<Balance />
						<IncomeExpense />
						<TransactionList />
						<AddTransaction />
					</Col>

					<Col>
						<h3 className="text-center">Expense</h3>
						<ExpensePieChart />
					</Col>
				</GlobalProvider>
			</Row>
		</Container>
	);
}

export default App;
