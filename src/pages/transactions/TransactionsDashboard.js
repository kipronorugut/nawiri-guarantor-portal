import React from "react";
import LoanPaymentsCard from "./LoanPaymentsCard";
import FeesAndInterestCard from "./FeesAndInterestCard";
import TransactionHistoryCard from "./TransactionHistoryCard";
import DisputesAndIssuesCard from "./DisputesAndIssuesCard";
import TransactionAnalyticsCard from "./TransactionAnalyticsCard";

const TransactionsDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-16">
      <h1 className="text-3xl font-bold mb-6">Transactions Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <LoanPaymentsCard />
        <FeesAndInterestCard />
        <TransactionHistoryCard />
        <DisputesAndIssuesCard />
       
        <TransactionAnalyticsCard />
      </div>
    </div>
  );
};

export default TransactionsDashboard;
