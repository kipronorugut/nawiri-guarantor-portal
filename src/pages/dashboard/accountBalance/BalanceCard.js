import React, { useState } from 'react';

const BalanceCard = ({ account, balance, onDeposit, onWithdrawal }) => {
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawalAmount, setWithdrawalAmount] = useState('');

  const handleDeposit = (e) => {
    e.preventDefault();
    if (depositAmount) {
      onDeposit(Number(depositAmount));
      setDepositAmount('');
    }
  };

  const handleWithdrawal = (e) => {
    e.preventDefault();
    if (withdrawalAmount) {
      onWithdrawal(Number(withdrawalAmount));
      setWithdrawalAmount('');
    }
  };

  return (
    <div className="p-6 border rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">{account}</h3>
        <span className="text-gray-600 text-sm">{`Balance: KES ${balance}`}</span>
      </div>
      <form onSubmit={handleDeposit} className="mb-4">
        <label htmlFor="depositAmount" className="block text-sm font-medium text-gray-700 mb-2">
          Deposit Amount
        </label>
        <div className="flex">
          <input
            type="number"
            id="depositAmount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            className="border border-gray-300 rounded-l-md px-3 py-2 flex-1 mr-2"
            placeholder="0"
            min="0"
            step="any"
          />
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white rounded-r-md px-3 py-2">
            Deposit
          </button>
        </div>
      </form>
      <form onSubmit={handleWithdrawal}>
        <label htmlFor="withdrawalAmount" className="block text-sm font-medium text-gray-700 mb-2">
          Withdrawal Amount
        </label>
        <div className="flex">
          <input
            type="number"
            id="withdrawalAmount"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(e.target.value)}
            className="border border-gray-300 rounded-l-md px-3 py-2 flex-1 mr-2"
            placeholder="0"
            min="0"
            step="any"
          />
          <button type="submit" className="bg-red-500 hover:bg-red-600 text-white rounded-r-md px-3 py-2">
            Withdraw
          </button>
        </div>
      </form>
    </div>
  );
};

export default BalanceCard;
