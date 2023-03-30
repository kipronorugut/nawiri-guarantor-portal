import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 py-6 mb-4">
      <h2 className="text-2xl font-medium mb-4">Transaction History</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 font-medium text-left">Date</th>
              <th className="py-2 px-4 font-medium text-left">Type</th>
              <th className="py-2 px-4 font-medium text-left">Amount</th>
              <th className="py-2 px-4 font-medium text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionHistory;
