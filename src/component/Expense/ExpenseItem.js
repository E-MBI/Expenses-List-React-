import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  //
  const eventHandler = () => {
    setTitle("Toilet Paper");
  };

  //
  return (
    <div className="container-box">
      <div className="expense-box">
        <div className="info">
          <ExpenseDate date={props.date} />

          <p>{title}</p>
        </div>

        <span>${props.amount}</span>
        <button onClick={eventHandler}> Change Title </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
