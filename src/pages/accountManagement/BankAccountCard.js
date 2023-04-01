import React from "react";

const BankAccountCard = ({ bankName, accountNumber, accountName, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start justify-between cursor-pointer hover:opacity-75" onClick={onClick}>
      <div>
        <h2 className="text-lg font-medium text-gray-800 mb-2">{bankName}</h2>
        <p className="text-sm text-gray-600 mb-1">Account Number:</p>
        <p className="text-sm font-medium text-gray-800 mb-2">{accountNumber}</p>
        <p className="text-sm text-gray-600 mb-1">Account Name:</p>
        <p className="text-sm font-medium text-gray-800">{accountName}</p>
      </div>
      <div>
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default BankAccountCard;
