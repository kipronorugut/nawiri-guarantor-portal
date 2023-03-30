import React from "react";

const LoanTableRow = ({ loan }) => {
  return (
    <tr className="bg-white border-b-2 border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap">{loan.id}</td>
      <td className="py-3 px-6 text-left">{loan.borrower}</td>
      <td className="py-3 px-6 text-center">{loan.amount}</td>
      <td className="py-3 px-6 text-center">{loan.interestRate}</td>
      <td className="py-3 px-6 text-center">{loan.term}</td>
      <td className="py-3 px-6 text-center">{loan.status}</td>
      <td className="py-3 px-6 text-center">{loan.nextPayment}</td>
    </tr>
  );
};

export default LoanTableRow;
