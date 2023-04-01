import React from "react";

const NotificationSettingsCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full">
      <h2 className="text-lg font-semibold mb-4">Notification Settings</h2>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <input type="checkbox" id="emailNotifs" className="mr-2" />
          <label htmlFor="emailNotifs">Email notifications</label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="smsNotifs" className="mr-2" />
          <label htmlFor="smsNotifs">SMS notifications</label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="pushNotifs" className="mr-2" />
          <label htmlFor="pushNotifs">Push notifications</label>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettingsCard;
