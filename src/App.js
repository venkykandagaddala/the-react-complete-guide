import { useState } from 'react';
import './App.css';
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";

const INTIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'House Rent',
    amount: 19000,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2',
    title: 'Car EMI', 
    amount: 11109, 
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Credit card bill',
    amount: 12000,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Groceries',
    amount: 1500,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  
  const [expenses, setExpenses] = useState(INTIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return[expense, ...prevExpenses]
    })
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
