import dayjs from "dayjs";
import ArrowButton from "../Arrowbutton";
import WeekPicker from "./WeekPicker";

const WeekTimeSelector = ({
  weekNumber,
  setWeekNumber,
  setDisplayTime,
  displayTime,
}) => {
  const handlePrevClick = () => {
    setWeekNumber(weekNumber - 1);
  };

  const handleNextClick = () => {
    setWeekNumber(weekNumber + 1);
  };
  const handleChangeWeek = (date) => {
    setDisplayTime(date);
  };
  return (
    <div className="flex flex-row w-full justify-between border border-blue-400 bg-blue-50 rounded-md h-10 px-2 ">
      <div className="flex flex-row items-center">
        <ArrowButton direction="prev" onClick={handlePrevClick} />
      </div>
      <div className="flex flex-row items-center">
        <label>
          {dayjs().day() === weekNumber ? "This Week" : "Week " + dayjs().day()}
        </label>
        <WeekPicker direction="down" onChange={handleChangeWeek} />
      </div>
      <div className="flex flex-row items-center">
        <ArrowButton direction="next" onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default WeekTimeSelector;
