import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-Us", { month: "long" });
  const day = props.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="date">
      <h3>{month}</h3>
      <h3>{year}</h3>
      <h3>{day}</h3>
    </div>
  );
}

export default ExpenseDate;
