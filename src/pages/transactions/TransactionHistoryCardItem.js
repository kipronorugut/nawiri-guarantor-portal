import React from "react";
import classNames from "classnames";

const TransactionHistoryCardItem = ({ transaction }) => {
    return (
      <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
        <div>
          <p className="text-sm font-medium text-gray-900">{transaction.id}</p>
          <p className="mt-1 text-sm text-gray-500">{transaction.date}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{transaction.amount}</p>
          <p className="mt-1 text-sm">
            <span
              className={classNames(
                "px-2 py-1 font-medium rounded-md",
                {
                  "bg-green-100 text-green-800": transaction.status === "completed",
                  "bg-yellow-100 text-yellow-800": transaction.status === "pending",
                  "bg-red-100 text-red-800": transaction.status === "failed"
                }
              )}
            >
              {transaction.status}
            </span>
          </p>
        </div>
      </div>
    );
  };

  export default TransactionHistoryCardItem;