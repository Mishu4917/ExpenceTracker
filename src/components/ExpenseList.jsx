import React, { useState } from "react";
const categoryEmoji = {
  utilities: "💡",
  study: "🎓",
  groceries: "🛒",
  entertainment: "🎮",
  health: "🏥",
  transport: "🚗",
  shopping: "🛍️",
  food: "🍔",
  travel: "✈️",
  others: "🎯",
};

const ExpenseList = ({ items, deleteItem }) => {
  const [limit, setLimit] = useState(500); // Default limit 500

  const totalAmount = items.reduce((total, item) => {
    const amount = Number(item.amount);
    return total + (isNaN(amount) ? 0 : amount);
  }, 0);

  const funnyMessage =
    totalAmount > limit
      ? `💸 Oops Mishu! You crossed your limit of $${limit}!`
      : `✅ Good Mishu! You're within your $${limit} limit!`;

  return (
    <div className="table-container">
      {/* Limit Input Section */}
      {items.length > 0 && (
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <label style={{ fontWeight: "bold", color: "#6c5ce7" }}>
            💰 Set Your Limit:
          </label>
          <input
            type="number"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className="limit-input"
          />
        </div>
      )}

      {/* Funny total message */}
      {items.length > 0 && (
        <p
          className="funny-msg"
          style={{
            color: totalAmount > limit ? "#8e44ad" : "",
            fontWeight: "bold",
            fontSize: "1.1rem",
            textAlign: "center",
            marginBottom: "1rem",
            transition: "all 0.3s ease-in-out",
          }}
        >
          {funnyMessage}
        </p>
      )}

      {items.length === 0 ? (
        <p className="text-muted">No expenses found 😢</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.description}</td>
                <td className="amount">${Number(item.amount).toFixed(2)}</td>
                <td className={`category ${item.category.toLowerCase()}`}>
                  {categoryEmoji[item.category.toLowerCase()] || "📝"}{" "}
                  {item.category}
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* Total Row */}
            <tr>
              <td>
                <h3>Total</h3>
              </td>
              <td>
                <h3>${totalAmount.toFixed(2)}</h3>
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseList;      