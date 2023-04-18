import React, { useState } from "react";
import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";
import DashboardPage from "./dashboard/Index";
import EarningsAndCommissionsPage from "./dashboard/EarningsAndCommissionsPage";

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
          <div className="mt-3">
            {" "}
            <div className="container pt-6 mx-auto">
              <div className="flex flex-wrap">
                <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6">
                  {/* Remove class [ h-24 ] when adding a card block */}
                  {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                  <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
                </div>
                <div className="md:w-1/3 w-full">
                  {/* Remove class [ h-24 ] when adding a card block */}
                  {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                  <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab title="Approvals" className="mr-3">
          <div className="mt-3">
            {" "}
            <div className="container pt-6 mx-auto">
              <div className="flex flex-wrap">
                <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6">
                  {/* Remove class [ h-24 ] when adding a card block */}
                  {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                  <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
                </div>
                <div className="md:w-1/3 w-full">
                  {/* Remove class [ h-24 ] when adding a card block */}
                  {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                  <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Dashboard;
