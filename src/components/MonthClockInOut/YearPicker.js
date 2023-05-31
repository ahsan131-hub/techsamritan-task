import React from "react";
import { useState } from "react";
const YearPicker = ({ onChange }) => {
  const [selectedYear, setSelectedYear] = useState("2016");

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    onChange(e.target.value);
  };

  const generateYearOptions = () => {
    const startYear = 2000;
    const endYear = 2099;
    const years = [];

    for (let year = startYear; year <= endYear; year++) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }

    return years;
  };

  return (
    <div className="relative">
      <select
        className="appearance-none w-2 bg-transparent px-2 py-1 pr-5 rounded-md text-black  hover:rounded-md focus:outline-none focus:border-blue-600"
        value={selectedYear}
        onChange={handleYearChange}
      >
        {generateYearOptions()}
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="absolute w-4 h-4 right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
};

export default YearPicker;
