import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [item, setItem] = useState(props.item);
  const [backgroundColor, setBackgroundColor] = useState("");

  const changeItem = () => {
    setItem("New description");
    console.log(item);
    console.log(props.item);
    setBackgroundColor("cyan");
  };

  return (
    <div className='expense-item' style={{ backgroundColor: backgroundColor }}>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <button onClick={changeItem}>Change Description</button>
        <h2>{item}</h2>
        <div className='expense-item__price'>${props.price}</div>
        {props.children}
      </div>
    </div>
  );
};

export default ExpenseItem;
