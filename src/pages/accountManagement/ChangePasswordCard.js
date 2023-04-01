import React, { useState } from "react";

const ChangePasswordCard = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate current password
    // Validate new password meets complexity requirements
    // Validate new password matches confirm password
    // Submit password change request to API
    // Handle success and error responses
    setIsSuccess(true); // For demo purposes only
    setErrorMessage(""); // For demo purposes only
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-medium mb-4">Change Password</h2>
      <form onSubmit={handleSubmit}>
        {errorMessage && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
            <p className="font-bold">Error:</p>
            <p>{errorMessage}</p>
          </div>
        )}
        {isSuccess && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
            <p className="font-bold">Success:</p>
            <p>Your password has been changed successfully.</p>
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="current-password" className="block text-gray-700 font-medium mb-2">
            Current Password
          </label>
          <input
            type="password"
            id="current-password"
            name="current-password"
            value={currentPassword}
            onChange={(event) => setCurrentPassword(event.target.value)}
            className="w-full border-gray-300 border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="new-password" className="block text-gray-700 font-medium mb-2">
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            className="w-full border-gray-300 border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirm-password" className="block text-gray-700 font-medium mb-2">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="w-full border-gray-300 border rounded-md px-3 py-2"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordCard;
