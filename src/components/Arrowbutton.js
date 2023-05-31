import React from "react";

const ArrowButton = ({ direction, onClick }) => {
  let icon = null;

  if (direction === "prev") {
    icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    );
  } else {
    icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    );
  }

  return (
    <button
      className={`flex items-center justify-center w-8 h-8  text-black ${"hover:bg-blue-800 hover:text-white hover:rounded-md"} `}
      onClick={() => onClick()}
    >
      {icon}
    </button>
  );
};

export default ArrowButton;
