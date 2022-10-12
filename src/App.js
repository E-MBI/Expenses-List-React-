import React, { useState } from "react";
import "./App.css";
import api from "./component/Expense/Api";
import ExpenseItem from "./component/Expense/ExpenseItem";
import NewExpense from "./component/NewExpense/NewExpense";
import ExpenseFilter from "./component/Expense/ExpenseFilter";
import ExpenseList from "./component/Expense/ExpensesList";
import ExpenseChart from "./component/charts/ExpenseChart";
import ChartBar from "./component/charts/chartBar";

//External__API
const DummyData = api; //comment thia line after you finished

function App() {
  const [expenseData, setExpenseData] = useState(DummyData);
  const [filterYear, setFilterYear] = useState("2021");

  const addExpenseHandler = (expenseData) => {
    setExpenseData((prevExpense) => {
      return [...prevExpense, expenseData];
    });
  };

  const FilterHandler = (selectYear) => {
    setFilterYear(selectYear);
  };

  //filter expense by year
  let filterExpense = expenseData.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div className="App">
      {/* form enteried by user */}
      <header>
        <NewExpense onAddExpense={addExpenseHandler} />
      </header>

      {/*Container of all Expenses */}
      <div className="container">
        {/* Charts of progress your expenses */}
        <ExpenseChart filterExpenses={filterExpense} />

        {/* //header cont */}
        <ExpenseFilter selected={filterYear} onSelectYear={FilterHandler} />

        {/* //expenslist-component */}
        <ExpenseList items={filterExpense} />

        {/* //filter expense by year */}
      </div>
    </div>
  );
}
export default App;
