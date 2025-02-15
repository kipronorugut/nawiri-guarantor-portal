import React from "react";
import PortfolioHealthPageTab from "./portfolioHealthTab/Index";
import TotalLoanValueMetric from "./portfolioHealthTab/TotalLoanValueMetric";
import LoansAtRisk from "./portfolioHealthTab/LoansAtRisk";
import LoanStats from "./portfolioHealthTab/LoanStats";
import LoanPerformanceGraph from "./portfolioHealthTab/LoanPerformanceGraph";

const PortfolioHealthPage = () => {
  return (
    <div>
      {" "}
      <div className="mt-3">
        {" "}
        <div className="container pt-6 mx-auto">
          <div className="flex flex-wrap">
            <div className="md:w-1/3 w-full pb-6 md:pb-0 md:pr-6">
              <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-fit">
                <PortfolioHealthPageTab />
              </div>
            </div>
            <div className="md:w-1/3 w-full pb-6 md:pb-0 md:pr-6">
              <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-fit">
                <TotalLoanValueMetric />
              </div>
            </div>
            <div className="md:w-1/3 w-full pb-6 md:pb-0 md:pr-6">
              <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-fit">
                <LoansAtRisk />
              </div>
            </div>
          </div>
          <br />
          <div className="flex flex-wrap">
            <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6">
              <div class="bg-white shadow-md rounded-md p-6">
                <LoanPerformanceGraph />
              </div>
            </div>
            <div className="md:w-1/3 w-full">
              <LoanStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHealthPage;
