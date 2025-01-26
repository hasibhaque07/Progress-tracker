import React from "react";
import "./YearProgress.css";

const YearProgress = () => {
  //   const today = new Date();
  //   const year = today.getFullYear();
  //   const isLeapYear = (year) => {
  //     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  //   };
  //   const totalDays = isLeapYear(year) ? 366 : 365;

  //   console.log(`Total days in ${year}: ${totalDays}`);

  //   const startOfYear = new Date(year, 0, 1);
  //   const daysPassed = Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24));
  //   console.log(daysPassed);
  //   const percentage = (100 * daysPassed) / totalDays;
  //   console.log(percentage + " %");

  const today = new Date();
  const year = today.getFullYear();
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };
  const totalDays = isLeapYear(year) ? 366 : 365;

  const startOfYear = new Date(year, 0, 1);
  const daysPassed = Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24));
  const millisecondsInYear = totalDays * 24 * 60 * 60 * 1000;
  const millisecondsPassed = today - startOfYear;
  const percentage = (100 * millisecondsPassed) / millisecondsInYear;

  //console.log(`Total days in ${year}: ${totalDays}`);
  // console.log(
  //   `Milliseconds passed since January 1, ${year}: ${millisecondsPassed}`
  // );
  // console.log(`Year progress: ${percentage.toFixed(2)} %`);

  return (
    <div className="year-progress-container">
      <h1 className="heading" style={{ marginTop: "30px" }}>
        {year} is {percentage.toFixed(2)}% Complete
      </h1>
      <p style={{ marginBottom: "30px" }}>Days Passed: {daysPassed} days</p>
      <div className="year-progress-bar-container">
        <div
          className="year-progress-bar"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default YearProgress;
