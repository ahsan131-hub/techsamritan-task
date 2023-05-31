import React, { useState } from "react";
import Button from "../Button";

const AdjustmentReason = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [textValue, setTextValue] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Selected option:", selectedOption);
    console.log("Text value:", textValue);
  };

  return (
    <form className="p-4  ">
      <div className="flex justify-between">
        <div className="m-10 w-1/4">
          <div className="mb-4 flex justify-between">
            <div className="flex items-center justify-between  ">
              <span className="font-semibold text-xl text-gray-600">
                Breakage/Waste
              </span>
            </div>
            <div className="">
              <input
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
                className=" px-2 py-2 w-7 h-7 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-4 flex justify-between">
            <div className="flex items-center">
              <span className="font-semibold text-xl text-gray-600">
                {" "}
                Short Expiry Stock
              </span>
            </div>
            <div className="">
              <input
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
                className=" px-2 py-2 w-7 h-7 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-4 flex justify-between">
            <div className="flex items-center">
              <span className="font-semibold text-xl text-gray-600">
                Other (Provide Reason)
              </span>
            </div>
            <div className="">
              <input
                type="radio"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
                className=" px-2 py-2 w-7 h-7 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="m-10 w-1/2">
          <textarea
            value={textValue}
            onChange={handleTextChange}
            className="w-full h-48 p-2 border border-blue-900 rounded-lg focus:outline-none focus:border-blue-700  placeholder-blue-900 "
            placeholder="Notes"
          ></textarea>
        </div>
      </div>
      <div className="justify-end items-end text-end mr-10 ">
        <button
          type="submit"
          className="px-5 py-4 m-1 rounded-lg bg-blue-800 border border-blue-700 text-white"
        >
          Proceed to Summary
        </button>
      </div>
    </form>
  );
};
export default AdjustmentReason;
