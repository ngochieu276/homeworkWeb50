import React, { useState } from "react";
import InputForm from "./UI/InputForm";

const ExpenseForm = () => {
  const [description, setDescription] = useState("new Playstation");
  const [price, setPrice] = useState("price");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
    console.log(description);
  };
  const onPriceChange = (event) => {
    setPrice(event.target.value);
    console.log(price);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <InputForm
            label='Description'
            type='text'
            value={description}
            onChange={onDescriptionChange}
          />
          <InputForm label='Price' type='text' onChange={onPriceChange} />
          <InputForm label='Date' type='date' />
        </div>
        <div>
          <button type='submit'>Add</button>
          <button type='button'>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
