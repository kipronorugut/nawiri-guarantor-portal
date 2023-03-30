import React from "react";
import { ChatIcon, MoneyIcon, PeopleIcon } from "../../../icons";

const LoanSummaryCard = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Loan Summary</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 rounded-md p-4 flex items-center justify-center">
          <ChatIcon className="w-8 h-8 text-gray-500 mr-4" />
          <div>
            <p className="text-gray-500 text-sm">Total Loans</p>
            <p className="text-gray-800 font-medium text-2xl">$1,234,567.89</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-md p-4 flex items-center justify-center">
          <MoneyIcon className="w-8 h-8 text-green-500 mr-4" />
          <div>
            <p className="text-gray-500 text-sm">Total Paid</p>
            <p className="text-gray-800 font-medium text-2xl">$345,678.90</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-md p-4 flex items-center justify-center">
          <PeopleIcon className="w-8 h-8 text-red-500 mr-4" />
          <div>
            <p className="text-gray-500 text-sm">Total Outstanding</p>
            <p className="text-gray-800 font-medium text-2xl">$888,888.99</p>
          </div>
        </div>
        <br/>
        <div className="bg-gray-100 rounded-md p-4 flex items-center justify-center">
          <PeopleIcon className="w-8 h-8 text-gray-500 mr-4" />
          <div>
            <p className="text-gray-500 text-sm">Total Overdue</p>
            <p className="text-gray-800 font-medium text-2xl">$0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanSummaryCard;
