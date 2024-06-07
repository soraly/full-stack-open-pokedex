import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ percentage }) => {
  const completedBlocks = Math.round(percentage / 10);
  const totalBlocks = 10;

  return (
    <div className="progress-bar">
      {[...Array(totalBlocks)].map((_, index) => (
        <div
          key={index}
          className={`block ${
            index < completedBlocks ? "completed" : "incomplete"
          }`}
        />
      ))}
      <span className="percentage">{percentage}%</span>
    </div>
  );
};

export default ProgressBar;
