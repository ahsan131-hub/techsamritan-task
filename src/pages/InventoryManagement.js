import { useEffect } from "react";
import Button from "../components/Button";
import ChoooseProducts from "../components/Inventory/ChooseProducts";
import ProductsTable from "../components/Inventory/ProductsTable";
import AdjustmentReason from "../components/Inventory/AdjustmentReason";

import { useState } from "react";
const InventoryManagement = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://rma2levr48.execute-api.us-east-1.amazonaws.com/dev/inventory?locationId=LOC%237bb65894-4e56-7p98-1q44-w456i50b47j0"
    )
      .then((response) => response.json())
      .then((resData) => {
        console.log(resData);
        setData(resData?.data?.Items || []);
      });
  }, []);

  return (
    <div className="flex justify-center ">
      <div className=" bg-gray-50">
        <div className="flex flex-row justify-between items-center p-4">
          <h1 className="text-blue-800 font-semibold text-4xl">
            Inventory Management
          </h1>
          <div>
            <Button handlClick={() => {}} label="Track Adjustment History" />
            <Button handlClick={() => {}} label="Withdraw Expiry Stock" />
          </div>
        </div>
        <ChoooseProducts />

        <div className="flex flex-col p-4 rounded-md">
          <ProductsTable data={data} />
        </div>

        <div className="flex flex-col p-4 rounded-md">
          <div className="flex flex-row justify-between items-center p-4">
            <h1 className="text-blue-800 font-semibold text-3xl">
              Provide Adjustment Reason
            </h1>
          </div>
          <AdjustmentReason />
        </div>
      </div>
    </div>
  );
};
export default InventoryManagement;
