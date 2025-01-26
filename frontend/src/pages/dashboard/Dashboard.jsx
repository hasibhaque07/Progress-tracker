import React, { useState } from "react";
import HabitTracker from "../../components/HabitTracker/HabitTracker";
import YearProgress from "../../components/YearProgress.jsx/YearProgress";
import "./Dashboard.css";

const Dashboard = () => {
  const [habitTrackers, setHabitTrackers] = useState([]);

  const addNewHabitTracker = () => {
    const name = prompt("Enter a name for the new habit tracker:");
    if (name) {
      setHabitTrackers([...habitTrackers, { id: habitTrackers.length, name }]);
    }
  };

  return (
    <div>
      <YearProgress />
      <div className="habit-tracker-heading">
        <h1>Habit Tracker</h1>
        <button onClick={addNewHabitTracker}>Add new habit +</button>
      </div>
      <div className="habit-trackers-container">
        {habitTrackers.map((tracker) => (
          <div key={tracker.id} className="habit-tracker-card">
            <h2>{tracker.name}</h2>
            <HabitTracker />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
