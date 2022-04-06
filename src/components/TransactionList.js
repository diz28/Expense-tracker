import React, { useContext } from "react";
import { GlobalContext } from "../context/State";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <div>
        {transaction.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </>
  );
};
