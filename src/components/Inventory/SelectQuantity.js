const SelectQuantity = ({ quantity, setQuantity }) => {
  const handleIncrement = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="flex flex-row justify-center items-center">
      <button
        onClick={handleDecrement}
        className=" text-white bg-blue-800 hover:bg-blue-900 px-2 rounded-full"
      >
        -
      </button>
      <span className="mx-2 border border-gray-300 bg-white rounded-full px-4 text-gray-600">
        {quantity}
      </span>
      <button
        onClick={handleIncrement}
        className=" text-white bg-blue-800 hover:bg-blue-900 px-2 rounded-full"
      >
        +
      </button>
    </div>
  );
};
export default SelectQuantity;
