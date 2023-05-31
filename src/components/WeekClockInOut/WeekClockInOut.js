import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import dummyData from "../../dummy-data.json";
const isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(isBetween);

function splitArray(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
}

const WeekClockInOut = ({ displayTime, weekNumber }) => {
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    const year = dayjs(displayTime).format("YYYY");
    const month = dayjs(displayTime).format("MMMM");
    const yearData = dummyData.inOutTimes[year];
    let monthData = [];
    if (yearData) {
      monthData = yearData.filter((item) => item.month === month);
      setWeeks(splitArray(monthData[0]?.days || [], 7));
    }
  }, [displayTime]);

  return (
    <div className="grid grid-cols-1  border-1 border-blue-800  rounded-md mt-5  overflow-auto  scrollbar-thumb-blue-500 scrollbar-track-gray-200 scrollbar-thin">
      <table className="w-full ">
        <thead>
          <tr className="">
            {weeks[0]?.map((date, index) => (
              <th key={index} className="border border-gray-300 p-2 bg-blue-50">
                {dayjs(date.date).format("ddd")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          <tr className="h-24">
            {weeks[weekNumber]?.map((date, index) => (
              <td key={index} className="border border-gray-300  ">
                <div className="flex flex-col items-center bg-blue-50">
                  <div className="flex flex-row items-center border-b border-gray-300">
                    <label className="text-xs text-gray-500">
                      {`IN  ${dayjs(date.in).format("h:mm A")}`}
                    </label>
                  </div>
                  <div className="flex flex-row items-center">
                    <label className="text-xs text-gray-500">
                      {`OUT  ${dayjs(date.out).format("h:mm A")}`}
                    </label>
                  </div>
                  <div className="flex flex-row items-center">
                    <label className="text-xs text-gray-500">
                      {`TOTAL HOURS  ${dayjs(date.out).diff(
                        dayjs(date.in),
                        "hour"
                      )} Hours`}
                    </label>
                  </div>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeekClockInOut;
