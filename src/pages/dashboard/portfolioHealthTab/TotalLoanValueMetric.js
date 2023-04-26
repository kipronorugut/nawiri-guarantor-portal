import React from "react";

const TotalLoanValueMetric = () => {
  return (
    <div class="bg-white rounded-lg shadow-md p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-medium text-gray-800">Total Loan Value</h2>

        <svg class="h-6 w-6 text-gray-400 fill-current" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            d="M3.75 2a.75.75 0 0 0-.75.75v3.38a.75.75 0 0 0 1.5 0V3.5h18.5v16h-6.63a.75.75 0 1 0 0 1.5h7.13a.75.75 0 0 0 .75-.75V2.75a.75.75 0 0 0-.75-.75H3.75zM22.25 19.25h-6.38a.75.75 0 0 0 0 1.5h6.38a.75.75 0 0 0 0-1.5zM22.25 17.25h-6.38a.75.75 0 0 0 0 1.5h6.38a.75.75 0 0 0 0-1.5zM3.75 3.5h16v13.75H3.75V3.5zm4.5 4.25a.75.75 0 0 0-.75.75v1.5a.75.75 0 1 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75zm5.5 0a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75zm5.5 0a.75.75 0 0 0-.75.75v1.5a.75.75 0 1 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75z"
          ></path>
        </svg>
      </div>
      <hr />
      <br />
      <div class="text-2xl font-bold text-gray-800">KES 1,125,000</div>
      <div class="mt-4 flex items-center">
        <div class="text-green-500 font-medium text-sm">
          +5.2% from last month
        </div>
      </div>
    </div>
  );
};

export default TotalLoanValueMetric;
