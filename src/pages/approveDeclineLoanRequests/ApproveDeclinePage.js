import React, { useState } from "react";
import LoanRequestCard from "./LoanRequestCard";

const loanRequests = [
  {
    id: 1,
    borrowerName: "John Doe",
    amount: 10000,
    reason: "Home Improvement",
    status: "Pending",
  },
  {
    id: 2,
    borrowerName: "Jane Doe",
    amount: 5000,
    reason: "Education",
    status: "Pending",
  },
  {
    id: 3,
    borrowerName: "Bob Smith",
    amount: 15000,
    reason: "Business Investment",
    status: "Pending",
  },
];

const ApproveDeclinePage = () => {
  const [requests, setRequests] = useState(loanRequests);

  const handleApprove = (id) => {
    const updatedRequests = requests.map((request) => {
      if (request.id === id) {
        return { ...request, status: "Approved" };
      }
      return request;
    });
    setRequests(updatedRequests);
  };

  const handleDecline = (id) => {
    const updatedRequests = requests.map((request) => {
      if (request.id === id) {
        return { ...request, status: "Declined" };
      }
      return request;
    });
    setRequests(updatedRequests);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium mb-4">Approve/Decline Loan Requests</h1>
      {requests.map((request) => (
        <LoanRequestCard
          key={request.id}
          borrowerName={request.borrowerName}
          amount={request.amount}
          reason={request.reason}
          status={request.status}
          onApprove={() => handleApprove(request.id)}
          onDecline={() => handleDecline(request.id)}
        />
      ))}
    </div>
  );
};

export default ApproveDeclinePage;
