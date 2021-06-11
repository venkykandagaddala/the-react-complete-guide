import "./ExpenseItem.css"
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate";
import React, {useState} from "react";

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("clicked!!!!");
  }
  
  return(
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description"><h2>{title}</h2></div>
      <div className="expense-item__price">Rs {props.amount}</div>
      <button onClick={clickHandler}>Click Here</button>
    </Card>
  );
}

export default ExpenseItem;