import React from "react";
import { ChatIcon, MoneyIcon } from "../../../icons";

const LoanOverviewCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="flex items-center">
          <span className="text-xl font-medium text-gray-800">Loan Overview</span>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-3xl font-medium text-green-500 mr-2">
                <ChatIcon />
              </span>
              <div>
                <p className="text-lg font-medium text-gray-800">Total Loan Amount</p>
                <p className="text-sm text-gray-600">$50,000</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-3xl font-medium text-green-500 mr-2">
                <MoneyIcon />
              </span>
              <div>
                <p className="text-lg font-medium text-gray-800">Loan Term</p>
                <p className="text-sm text-gray-600">24 months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanOverviewCard;
