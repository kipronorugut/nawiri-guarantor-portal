import React from "react";

const LoanPaymentsCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-medium mb-4">Loan Payments</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="loanId"
            className="block text-gray-700 font-medium mb-2"
          >
            Loan ID
          </label>
          <input
            type="text"
            id="loanId"
            name="loanId"
            className="w-full border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="paymentAmount"
            className="block text-gray-700 font-medium mb-2"
          >
            Payment Amount
          </label>
          <input
            type="number"
            id="paymentAmount"
            name="paymentAmount"
            className="w-full border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="paymentMethod"
            className="block text-gray-700 font-medium mb-2"
          >
            Payment Method
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            className="w-full border-gray-300 rounded-lg p-2"
          >
            <option value="">Select payment method</option>
            <option value="mpesa">M-PESA</option>
            <option value="creditCard">Credit Card</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg">
          Process Payment
        </button>
      </form>
    </div>
  );
};

export default LoanPaymentsCard;
