import React from 'react';

const ExpenseFilter = ({ filterItem }) => {
  return (
    <select
      className="form-select mb-3"
      onChange={(event) => filterItem(event.target.value)}
    >
      <option value="">All Categories</option>
      <option value="utilities">Utilities</option>
      <option value="study">Study</option>
      <option value="groceries">Groceries</option>
      <option value="entertainment">Entertainment</option>
      <option value="health">Health</option>
      <option value="transport">Transport</option>
      <option value="shopping">Shopping</option>
      <option value="food">Food</option>
      <option value="travel">Travel</option>
      <option value="others">Others</option>
    </select>
  );
};

export default ExpenseFilter;
