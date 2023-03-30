import React from "react";
import LoanTableRow from "./LoanTableRow";

const LoanTable = ({ loans }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr
              className="
                text-xs
                font-semibold
                tracking-wide
                text-left
                uppercase
                border-b
                dark:border-gray-700
                bg-gray-50
                dark:text-gray-400 dark:bg-gray-800
              "
            >
              <th className="px-4 py-3">Loan ID</th>
              <th className="px-4 py-3">Borrower</th>
              <th className="px-4 py-3">Loan Amount</th>
              <th className="px-4 py-3">Interest</th>
              <th className="px-4 py-3">Term</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Next Payment</th>
            </tr>
          </thead>
          <tbody
            className="
              bg-white
              divide-y
              dark:divide-gray-700 dark:bg-gray-800
            "
          >
            {loans.map((loan) => (
              <LoanTableRow key={loan.id} loan={loan} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanTable;
