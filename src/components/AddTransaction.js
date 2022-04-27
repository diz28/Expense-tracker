import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/State";

/**
 *
 * @returns the input boxs for transactions
 */
export const AddTransaction = () => {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState(0);

	const { addTransaction } = useContext(GlobalContext);

	const onSubmit = (e) => {
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 10000000),
			text,
			amount: +amount,
		};

		addTransaction(newTransaction);
	};

	return (
		<>
			<h4>Add new transaction</h4>
			<form onSubmit={onSubmit} id="submitted">
				<div className="form-control">
					<label htmlFor="text">Title</label>
					<input
						id="titleInput"
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="Enter transaction title..."
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount <br />
					</label>
					<input
						id="amountInput"
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder="Enter amount..."
					/>
				</div>
				<button id="addTransactionBtn" className="btn">
					Add transaction
				</button>
			</form>
		</>
	);
};
