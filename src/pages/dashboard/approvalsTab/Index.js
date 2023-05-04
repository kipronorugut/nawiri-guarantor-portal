import React from "react";
import ApprovalsDashboardMetrics from "./ApprovalsDashboardMetrics";
import ApprovalsTable from "./ApprovalsTable";

const Index = () => {
  return (
    <div >
      <div className="pt-6 flex flex-wrap">
        <div className="w-full">
          <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-fit">
            <ApprovalsDashboardMetrics />
          </div>
        </div>
      
      </div>
      <div className="pt-6 w-full">
          <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-fit">
            <ApprovalsTable />
          </div>
        </div>
    </div>
  );
};

export default Index;
