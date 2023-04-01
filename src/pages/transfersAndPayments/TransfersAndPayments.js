import React, { useState } from 'react';
import TransferForm from './TransferForm';
import PaymentForm from './PaymentForm';

const TransfersAndPayments = () => {
  const [selectedTab, setSelectedTab] = useState('transfer');
  
  return (
    <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex" aria-label="Tabs">
          <button
            onClick={() => setSelectedTab('transfer')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              selectedTab === 'transfer'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Transfers
          </button>

          <button
            onClick={() => setSelectedTab('payment')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              selectedTab === 'payment'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Payments
          </button>
        </nav>
      </div>

      {selectedTab === 'transfer' && <TransferForm />}
      {selectedTab === 'payment' && <PaymentForm />}
    </div>
  );
};

export default TransfersAndPayments;
