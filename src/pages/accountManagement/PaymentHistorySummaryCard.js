import React from "react";

const PaymentHistorySummaryCard = ({ totalPayments, lastPaymentDate }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Payment History</h3>
        <a href="/payment-history" className="text-blue-500 text-sm">
          View All
        </a>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-2 sm:mb-0">
          <p className="text-gray-500 text-sm mb-1">Total Payments</p>
          <p className="text-lg font-medium">{totalPayments}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1">Last Payment Date</p>
          <p className="text-lg font-medium">{lastPaymentDate}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistorySummaryCard;
