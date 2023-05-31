import RadioButton from "../components/RadioButton";

const DisplayOptions = ({ display, handleDisplayOption }) => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-row justify-between items-center pt-10">
        <div className="flex flex-row items-center">
          <RadioButton
            label="MONTH"
            checked={display === "MONTH"}
            onChange={() => handleDisplayOption("MONTH")}
          />
          <RadioButton
            label="WEEK"
            checked={display === "WEEK"}
            onChange={() => handleDisplayOption("WEEK")}
          />
          <RadioButton
            label="DAY"
            checked={display === "DAY"}
            onChange={() => handleDisplayOption("DAY")}
          />
        </div>
      </div>
    </div>
  );
};
export default DisplayOptions;
