import React from "react";

const LoansAtRisk = () => {
  return (
    <div class="bg-white shadow-md rounded-md p-6">
      <h2 class="text-lg font-medium mb-4">Total Loans at Risk</h2>
      <hr />
      <br />
      <div class="flex justify-between">
        <div class="w-1/2 text-center">
          <p class="text-sm text-gray-600 mb-2">Rollover</p>
          <p class="text-3xl font-bold text-red-500">12</p>
        </div>
        <div class="w-1/2 text-center">
          <p class="text-sm text-gray-600 mb-2">Default</p>
          <p class="text-3xl font-bold text-red-500">4</p>
        </div>
      </div>
    </div>
  );
};

export default LoansAtRisk;
