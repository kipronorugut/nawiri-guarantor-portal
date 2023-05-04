import React, { useState } from "react";
import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";
import DashboardPage from "./dashboard/Index";
import EarningsAndCommissionsPage from "./dashboard/EarningsAndCommissionsPage";
import PortfolioHealthPage from "./dashboard/PortfolioHealthPage";
import ApprovalsPage from "./dashboard/approvalsTab/Index";

function Dashboard() {
  const [show, setShow] = useState(null);
  return (
    <div>
      <Tabs
        activeTab="1"
        className="pt-3"
        ulClassName=""
        activityClassName="bg-success"
        onClick={(event, tab) => console.log(event, tab)}
      >
        <Tab title="Dashboard" className="mr-3 ">
          <DashboardPage />
        </Tab>
        <Tab title="Earnings" className="mr-3">
          <EarningsAndCommissionsPage />
        </Tab>
        <Tab title="Portfolio Health" className="mr-3">
          <PortfolioHealthPage />
        </Tab>
        <Tab title="Approvals" className="mr-3">
          <ApprovalsPage />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Dashboard;
