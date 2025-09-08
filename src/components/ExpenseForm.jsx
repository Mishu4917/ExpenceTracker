import React from 'react';
import { useForm } from "react-hook-form";

const ExpenseForm = ({ addExpense }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const categories = [
    "Utilities",
    "Study",
    "Groceries",
    "Entertainment",
    "Health",
    "Transport",
    "Shopping",
    "Food",
    "Travel",
    "Others"
  ];

  return (
    <form className="mb-5" onSubmit={handleSubmit((data) => {
      addExpense(data);
      reset();
    })}>
      
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          {...register("description", { minLength: 6, required: true })}
        />
        {errors.description?.type === "required" && <p className="text-danger">This field is required</p>}
        {errors.description?.type === "minLength" && <p className="text-danger">At least 6 characters required</p>}
      </div>

      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input
          type="number"
          className="form-control"
          {...register("amount", { required: true, min: 0.01 })}
        />
        {errors.amount?.type === "required" && <p className="text-danger">This field is required</p>}
        {errors.amount?.type === "min" && <p className="text-danger">Amount must be greater than 0</p>}
      </div>

      <div className="mb-3">
        <label className="form-label">Category</label>
        <select
          className="form-select"
          {...register("category", { required: true })}
        >
          <option value="" disabled>Select Category</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat.toLowerCase()}>{cat}</option>
          ))}
        </select>
        {errors.category?.type === "required" && <p className="text-danger">This field is required</p>}
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
