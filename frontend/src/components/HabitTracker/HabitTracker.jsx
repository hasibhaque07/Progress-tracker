import React, { useState } from "react";
import "./HabitTracker.css";

const HabitTracker = () => {
  const [habitData, setHabitData] = useState(Array(365).fill(false));

  const daysInWeek = 7;
  const weeksInYear = 52;

  const getDayColor = (completed) => {
    return completed ? "#76c7c0" : "#e0e0e0";
  };

  const handleCompleted = () => {
    const today = new Date();
    const year = today.getFullYear();
    const startOfYear = new Date(year, 0, 1);
    const daysPassed = Math.floor(
      (today - startOfYear) / (1000 * 60 * 60 * 24)
    );

    // Update the habitData state
    setHabitData((prevData) => {
      const newData = [...prevData];
      newData[daysPassed] = true;
      return newData;
    });
  };

  return (
    <div>
      <div className="habit-tracker-container">
        {Array.from({ length: weeksInYear }).map((_, weekIndex) => (
          <div key={weekIndex} className="week">
            {Array.from({ length: daysInWeek }).map((_, dayIndex) => {
              const day = weekIndex * daysInWeek + dayIndex;
              const completed = habitData[day] || false;
              return (
                <div
                  key={dayIndex}
                  className="day"
                  style={{ backgroundColor: getDayColor(completed) }}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
      <button className="habit-track-btn" onClick={handleCompleted}>
        Done
      </button>
    </div>
  );
};

export default HabitTracker;
