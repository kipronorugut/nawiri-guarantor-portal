import React, { useState } from 'react';
import { Label, Input, Button } from '@windmill/react-ui';

function PaymentForm() {
  const [payeeList, setPayeeList] = useState([
    { name: 'John Doe', number: '0720123456' },
    { name: 'Jane Doe', number: '0730456789' },
    { name: 'Myself', number: '0710234567' },
  ]);
  const [selectedPayee, setSelectedPayee] = useState(null);
  const [amount, setAmount] = useState('');
  const [otp, setOtp] = useState('');

  const handlePayeeChange = (event) => {
    const index = event.target.value;
    if (index === '-1') {
      setSelectedPayee(null);
    } else {
      setSelectedPayee(payeeList[index]);
    }
  };

  const handleAddPayee = () => {
    const name = prompt('Enter payee name:');
    const number = prompt('Enter payee number:');
    if (name && number) {
      const newPayeeList = [...payeeList, { name, number }];
      setPayeeList(newPayeeList);
      setSelectedPayee({ name, number });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle payment submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Payee
        <select onChange={handlePayeeChange}>
          <option value="-1">Select payee...</option>
          {payeeList.map((payee, index) => (
            <option key={index} value={index}>
              {payee.name} ({payee.number})
            </option>
          ))}
          <option value="-2">Add new payee</option>
        </select>
      </Label>
      {selectedPayee === null && (
        <div>
          <Label>
            Payee Name
            <Input type="text" required />
          </Label>
          <Label>
            Payee Number
            <Input type="tel" required />
          </Label>
        </div>
      )}
      <Label>
        Amount
        <Input type="number" required value={amount} onChange={(e) => setAmount(e.target.value)} />
      </Label>
      <Label>
        OTP
        <Input type="number" required value={otp} onChange={(e) => setOtp(e.target.value)} />
      </Label>
      <Button type="submit">Pay</Button>
      <Button type="button" onClick={handleAddPayee}>
        Add new payee
      </Button>
    </form>
  );
}

export default PaymentForm;
