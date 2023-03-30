import React from "react";

const LoanRequestCard = ({
  borrowerName,
  amount,
  reason,
  status,
  onApprove,
  onDecline,
}) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-lg">{borrowerName}</h3>
        <span
          className={`${
            status === "Approved"
              ? "text-green-600"
              : status === "Declined"
              ? "text-red-600"
              : "text-yellow-600"
          } font-medium`}
        >
          {status}
        </span>
      </div>
      <div className="mb-2">
        <p className="text-gray-600 text-sm">{reason}</p>
        <p className="text-gray-600 text-sm">Amount: ${amount}</p>
      </div>
      <div className="flex justify-end items-center">
        <button
          onClick={onApprove}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md mr-2"
        >
          Approve
        </button>
        <button
          onClick={onDecline}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default LoanRequestCard;
