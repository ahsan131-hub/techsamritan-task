import { useEffect, useState } from "react";
import SelectQuantity from "./SelectQuantity";
import ProductItem from "./ProductItem";
import Pagination from "./Pagination";

const ProductsTable = ({ data }) => {
  const [paginatedData, setPaginatedData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  useEffect(() => {
    setPaginatedData(data.slice((page - 1) * rowsPerPage, page * rowsPerPage));
  }, [data, page, rowsPerPage]);

  return (
    <div className="w-full bg-indigo-50  rounded-md">
      <table className="w-full">
        <thead className="justify-start items-start border-b border-gray-400">
          <tr className="justify-start items-start ">
            <th className="text-start py-2"></th>
            <th className="text-start py-2">Title</th>
            <th className="text-start py-2">Packing</th>
            <th className="text-start py-2">Code</th>
            <th className="text-start py-2">Expiry Date</th>
            <th className="text-start py-2">Qty on Hand</th>
            <th className="text-start py-2"></th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </tbody>
      </table>
      <div className="flex flex-row justify-end  ">
        <Pagination
          data={data}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      </div>
    </div>
  );
};
export default ProductsTable;
