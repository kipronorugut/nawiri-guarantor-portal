import React from "react";

const TransactionItem = ({ transaction }) => {
  const { id, date, type, amount, status } = transaction;

  return (
    <tr>
      <td className="py-4 px-6 border-b border-gray-200">{id}</td>
      <td className="py-4 px-6 border-b border-gray-200">{date}</td>
      <td className="py-4 px-6 border-b border-gray-200">{type}</td>
      <td className="py-4 px-6 border-b border-gray-200">{amount}</td>
      <td className="py-4 px-6 border-b border-gray-200">{status}</td>
    </tr>
  );
};

export default TransactionItem;
