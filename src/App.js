import "./App.css";
import React, { useState } from "react";

import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/State";

function App() {
	const [initState, setInitState] = useState({
		transaction: [
			{ id: 1, text: "flower", amount: -20 },
			{ id: 2, text: "laptop", amount: -2000 },
			{ id: 3, text: "t-shirt", amount: -40 },
			{ id: 4, text: "income", amount: 3000 },
		],
	});
	return (
		<GlobalProvider>
			<h2>Expense Tracker</h2>
			<div className="container">
				<Balance />
				<IncomeExpense />
				<TransactionList
					initState={initState}
					setInitState={setInitState}
				/>
				<AddTransaction />
			</div>
		</GlobalProvider>
	);
}

export default App;
