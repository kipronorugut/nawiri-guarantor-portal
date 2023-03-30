import React, { useState } from "react";
import BalanceCard from "./BalanceCard";
import TransactionHistory from "./transactions/TransactionHistory";
import FilterAndSearch from "./FilterAndSearch";
import AddWithdrawFunds from "./AddWithdrawFunds";
import TransferFunds from "./TransferFunds";

const initialBalances = [
  { account: "Main Account", balance: 100000 },
  { account: "Savings Account", balance: 50000 },
  { account: "Investment Account", balance: 75000 },
];

function AccountBalancePage() {
  const [balances, setBalances] = useState(initialBalances);
  const [transactions, setTransactions] = useState([]);

  const handleDeposit = (index, amount) => {
    const updatedBalances = [...balances];
    updatedBalances[index].balance += amount;
    setBalances(updatedBalances);
  };

  const handleWithdrawal = (index, amount) => {
    const updatedBalances = [...balances];
    updatedBalances[index].balance -= amount;
    setBalances(updatedBalances);
  };

  const handleTransfer = (amount, recipient) => {
    // code to handle transfer transaction
  };

  const handleSearch = (filters) => {
    // code to filter and search transactions
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Account Balance Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {balances.map((balance, index) => (
          <BalanceCard
            key={index}
            account={balance.account}
            balance={balance.balance}
            onDeposit={(amount) => handleDeposit(index, amount)}
            onWithdrawal={(amount) => handleWithdrawal(index, amount)}
          />
        ))}
      </div>
      <TransactionHistory transactions={transactions} />
      <FilterAndSearch onSearch={handleSearch} />
      <AddWithdrawFunds
        onDeposit={handleDeposit}
        onWithdrawal={handleWithdrawal}
      />
      <TransferFunds onTransfer={handleTransfer} />
    </div>
  );
}

export default AccountBalancePage;
