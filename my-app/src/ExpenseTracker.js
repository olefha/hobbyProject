import React, { useState } from 'react';

/**
 * Component responsible for tracking and displaying expenses.
 * Uses 'useState' hook to manage two pieces of state:
 * - expenses: an array of expense objects
 * - newExpense: an object representing the new expense being added
 * @returns 
 */


//todo: only allow user to add number in amount field


const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]); // State for storing expense data
  const [newExpense, setNewExpense] = useState({ description: '', amount: '' , date: '', category: ''});

  const addExpense = () => {
    // Add the new expense to the expenses array
    setExpenses([...expenses, newExpense]);
    
    // Clear the input fields
    setNewExpense({ 
      description: '',
      amount: '' ,
      date: '',
      category: ''});
  };

  return (
    <div className="expense-tracker">
      <h2>Expense Tracker</h2>
      {/* Expense input form */}
      <div className="expense-form">
        <input
          type="text"
          placeholder="Description"
          value={newExpense.description}
          onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
        />
        <input
            type="date"
            placeholder="Date"
            value={newExpense.date}
            onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
        />
        <input 
            type="category"
            placeholder="Category"
            value={newExpense.category}
            onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <div className="expense-list">
        <h3>Expenses:</h3>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <span>Description {expense.description} / </span>
              <span> Amount:  ${expense.amount} / </span>
              <span> Date: {expense.date} / </span>
              <span> Category: {expense.category} </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseTracker;