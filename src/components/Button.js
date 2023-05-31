const Button = ({ label, handlClick }) => {
  return (
    <button
      className="px-4 py-2 rounded-md hover:bg-blue-800 border border-blue-700 text-blue-800 hover:text-white"
      onClick={handlClick}
    >
      {label}
    </button>
  );
};
export default Button;
