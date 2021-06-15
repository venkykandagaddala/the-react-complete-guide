import React from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import ExpenseDate from "../Expenses/ExpenseDate";

const NewExpense = (props) => {

  const saveExpanseHandler = (enteredExpenseData) => {
    const expeseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.addExpense(expeseData)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpanseSaveData={saveExpanseHandler} />
    </div>
  );
}

export default NewExpense;