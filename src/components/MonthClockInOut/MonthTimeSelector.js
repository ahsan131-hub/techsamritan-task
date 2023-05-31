import dayjs from "dayjs";
import ArrowButton from "../Arrowbutton";
import YearPicker from "./YearPicker";

const MonthTimeSelector = ({ displayTime, setDisplayTime }) => {
  const handlePrevClick = () => {
    setDisplayTime(dayjs(displayTime).subtract(1, "month"));
    console.log("month");
  };

  const handleNextClick = () => {
    setDisplayTime(dayjs(displayTime).add(1, "month"));
    console.log("preve");
  };
  const handleYearChange = (year) => {
    setDisplayTime(dayjs().year(year));
  };
  return (
    <div className="flex flex-row w-full justify-between border border-blue-400 bg-blue-50 rounded-md h-10 px-2 ">
      <div className="flex flex-row items-center">
        <ArrowButton direction="prev" onClick={handlePrevClick} />
      </div>
      <div className="flex flex-row items-center">
        <label>{dayjs(displayTime).format("MMMM,YYYY")}</label>
        <YearPicker direction="down" onChange={handleYearChange} />
      </div>
      <div className="flex flex-row items-center">
        <ArrowButton direction="next" onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default MonthTimeSelector;
