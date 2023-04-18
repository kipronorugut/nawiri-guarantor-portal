import React from "react";
import IncomeBreakdown from "./earningsTab/IncomeBreakdown";
import EarningsOverTimeGraph from "./earningsTab/EarningsOverTimeGraph";

const EarningsAndCommissionsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full p-6 bg-white rounded-md shadow-md">
        <div className="flex flex-wrap">
          <div className="md:w-1/3 w-full">
            
            <br />
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-gray-600">
                  Earnings Account Balance
                </p>
                <p className="text-xl font-bold text-green-600">KES 54,560</p>
              </div>
            </div>
            <br />
            <hr />
            <br />

            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-gray-600">
                  Income this month
                </p>
                <p className="text-xl font-bold text-green-600">KES 17,056</p>
              </div>
            </div>
            <br />
            <hr />
            <br />

            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-gray-600">
                  Total Earnings this Year
                </p>
                <p className="text-xl font-bold text-green-600">KES 123,046</p>
              </div>
            </div>

            <br />
            <hr />
            <br />

            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-gray-600">
                  Issued Loans This Year
                </p>
                <p className="text-xl font-bold text-green-600">244</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 w-full">
            <IncomeBreakdown />
          </div>
        </div>
        <br />
        <hr />
        <div className="flex flex-wrap mt-8">
          <div className="flex justify-end md:w-1/2 w-full pl-8 pb-4 md:pb-0 ">
            <EarningsOverTimeGraph />
          </div>
          <div className="md:w-1/2 w-full pb-6 md:pb-0 md:pr-6">
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
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2 text-left text-sm font-medium">
                      Commissions Earned
                    </td>
                    <td className="px-4 py-2 text-left text-sm">8,455/-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2 text-left text-sm font-medium">
                      Interest Earned
                    </td>
                    <td className="px-4 py-2 text-left text-sm">6,678/-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2 text-left text-sm font-medium">
                      Total Earnings
                    </td>
                    <td className="px-4 py-2 text-left text-sm">16,070/-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2 text-left text-sm font-medium">
                      Earnings Accrued to Guarantor
                    </td>
                    <td className="px-4 py-2 text-left text-sm">3,040/-</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-left text-sm font-medium">
                      Earnings Accrued to Common Pool
                    </td>
                    <td className="px-4 py-2 text-left text-sm">1,020/-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <br />

        <div className="mb-8">
          <h5>
            <b>Earnings Account Transcation Summary</b>
          </h5>
          <br />
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="py-2 font-semibold text-sm text-gray-600">
                  Account
                </th>
                <th className="py-2 font-semibold text-sm text-gray-600">
                  Type
                </th>
                <th className="py-2 font-semibold text-sm text-gray-600">
                  Date
                </th>
                <th className="py-2 font-semibold text-sm text-gray-600">
                  Amount (KES)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-2 font-medium text-sm text-gray-600">
                  Frankie Otieno
                </td>
                <td className="py-2 font-medium text-sm text-gray-600">
                  Loan Interest
                </td>
                <td className="py-2 font-medium text-sm text-gray-600">
                  20/12/2023
                </td>
                <td className="py-2 font-medium text-sm text-green-600">
                  5,000
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2 font-medium text-sm text-gray-600">
                  Wambui Mwangi
                </td>
                <td className="py-2 font-medium text-sm text-gray-600">
                  Penalties
                </td>
                <td className="py-2 font-medium text-sm text-gray-600">
                  20/12/2023
                </td>
                <td className="py-2 font-medium text-sm text-green-600">
                  24,000
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2 font-medium text-sm text-gray-600">
                  Sylvia Wanjiru
                </td>
                <td className="py-2 font-medium text-sm text-gray-600">
                  Loan Interest
                </td>
                <td className="py-2 font-medium text-sm text-gray-600">
                  20/12/2023
                </td>
                <td className="py-2 font-medium text-sm text-green-600">130</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2 font-medium text-sm text-gray-600">
                  Duncan Mwangi
                </td>
                <td className="py-2 font-medium text-sm text-gray-600">
                  Loan Interest
                </td>
                <td className="py-2 font-medium text-sm text-gray-600">
                  20/12/2023
                </td>
                <td className="py-2 font-medium text-sm text-green-600">
                  1,000
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
      </div>
    </div>
  );
};

export default EarningsAndCommissionsPage;
