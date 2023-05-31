const ChoooseProducts = () => {
  return (
    <div className="flex flex-row justify-between items-center p-4">
      <div className="flex flex-row items-center">
        <div className="flex flex-col">
          <label className="text-blue-800 font-semibold ml-2">
            Chooose Products
          </label>
          <select className="p-5  font-medium rounded-lg bg-blue-20 border border-blue-700 text-blue-800 m-2">
            <option value="name">Sort Products By</option>
            <option value="age">Packing</option>
            <option value="age">Title</option>
            <option value="salary">Code</option>
            <option value="salary">Expiry Date</option>
            <option value="salary">Qty</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <input
          type="text"
          placeholder="Search Products"
          className="px-1 mt-5 text-sm rounded-md bg-blue-100 border border-blue-800 text-blue-700 p-2 placeholder-blue-700"
        />
      </div>
    </div>
  );
};
export default ChoooseProducts;
