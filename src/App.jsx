 import { useState } from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import ExpenseFilter from './components/ExpenseFilter.JSX';


function App() {
  const [allExpenses, setAllExpenses] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(1000); // Optional: budget for summary

  const addItem = (data) => {
    const newExpense = {
      ...data,
      id: Date.now(),
      amount: Number(data.amount)
    };
    const updatedExpenses = [newExpense, ...allExpenses];
    setAllExpenses(updatedExpenses);
    setExpenses(updatedExpenses);
  };

  const deleteItem = (id) => {
    const updatedExpenses = allExpenses.filter(expense => expense.id !== id);
    setAllExpenses(updatedExpenses);
    setExpenses(updatedExpenses);
  };

  const filterItem = (cat) => {
    if (cat === "" || cat === "All") {
      setExpenses(allExpenses);
    } else {
      setExpenses(allExpenses.filter(expense => expense.category === cat));
    }
  };

  const total = expenses.reduce((sum, item) => sum + Number(item.amount), 0);

  return (
    <div className="app-container">
      <h1 className="tracker-heading">
        💰 My Daily Expenses 💸<span>(Mere Daily Ka Kharch)</span> 
      </h1>
      <p className="tracker-subtitle">
       Mishu, Track your spending here! Save wisely & plan your budget! 📝
      </p>



      <ExpenseForm addExpense={addItem} />
      <ExpenseFilter filterItem={filterItem} />
      <ExpenseList items={expenses} deleteItem={deleteItem} />
    </div>
  );
}

export default App; 