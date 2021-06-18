import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpansesChar from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  });

  let expencesContent = <p className="expenses__no-expences">No expenses are exist.</p>;
  if (filteredExpenses.length > 0) {
    expencesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  };
  const filterChangeHandler = (setYear) => {
    setFilteredYear(setYear);    
  };
  return(
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpansesChar expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      {/* {expencesContent} */}
      {/* { filteredExpenses.length === 0 ? <p className="expenses__no-expences">No expenses are exist.</p> : filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))} */}
           
    </Card>
  );
}

export default Expenses;