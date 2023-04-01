import React from "react";

const FeesAndInterestCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-800 mb-4">
        Fees and Interest
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500 text-sm mb-1">Fees collected</p>
          <p className="text-gray-900 font-medium text-lg">$50.00</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1">Interest earned</p>
          <p className="text-gray-900 font-medium text-lg">$100.00</p>
        </div>
      </div>
    </div>
  );
};

export default FeesAndInterestCard;
