import { useState } from "react";
import DisplayOptions from "../components/DisplayOptions";
import StaffSelector from "../components/StaffSelector";
import MonthTimeSelector from "../components/MonthClockInOut/MonthTimeSelector";
import MonthClockInOut from "../components//MonthClockInOut/MonthClockInOut";
import WeekClockInOut from "../components/WeekClockInOut/WeekClockInOut";
import WeekTimeSelector from "../components/WeekClockInOut/WeekTimeSelector";

const StaffManagement = () => {
  const [selectedDisplay, setSelectDisplay] = useState("MONTH");
  const [displayTime, setDisplayTime] = useState(
    "2023-01-15T09:00:00.000+00:00"
  );
  const [weekNumber, setWeekNumber] = useState(0);
  const handleDisplayOption = (option) => {
    setSelectDisplay(option);
  };

  return (
    <div className="flex w-full text-center justify-center ">
      <div className="bg-gray-50 mt-32">
        <div className="flex flex-row justify-between items-center p-4">
          <h1 className="text-blue-800 font-semibold text-4xl">
            Staff Management
          </h1>
        </div>
        <div className="flex flex-row justify-between items-center p-4">
          <div className="flex flex-row items-center">
            <StaffSelector />
          </div>
          <div className="flex flex-row items-center">
            <DisplayOptions
              display={selectedDisplay}
              handleDisplayOption={handleDisplayOption}
            />
          </div>
        </div>
        <div className="flex flex-col p-4">
          {selectedDisplay === "MONTH" && (
            <>
              <div className="flex flex-row w-full ">
                <MonthTimeSelector
                  displayTime={displayTime}
                  setDisplayTime={setDisplayTime}
                />
              </div>
              <div className="">
                <MonthClockInOut
                  type={selectedDisplay}
                  displayTime={displayTime}
                />
              </div>
            </>
          )}
          {selectedDisplay === "WEEK" && (
            <>
              <div className="flex flex-row w-full ">
                <WeekTimeSelector
                  displayTime={displayTime}
                  setDisplayTime={setDisplayTime}
                  weekNumber={weekNumber}
                  setWeekNumber={setWeekNumber}
                />
              </div>
              <div className="">
                <WeekClockInOut
                  weekNumber={weekNumber}
                  type={selectedDisplay}
                  displayTime={displayTime}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default StaffManagement;
