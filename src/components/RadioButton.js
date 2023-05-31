import React from "react";

const RadioButton = ({ label, checked, onChange }) => (
  <label className="inline-flex items-center cursor-pointer">
    <input
      type="radio"
      className="hidden"
      checked={checked}
      onChange={onChange}
    />
    <span
      className={`px-4 py-2 m-1 rounded-md ${
        checked
          ? "bg-blue-800 text-white"
          : " text-blue-800 hover:bg-blue-800 border border-blue-700  hover:text-white"
      }`}
    >
      {label}
    </span>
  </label>
);

export default RadioButton;
