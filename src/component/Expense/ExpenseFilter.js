import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  //call back function from parent to pass data in his param
  const dropDownHandler = (e) => {
    props.onSelectYear(e.target.value);
  };

  return (
    <div className="head-cont">
      <h3>Filter by year</h3>
      <select value={props.selected} onChange={dropDownHandler}>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
