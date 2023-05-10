import React from "react";

const TransactionAnalyticsCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-24 w-full ">
      <h2 className="text-xl font-medium mb-4">Transaction Analytics</h2>
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold text-green-500">+ $3,245.00</div>
        <div className="text-gray-500 text-sm">Total Revenue</div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="text-lg font-bold text-red-500">- $867.00</div>
        <div className="text-gray-500 text-sm">Total Expenses</div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="text-lg font-bold text-gray-800">$2,378.00</div>
        <div className="text-gray-500 text-sm">Net Income</div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">Transactions by Type</h3>
        <div className="flex justify-between items-center">
          <div className="text-gray-700">Loan Payments</div>
          <div className="text-lg font-bold">245</div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-gray-700">Fees &amp; Interest</div>
          <div className="text-lg font-bold">123</div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-gray-700">Disputes &amp; Issues</div>
          <div className="text-lg font-bold">19</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionAnalyticsCard;
