import './App.css';
import Expenses from "./components/Expenses/Expenses"

const App = () => {
  const expenses = [
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
