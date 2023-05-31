import { useState } from "react";
import SelectQuantity from "./SelectQuantity";
const ProductItem = ({ item, index }) => {
  const [quantity, setQuantity] = useState(0);
  const handleIncrement = () => {
    if (quantity < 20) {
      setQuantity(quantity - 1);
    }
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity + 1);
    }
  };
  return (
    <tr key={index} className="border-b border-gray-400">
      <td className="items-center px-10 py-2 w-2.5">
        <input type="checkbox" />
      </td>
      <td className=" text-start px-4 py-2">{item.productName}</td>
      <td className=" text-start px-4 py-2">{item.mfgName}</td>
      <td className=" text-start px-4 py-2">{item.barcode}</td>
      <td className=" text-start px-4 py-2">{item.expiryDate}</td>
      <td className=" text-start px-4 py-2">{item.productQTY}</td>
      <td className=" text-start px-4 py-2">
        <SelectQuantity quantity={quantity} setQuantity={setQuantity} />
      </td>
    </tr>
  );
};
export default ProductItem;
