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

  const handleHabitDelete = (id) => {
    setHabitTrackers(habitTrackers.filter((tracker) => tracker.id !== id));
  };

  return (
    <div>
      <YearProgress />
      <div className="habit-tracker-heading">
        <h1 style={{ marginBottom: "20px", marginTop: "40px" }}>
          Habit Tracker
        </h1>
        <button className="btn" onClick={addNewHabitTracker}>
          Add new habit +
        </button>
      </div>
      <div className="habit-trackers-container">
        {habitTrackers.map((tracker) => (
          <div key={tracker.id} className="habit-tracker-card">
            <h1 style={{ marginBottom: "20px" }}>{tracker.name}</h1>
            <HabitTracker
              handleHabitDelete={handleHabitDelete}
              id={tracker.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
