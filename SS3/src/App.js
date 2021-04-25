import React, { Fragment } from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const date = new Date();

  const expenseData = [
    { item: "car", price: 20, date: new Date(2020, 4, 5) },
    { item: "bike", price: 200, date: new Date(2020, 4, 2) },
    { item: "phone", price: 2000, date: new Date(2020, 4, 2) },
  ];
  const renderItem = expenseData.map((data) => {
    return <ExpenseItem item={data.item} price={data.price} date={data.date} />;
  });

  return (
    <Fragment>
      <Card>
        <ExpenseFilter />
        <ExpenseForm />
      </Card>
      <Card>{renderItem}</Card>
    </Fragment>
  );
}

export default App;
