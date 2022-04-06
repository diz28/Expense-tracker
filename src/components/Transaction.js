import React from "react";

export const Transaction = ({ transaction }) => {
  return (
    <li>
      {transaction.text}
      <span>({transaction.amount})</span> <button> x </button>
    </li>
  );
};
