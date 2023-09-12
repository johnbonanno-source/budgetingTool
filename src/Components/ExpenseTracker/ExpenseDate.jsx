import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.$m || props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.$d || props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.$y || new Date().getFullYear();
  console.log(month);
  console.log(day);
  console.log(year);
  return (
    <div className={"date"}>
      <div className={"month"}>{month}</div>
      <div className={"day"}>{day}</div>
      <div className={"year"}>{year}</div>
    </div>
  );
};

export default ExpenseDate;
