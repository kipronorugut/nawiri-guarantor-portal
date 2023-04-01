import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Select, Input, Button } from "@windmill/react-ui";

const TransferForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    // Simulate sending form data to the server
    setTimeout(() => {
      if (data.transferFrom === data.transferTo) {
        setErrorMessage("Cannot transfer funds to the same account.");
      } else if (data.transferAmount <= 0) {
        setErrorMessage("Transfer amount must be greater than zero.");
      } else {
        setSuccessMessage(
          `Successfully transferred ${data.transferAmount} from ${data.transferFrom} to ${data.transferTo}.`
        );
        setErrorMessage("");
      }
    }, 1000);
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-6">Transfer Funds</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <Select
            label="Transfer from"
            name="transferFrom"
            {...register("transferFrom", { required: true })}
            error={errors.transferFrom?.message}
          >
            <option value="earnings">Earnings Account</option>
            <option value="loan">Loan Account</option>
            <option value="wallet">Wallet</option>
          </Select>
        </div>
        <div className="mb-6">
          <Select
            label="Transfer to"
            name="transferTo"
            {...register("transferTo", { required: true })}
            error={errors.transferTo?.message}
          >
            <option value="earnings">Earnings Account</option>
            <option value="loan">Loan Account</option>
            <option value="wallet">Wallet</option>
          </Select>
        </div>
        <div className="mb-6">
          <Input
            label="Amount"
            name="transferAmount"
            type="number"
            {...register("transferAmount", { required: true })}
            error={errors.transferAmount?.message}
          />
        </div>
        <Button type="submit">Transfer</Button>
      </form>
      {successMessage && (
        <div className="text-green-500 mt-4">{successMessage}</div>
      )}
      {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
    </div>
  );
};

export default TransferForm;
