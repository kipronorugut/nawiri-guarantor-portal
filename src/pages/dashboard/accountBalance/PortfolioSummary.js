import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Performing", value: 200000 },
  { name: "Non-performing", value: 50000 },
];

const COLORS = ["#007aff", "#ff3b30"];

const PortfolioSummary = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Loan Portfolio Health</h3>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-700">
          <div className="text-sm font-medium">Performing</div>
          <div className="text-lg font-bold">KES 200,000</div>
        </div>
        <div className="text-gray-700">
          <div className="text-sm font-medium">Non-performing</div>
          <div className="text-lg font-bold">KES 50,000</div>
        </div>
      </div>
      <div className="w-full h-48">
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white shadow-sm rounded-lg p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">Portfolio Health Summary</h2>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col justify-center items-center p-2 bg-blue-100 rounded-md">
          <p className="text-gray-700 text-sm font-semibold mb-1">
            Total Loan Amount
          </p>
          <p className="text-gray-900 font-bold text-xl">
            2323
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-2 bg-green-100 rounded-md">
          <p className="text-gray-700 text-sm font-semibold mb-1">
            Total Repayment Amount
          </p>
          <p className="text-gray-900 font-bold text-xl">
            2323
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-2 bg-yellow-100 rounded-md">
          <p className="text-gray-700 text-sm font-semibold mb-1">
            Total Interest Amount
          </p>
          <p className="text-gray-900 font-bold text-xl">
            23232
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-2 bg-red-100 rounded-md">
          <p className="text-gray-700 text-sm font-semibold mb-1">
            Total Default Amount
          </p>
          <p className="text-gray-900 font-bold text-xl">
            121313
          </p>
        </div>
      </div>
    </div> 

    </div>
  );
};

export default PortfolioSummary;
