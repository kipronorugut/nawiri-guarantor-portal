import React from "react";

const RiskScore = () => {
  return (
    <div class="bg-white shadow-md rounded-md p-6">
      <div className="flex items-center mb-4">
        <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-white mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M13.268 2.732a6.002 6.002 0 011.416 9.475l1.166 1.165a8.002 8.002 0 00-10.605-.001l1.165-1.164a6.002 6.002 0 019.478-1.416zm1.414 1.414A4.001 4.001 0 0011.874 7.5l-1.353.809a6.008 6.008 0 01-2.026 6.018l-.806 1.205a8.004 8.004 0 008.198-1.711l1.203-.807a6.008 6.008 0 011.481-9.108z"
              clipRule="evenodd"
            />
            <path d="M10 13a3 3 0 100-6 3 3 0 000 6z" />
          </svg>
        </div>
        <h2 className="text-lg font-medium">Portfolio Risk Score</h2>
      </div>
      <hr />
      <br />
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">75%</div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.268 2.732a6.002 6.002 0 011.416 9.475l1.166 1.165a8.002 8.002 0 00-10.605-.001l1.165-1.164a6.002 6.002 0 019.478-1.416zm1.414 1.414A4.001 4.001 0 0011.874 7.5l-1.353.809a6.008 6.008 0 01-2.026 6.018l-.806 1.205a8.004 8.004 0 008.198-1.711l1.203-.807a6.008 6.008 0 011.481-9.108z"
              clipRule="evenodd"
            />
            <path d="M10 13a3 3 0 100-6 3 3 0 000 6z" />
          </svg>
          <div className="text-xs text-gray-500">Moderate Risk</div>
        </div>
      </div>

      <div class="mt-4 flex items-center">
        <div class="text-red-500 font-medium text-sm">
          +5.2% from last month
        </div>
      </div>
    </div>
  );
};

export default RiskScore;
