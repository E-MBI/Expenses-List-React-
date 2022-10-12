import React, { useState } from "react";

import "./ExpenseFrom.css";

const ExpenseFrom = (props) => {
  //store date in multiple state
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // onChange => upDate title and date
  const ChangeTitle = (evnet) => {
    setTitle(evnet.target.value);
  };

  // onChange => upDate amount
  const ChangeAmount = (evnet) => {
    setAmount(evnet.target.value);
  };

  // onChange => upDate  date
  const ChangeDate = (evnet) => {
    setDate(evnet.target.value);
  };

  //on submit the form send data in one state

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveData(expenseData);

    setTitle("");
    setAmount("");
    setDate("");

    //disappears the form when add new expense
    props.onCancle();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="controls">
        {/* title */}
        <div className="control">
          <label>Title</label>
          <input type="text" value={title} onChange={ChangeTitle} />
        </div>

        {/* amount */}
        <div className="control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            min="0.01"
            setp="0.01"
            onChange={ChangeAmount}
          />
        </div>

        {/* date */}
        <div className="control">
          <label>Date</label>
          <input
            type="date"
            min="2015-01-01"
            max="2023-12-31"
            value={date}
            onChange={ChangeDate}
          />
        </div>

        <div className="action">
          <button type="submit" onClick={props.onCancle}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseFrom;
