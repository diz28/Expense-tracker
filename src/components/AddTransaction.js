import React, { useState } from "react";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <div>
            Type
            <br />
          </div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="enter text..."
          />
        </div>
        <div className="form-control">
          <div>
            Amount
            <br />
          </div>

          <input
            type="numner"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="enter amount"
          />
        </div>
        <button>Add transaction</button>
      </form>
    </>
  );
};
