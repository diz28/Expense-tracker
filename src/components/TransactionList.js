import React, { useContext } from "react";
import { GlobalContext } from "../context/State";
import { Transaction } from "./Transaction";

/**
 * the list of transactions
 * @returns the history of transactions
 */
export const TransactionList = () => {
	const { transaction } = useContext(GlobalContext);

	return (
		<>
			<h3>History</h3>
			<ul className="list">
				{transaction.map((transaction) => (
					<Transaction
						key={transaction.id}
						transaction={transaction}
					/>
				))}
			</ul>
		</>
	);
};
