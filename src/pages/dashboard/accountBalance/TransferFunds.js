import React, { useState } from "react";
import { Input, Button } from "@windmill/react-ui";

function TransferFunds({ onTransfer }) {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState(0);

  const handleTransfer = () => {
    onTransfer(recipient, amount);
    setRecipient("");
    setAmount(0);
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Transfer Funds</h2>
      <div className="flex items-center">
        <label htmlFor="recipient" className="mr-2">
          Recipient:
        </label>
        <Input
          id="recipient"
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="w-1/2 mr-2"
        />
      </div>
      <div className="flex items-center mt-4">
        <label htmlFor="amount" className="mr-2">
          Amount:
        </label>
        <Input
          id="amount"
          type="number"
          min="0"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          className="w-1/2 mr-2"
        />
      </div>
      <Button onClick={handleTransfer} className="mt-6">
        Transfer
      </Button>
    </div>
  );
}

export default TransferFunds;
