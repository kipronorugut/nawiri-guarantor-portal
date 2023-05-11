import React from "react";
import NetworkTable from "./components/NetworkTable";

// This page is for managing borrowers it will display a table of all borrowers
// and allow the user to add new borrowers, search for borrowers, and suspend
// borrowers.

//show code snippet


const Index = () => {
  return (
    <div>
        
      <div className="pt-4 pb-8">Network</div>

      <div>Add new Borrower</div>
      <div>Search Borrower</div>
      <div>Suspend Borrower</div>
    
      <NetworkTable />
    </div>
  );
};

export default Index;
