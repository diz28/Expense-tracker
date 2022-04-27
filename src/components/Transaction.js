import React, { useContext } from "react";
import { GlobalContext } from "../context/State";

/**
 *
 * @param {*} param0 transaction array
 * @returns delete button and calculate the amount after delete
 */
export const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	const sign = transaction.amount < 0 ? "-" : "+";
	return (
		<li className={transaction.amount < 0 ? "minus" : "plus"}>
			<span id="transactionTitle">{transaction.text}</span>

			<span>
				{sign}${Math.abs(transaction.amount)}
			</span>
			<button
				onClick={() => deleteTransaction(transaction.id)}
				className="delete-btn"
			>
				X
			</button>
		</li>
	);
};
