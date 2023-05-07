import React from "react";
import LoanOverviewCard from "./components/LoanOverviewCard";
import LoanSummaryCard from "./components/LoanSummaryCard";
import LoanTable from "./components/LoanTable";

const loans = [
  {
    id: 1,
    name: "Personal Loan",
    borrower: "John Smith",
    amount: 5000,
    nextPayment: "01/04/2023",
    interestRate: 5,
    term: 12,
    status: "Current",
    paymentDue: "01/04/2023",
  },
  {
    id: 2,
    name: "Business Loan",
    borrower: "Jane Doe",
    nextPayment: "15/04/2023",
    amount: 10000,
    interestRate: 10,
    term: 24,
    status: "Current",
    paymentDue: "15/04/2023",
  },
  {
    id: 3,
    name: "Car Loan",
    borrower: "Michael Johnson",
    amount: 15000,
    nextPayment: "10/03/2023",
    interestRate: 15,
    term: 36,
    status: "Overdue",
    paymentDue: "10/03/2023",
  },
];

const LoanManagementDashboardPage = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full">
        <LoanSummaryCard loans={loans} />
      </div>
      <br />
      <div className="w-full">
        <LoanTable loans={loans} />
      </div>
    </div>
  );
};

export default LoanManagementDashboardPage;
