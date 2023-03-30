import React, { useState } from "react";

function FilterAndSearch({ onSearch }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [amount, setAmount] = useState("");

  const handleSearchClick = () => {
    onSearch({ startDate, endDate, transactionType, amount });
  };

  return (
    <div className="flex flex-wrap items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <input
          type="date"
          className="border rounded p-2"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          className="border rounded p-2"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <select
          className="border rounded p-2"
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value)}
        >
          <option value="">Transaction Type</option>
          <option value="deposit">Deposit</option>
          <option value="withdrawal">Withdrawal</option>
          <option value="transfer">Transfer</option>
        </select>
        <input
          type="number"
          className="border rounded p-2"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default FilterAndSearch;
