import React from 'react'

const LoanStats = () => {
  return (
    <div><div className="bg-white rounded-lg shadow p-4">
    <div className="flex flex-col">
      <div className="flex justify-between items-center py-2">
        <span className="text-gray-700 font-small">
          Loan Approval Rate
        </span>
        <span className="text-gray-900 font-small">85%</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between items-center py-2">
        <span className="text-gray-700 font-small">
          Loan Delinquency Rate
        </span>
        <span className="text-gray-900 font-small">5%</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between items-center py-2">
        <span className="text-gray-700 font-small">
          Average Loan Size
        </span>
        <span className="text-gray-900 font-small">$10,000</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between items-center py-2">
        <span className="text-gray-700 font-small">
          Average Customer Acquisition/Servicing Costs
        </span>
        <span className="text-gray-900 font-small">$500</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between items-center py-2">
        <span className="text-gray-700 font-small">
          Average Customer Lifetime Value
        </span>
        <span className="text-gray-900 font-small">$20,000</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between items-center py-2">
        <span className="text-gray-700 font-small">
          Net Promoter Score (NPS)
        </span>
        <span className="text-gray-900 font-small">+40</span>
      </div>
    </div>
  </div></div>
  )
}

export default LoanStats