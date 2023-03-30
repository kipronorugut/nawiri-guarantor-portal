import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HeartIcon, TablesIcon } from "../../../icons";

const AddWithdrawFunds = ({ onDeposit, onWithdrawal }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const { register, handleSubmit, errors } = useForm();

  const onSubmitDeposit = (data) => {
    onDeposit(parseFloat(data.amount));
  };

  const onSubmitWithdrawal = (data) => {
    onWithdrawal(parseFloat(data.amount));
  };

  return (
    <div className="w-full">
      <div className="flex justify-between mb-4">
        <button
          className={`py-2 px-4 font-bold border-b-4 ${
            tabIndex === 0 ? "border-green-500" : "border-transparent"
          }`}
          onClick={() => setTabIndex(0)}
        >
          Deposit
        </button>
        <button
          className={`py-2 px-4 font-bold border-b-4 ${
            tabIndex === 1 ? "border-green-500" : "border-transparent"
          }`}
          onClick={() => setTabIndex(1)}
        >
          Withdrawal
        </button>
      </div>
      <form
        onSubmit={
          tabIndex === 0
            ? handleSubmit(onSubmitDeposit)
            : handleSubmit(onSubmitWithdrawal)
        }
      >
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="amount" className="mb-2 text-gray-700 font-bold">
              Amount
            </label>
            <div className="flex items-center border border-gray-500 rounded-md py-2 px-4">
              <span className="text-gray-700 font-bold text-lg">$</span>
              <input
                type="number"
                className="flex-1 px-2 py-1 text-gray-700 focus:outline-none"
            
              />
            </div>
          
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              {tabIndex === 0 ? (
                <>
                  <span className="mr-2">Deposit</span>
                  <HeartIcon />
                </>
              ) : (
                <>
                  <TablesIcon />
                  <span className="ml-2">Withdrawal</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddWithdrawFunds;
