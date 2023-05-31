import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import dummyData from "../../dummy-data.json";
import DayInOut from "./DayInOut";

const MonthClockInOut = ({ displayTime }) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const year = dayjs(displayTime).format("YYYY");
    const month = dayjs(displayTime).format("MMMM");
    const yearData = dummyData.inOutTimes[year];
    let monthData = [];

    if (yearData) {
      monthData = yearData.filter((item) => item.month === month);
      setDays(monthData[0]?.days || []);
    }
  }, [displayTime]);

  return (
    <div className="grid grid-cols-1 h-64 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 overflow-auto  scrollbar-thumb-blue-500 scrollbar-track-gray-200 scrollbar-thin">
      {days.map((day, index) => (
        <DayInOut key={index} day={day} />
      ))}
    </div>
  );
};

export default MonthClockInOut;
