import Button from "../components/Button";
import { useState } from "react";
import DisplayOptions from "../components/DisplayOptions";
import StaffSelector from "../components/StaffSelector";
import TimeSelector from "../components/TimeSelector";
import dayjs from "dayjs";
const StaffManagement = () => {
  const [selectedDisplay, setSelectDisplay] = useState("MONTH");
  const [displayTime, setDisplayTime] = useState(
    "2023-01-15T09:00:00.000+00:00"
  );
  const handleDisplayOption = (option) => {
    setSelectDisplay(option);
  };

  return (
    <div className=" w-full flex flex-row">
      <div className="w-full bg-gray-200">
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
          <div className="flex flex-row w-full ">
            <TimeSelector
              displayTime={displayTime}
              setDisplayTime={setDisplayTime}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default StaffManagement;
