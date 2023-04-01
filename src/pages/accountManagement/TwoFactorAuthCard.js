import React from "react";

const TwoFactorAuthCard = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-medium mb-2">Two-Factor Authentication</h3>
      <p className="text-sm text-gray-500 mb-4">
        Add an extra layer of security to your account by enabling two-factor
        authentication.
      </p>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-md font-medium mb-1">Status</h4>
          <p className="text-sm text-gray-500">Enabled</p>
        </div>
        <button className="bg-gray-200 hover:bg-gray-300 rounded-md px-4 py-2 text-sm font-medium">
          Manage
        </button>
      </div>
    </div>
  );
};

export default TwoFactorAuthCard;
