import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const { date } = props;
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.toLocaleString("en-US", { month: "2-digit" });

  return (
    <div className='ExpenseDate'>
      <div className='ExpenseDate-year'>{year}</div>
      <div className='ExpenseDate-month'>{month}</div>
      <div className='ExpenseDate-day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
