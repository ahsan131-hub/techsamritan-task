import dayjs from "dayjs";
const DayInOut = ({ index, day }) => {
  return (
    <div
      key={index}
      className=" rounded-lg shadow-md p-4  text-center flex h-24 bg-blue-50"
    >
      <div className="h-full bg-blue-900 p-1 w-1/4 text-white rounded">
        <div>
          <span className="font-extrabold text-3xl">
            {dayjs(day.date).format("DD")}
          </span>
        </div>
        <div>
          <span className="font-bold text-xl">
            {dayjs(day.date).format("ddd")}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start  w-3/4 pl-4">
        <div className="flex flex-row justify-start items-center">
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.24998 0.666626C6.30506 0.666626 4.4398 1.43924 3.06453 2.81451C1.68926 4.18978 0.916647 6.05504 0.916647 7.99996C0.916647 9.94488 1.68926 11.8101 3.06453 13.1854C4.4398 14.5607 6.30506 15.3333 8.24998 15.3333C10.1949 15.3333 12.0602 14.5607 13.4354 13.1854C14.8107 11.8101 15.5833 9.94488 15.5833 7.99996C15.5833 6.05504 14.8107 4.18978 13.4354 2.81451C12.0602 1.43924 10.1949 0.666626 8.24998 0.666626ZM8.24998 2.49996C9.70867 2.49996 11.1076 3.07942 12.1391 4.11087C13.1705 5.14232 13.75 6.54127 13.75 7.99996C13.75 9.45865 13.1705 10.8576 12.1391 11.889C11.1076 12.9205 9.70867 13.5 8.24998 13.5C6.79129 13.5 5.39234 12.9205 4.36089 11.889C3.32944 10.8576 2.74998 9.45865 2.74998 7.99996C2.74998 6.54127 3.32944 5.14232 4.36089 4.11087C5.39234 3.07942 6.79129 2.49996 8.24998 2.49996ZM9.16665 4.33329H7.79165V7.79829L5.65581 9.93412L6.62748 10.9058L9.16665 8.36663V4.33329ZM20.1666 13.5C20.4098 13.5 20.6429 13.4034 20.8148 13.2315C20.9867 13.0596 21.0833 12.8264 21.0833 12.5833C21.0833 12.3402 20.9867 12.107 20.8148 11.9351C20.6429 11.7632 20.4098 11.6666 20.1666 11.6666H16.6558C16.3716 12.3175 16.005 12.9316 15.5833 13.5H20.1666ZM19.25 8.91663C19.4931 8.91663 19.7263 8.82005 19.8982 8.64814C20.0701 8.47623 20.1666 8.24307 20.1666 7.99996C20.1666 7.75684 20.0701 7.52369 19.8982 7.35178C19.7263 7.17987 19.4931 7.08329 19.25 7.08329H17.3708L17.4166 7.99996L17.3708 8.91663H19.25ZM18.3333 4.33329C18.5764 4.33329 18.8096 4.23672 18.9815 4.06481C19.1534 3.8929 19.25 3.65974 19.25 3.41663C19.25 3.17351 19.1534 2.94035 18.9815 2.76844C18.8096 2.59654 18.5764 2.49996 18.3333 2.49996H15.5833C16.005 3.06829 16.3716 3.68246 16.6558 4.33329H18.3333Z"
              fill="#003087"
            />
          </svg>
          <span className="text-gray-500 text-xs mr-5">
            {dayjs(day.in).format("h:mm A")}
          </span>
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25 0.666626C6.30507 0.666626 4.43981 1.43924 3.06454 2.81451C1.68928 4.18978 0.916662 6.05504 0.916662 7.99996C0.916662 9.94488 1.68928 11.8101 3.06454 13.1854C4.43981 14.5607 6.30507 15.3333 8.25 15.3333C10.1949 15.3333 12.0602 14.5607 13.4354 13.1854C14.8107 11.8101 15.5833 9.94488 15.5833 7.99996C15.5833 6.05504 14.8107 4.18978 13.4354 2.81451C12.0602 1.43924 10.1949 0.666626 8.25 0.666626ZM8.25 2.49996C9.70869 2.49996 11.1076 3.07942 12.1391 4.11087C13.1705 5.14232 13.75 6.54127 13.75 7.99996C13.75 9.45865 13.1705 10.8576 12.1391 11.889C11.1076 12.9205 9.70869 13.5 8.25 13.5C6.7913 13.5 5.39236 12.9205 4.36091 11.889C3.32946 10.8576 2.75 9.45865 2.75 7.99996C2.75 6.54127 3.32946 5.14232 4.36091 4.11087C5.39236 3.07942 6.7913 2.49996 8.25 2.49996ZM9.16666 4.33329H7.79166V7.79829L5.65583 9.93412L6.62749 10.9058L9.16666 8.36663V4.33329ZM20.1667 13.5C20.4098 13.5 20.6429 13.4034 20.8148 13.2315C20.9868 13.0596 21.0833 12.8264 21.0833 12.5833C21.0833 12.3402 20.9868 12.107 20.8148 11.9351C20.6429 11.7632 20.4098 11.6666 20.1667 11.6666H16.6558C16.3717 12.3175 16.005 12.9316 15.5833 13.5H20.1667ZM19.25 8.91663C19.4931 8.91663 19.7263 8.82005 19.8982 8.64814C20.0701 8.47623 20.1667 8.24307 20.1667 7.99996C20.1667 7.75684 20.0701 7.52369 19.8982 7.35178C19.7263 7.17987 19.4931 7.08329 19.25 7.08329H17.3708L17.4167 7.99996L17.3708 8.91663H19.25ZM18.3333 4.33329C18.5764 4.33329 18.8096 4.23672 18.9815 4.06481C19.1534 3.8929 19.25 3.65974 19.25 3.41663C19.25 3.17351 19.1534 2.94035 18.9815 2.76844C18.8096 2.59654 18.5764 2.49996 18.3333 2.49996H15.5833C16.005 3.06829 16.3717 3.68246 16.6558 4.33329H18.3333Z"
              fill="#003087"
            />
          </svg>
          <span className="text-gray-500 text-xs">
            {dayjs(day.out).format("h:mm A")}
          </span>
        </div>
        <div className="flex flex-col mt-5 ">
          <span className="text-gray-800 font-bold text-xs">
            <span className="text-blue-800 pr-2">Total Hours = </span>
            {dayjs(day.out).diff(dayjs(day.in), "hour")} Hours
          </span>
        </div>
      </div>
    </div>
  );
};
export default DayInOut;