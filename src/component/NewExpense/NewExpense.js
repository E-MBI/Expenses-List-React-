import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseFrom from "./ExpenseFrom";

const NewExpense = (props) => {
  const [isEdit, setEdit] = useState(false);

  //get data which user entered it
  const SaveDataHandler = (entredDate) => {
    const expenseData = {
      ...entredDate,
      id: (Math.random() + 1).toString(),
    };

    props.onAddExpense(expenseData);
  };

  //appears and not appears form & btn
  const startEditing = () => {
    setEdit(true);
  };

  //appears and not appears form & btn
  const stopEditing = () => {
    setEdit(false);
  };

  return (
    <div className="new-expense">
      {!isEdit && (
        <button className="add-btn" onClick={startEditing}>
          Add New Expense
        </button>
      )}
      {isEdit && (
        <ExpenseFrom onSaveData={SaveDataHandler} onCancle={stopEditing} />
      )}
    </div>
  );
};

export default NewExpense;
