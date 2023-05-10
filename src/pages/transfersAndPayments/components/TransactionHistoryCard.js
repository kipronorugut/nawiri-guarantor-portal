import React from "react";
import TransactionHistoryCardItem from "./TransactionHistoryCardItem";

const TransactionHistoryCard = () => {
  const transactions = [
    {
      id: 1,
      date: "2022-10-01",
      description: "Loan payment received",
      amount: 2000,
      status: "Completed",
    },
    {
      id: 2,
      date: "2022-09-28",
      description: "Loan payment received",
      amount: 3000,
      status: "Completed",
    },
    {
      id: 3,
      date: "2022-09-25",
      description: "Loan payment received",
      amount: 1500,
      status: "Completed",
    },
    {
      id: 4,
      date: "2022-09-22",
      description: "Failed loan payment",
      amount: 1000,
      status: "Failed",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-36 w-full">
      <h2 className="text-lg font-medium mb-6">Transaction History</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr>
              <th className="w-1/5 py-2 text-left">Date</th>
              <th className="w-2/5 py-2 text-left">Description</th>
              <th className="w-1/5 py-2 text-right">Amount</th>
              <th className="w-1/5 py-2 text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <TransactionHistoryCardItem key={transaction.id} transaction={transaction} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistoryCard;
