import React from "react";
import { useState } from "react";

const DisputesAndIssuesCard = () => {
  const [issues, setIssues] = useState([]);

  const handleAddIssue = () => {
    setIssues([...issues, ""]);
  };

  const handleIssueChange = (index, value) => {
    const updatedIssues = [...issues];
    updatedIssues[index] = value;
    setIssues(updatedIssues);
  };

  const handleRemoveIssue = (index) => {
    const updatedIssues = [...issues];
    updatedIssues.splice(index, 1);
    setIssues(updatedIssues);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full">
      <h2 className="text-lg font-medium text-gray-800 mb-4">
        Disputes and Issues
      </h2>
      <div className="mb-4">
        <button
          onClick={handleAddIssue}
          className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg py-2 px-4"
        >
          Add Issue
        </button>
      </div>
      {issues.map((issue, index) => (
        <div key={index} className="mb-4">
          <textarea
            value={issue}
            onChange={(e) => handleIssueChange(index, e.target.value)}
            className="w-full border rounded-lg p-2 mb-2"
            placeholder="Describe the issue..."
          ></textarea>
          <button
            onClick={() => handleRemoveIssue(index)}
            className="bg-red-500 hover:bg-red-600 text-white rounded-lg py-2 px-4"
          >
            Remove Issue
          </button>
        </div>
      ))}
    </div>
  );
};

export default DisputesAndIssuesCard;
