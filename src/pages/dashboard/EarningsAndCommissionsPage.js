import React from "react";

const EarningsAndCommissionsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-xl font-semibold mb-4">Earnings and Commissions</h2>
      <div className="w-full p-6 bg-white rounded-md shadow-md">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-8">
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-gray-600">
              Current Account Balance
            </p>
            <p className="text-3xl font-bold text-green-600">KES 50,000</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-gray-600">
              Earnings Summary
            </p>
            <p className="text-3xl font-bold text-green-600">KES 10,000</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-gray-600">
              Commission Rates
            </p>
            <p className="text-3xl font-bold text-green-600">5%</p>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-sm font-semibold text-gray-600 mb-2">
            Earnings Breakdown
          </p>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="py-2 font-semibold text-sm text-gray-600">
                  Source
                </th>
                <th className="py-2 font-semibold text-sm text-gray-600">
                  Amount (KES)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-2 font-medium text-sm text-gray-600">
                  Loan Interest
                </td>
                <td className="py-2 font-medium text-sm text-green-600">
                  5,000
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2 font-medium text-sm text-gray-600">
                  Guarantor Fee
                </td>
                <td className="py-2 font-medium text-sm text-green-600">
                  5,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        

        <div className="flex justify-end">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md mr-4">
            Transfer to M-PESA
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md mr-4">
            Reinvest in Lending Pool
          </button>
        </div>
        <br />
        <div className="mb-8">
          <table className="w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-bold uppercase">
                  Earnings Breakdown
                </th>
                <th className="px-4 py-2 text-left text-sm font-bold uppercase">
                  KES
                </th>
                <th className="px-4 py-2 text-left text-sm font-bold uppercase">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 text-left text-sm font-medium">
                  Commissions Earned
                </td>
                <td className="px-4 py-2 text-left text-sm">8,000</td>
                <td className="px-4 py-2 text-left text-sm">50%</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 text-left text-sm font-medium">
                  Interest Earned
                </td>
                <td className="px-4 py-2 text-left text-sm">8,000</td>
                <td className="px-4 py-2 text-left text-sm">50%</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 text-left text-sm font-medium">
                  Total Earnings
                </td>
                <td className="px-4 py-2 text-left text-sm">16,000</td>
                <td className="px-4 py-2 text-left text-sm">100%</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 text-left text-sm font-medium">
                  Earnings Accrued to Guarantor
                </td>
                <td className="px-4 py-2 text-left text-sm">8,000</td>
                <td className="px-4 py-2 text-left text-sm">50%</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left text-sm font-medium">
                  Earnings Accrued to Common Pool
                </td>
                <td className="px-4 py-2 text-left text-sm">8,000</td>
                <td className="px-4 py-2 text-left text-sm">50%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EarningsAndCommissionsPage;
