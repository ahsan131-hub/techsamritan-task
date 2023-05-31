import React from "react";
import { useState } from "react";
const WeekPicker = ({ onChange }) => {
  const handleChangeWeek = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type="date"
        className="bg-transparent appearance-none w-11 px-2 py-1 pr-5 rounded-md text-black  hover:rounded-md focus:outline-none focus:border-blue-600"
        onChange={handleChangeWeek}
      ></input>
    </div>
  );
};

export default WeekPicker;
