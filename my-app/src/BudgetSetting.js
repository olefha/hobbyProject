import React, { useState } from 'react';

/**
 * Component for setting and displaying budget categories and limits.
 * Uses 'useState' hook to manage two pieces of state:
 * - budgets: an array of budget objects
 * - newBudget: an object representing the new budget being added
 * @returns 
 */


const BudgetSetting = () => {
  const [budgets, setBudgets] = useState([]); // State for storing budget data
  const [newBudget, setNewBudget] = useState({ category: '', limit: '' });

  const addBudget = () => {
    // Add the new budget to the budgets array
    setBudgets([...budgets, newBudget]);
    
    // Clear the input fields
    setNewBudget({ category: '', limit: '' });
  };

  return (
    <div className="budget-setting">
      <h2>Budget Setting</h2>
      <div className="budget-form">
        <input
          type="text"
          placeholder="Category"
          value={newBudget.category}
          onChange={(e) => setNewBudget({ ...newBudget, category: e.target.value })} 
        />
        <input
          type="number"
          placeholder="Limit"
          value={newBudget.limit}
          onChange={(e) => setNewBudget({ ...newBudget, limit: e.target.value })}
        />
        <button onClick={addBudget}>Add Budget</button>
      </div>
      <div className="budget-list">
        <h3>Budget Categories:</h3>
        <ul>
          {budgets.map((budget, index) => (
            <li key={index}>
              <span>{budget.category}</span>
              <span>Limit: ${budget.limit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BudgetSetting;