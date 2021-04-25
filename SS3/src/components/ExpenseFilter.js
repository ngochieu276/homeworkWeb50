import React, { useState } from "react";
import "./ExpenseFilter.css";
import InputForm from "./UI/InputForm";

const ExpenseFilter = (props) => {
  const [value, setValue] = useState("");

  const onFilterChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='ExpenseFilter'>
      <InputForm label='Search' onChange={onFilterChange} value={value} />
    </div>
  );
};

export default ExpenseFilter;
