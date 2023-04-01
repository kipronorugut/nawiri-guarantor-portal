import React, { useState } from "react";
import ChangePasswordCard from "./ChangePasswordCard";
import BankAccountCard from "./BankAccountCard";
import PaymentHistorySummaryCard from "./PaymentHistorySummaryCard";
import NotificationSettingsCard from "./NotificationSettingsCard";
import TwoFactorAuthCard from "./TwoFactorAuthCard";

const AccountManagementDashboard = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showBankAccount, setShowBankAccount] = useState(false);
  const [showPaymentHistory, setShowPaymentHistory] = useState(false);
  const [showNotificationSettings, setShowNotificationSettings] = useState(
    false
  );
  const [showTwoFactorAuth, setShowTwoFactorAuth] = useState(false);

  const handleBankAccountClick = () => {
    // Navigate to Bank Account page
  };

  const handleCardClick = (cardName) => {
    switch (cardName) {
      case "changePassword":
        setShowChangePassword(true);
        break;
      case "bankAccount":
        setShowBankAccount(true);
        break;
      case "paymentHistory":
        setShowPaymentHistory(true);
        break;
      case "notificationSettings":
        setShowNotificationSettings(true);
        break;
      case "twoFactorAuth":
        setShowTwoFactorAuth(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div
          onClick={() => handleCardClick("changePassword")}
          className="cursor-pointer shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <ChangePasswordCard />
        </div>
        <div
          onClick={() => handleCardClick("bankAccount")}
          className="cursor-pointer shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <BankAccountCard
            bankName="Bank of America"
            accountNumber="1234-5678-9012"
            accountName="John Doe"
            onClick={handleBankAccountClick}
          />
          <BankAccountCard
            bankName="Wells Fargo"
            accountNumber="2345-6789-0123"
            accountName="Jane Smith"
            onClick={handleBankAccountClick}
          />
          <BankAccountCard
            bankName="Chase"
            accountNumber="3456-7890-1234"
            accountName="Bob Johnson"
            onClick={handleBankAccountClick}
          />
        </div>
        <div
          onClick={() => handleCardClick("paymentHistory")}
          className="cursor-pointer shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <PaymentHistorySummaryCard />
        </div>
        <div
          onClick={() => handleCardClick("notificationSettings")}
          className="cursor-pointer shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <NotificationSettingsCard />
        </div>
        <div
          onClick={() => handleCardClick("twoFactorAuth")}
          className="cursor-pointer shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <TwoFactorAuthCard />
        </div>
      </div>
      {showChangePassword && (
        <ChangePasswordCard onClose={() => setShowChangePassword(false)} />
      )}
      {showBankAccount && (
        <BankAccountCard onClose={() => setShowBankAccount(false)} />
      )}
      {showPaymentHistory && (
        <PaymentHistorySummaryCard
          onClose={() => setShowPaymentHistory(false)}
        />
      )}
      {showNotificationSettings && (
        <NotificationSettingsCard
          onClose={() => setShowNotificationSettings(false)}
        />
      )}
      {showTwoFactorAuth && (
        <TwoFactorAuthCard onClose={() => setShowTwoFactorAuth(false)} />
      )}
    </div>
  );
};

export default AccountManagementDashboard;
