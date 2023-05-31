import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./index.css";
import StaffManagement from "./pages/StaffManagement";
import InventoryManagement from "./pages/InventoryManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="m-10">
        <Link
          to={"/inventory"}
          className="px-5 py-4 m-1 rounded-lg bg-blue-800 border border-blue-700 text-white"
        >
          Inventory Management
        </Link>
        <Link
          to={"/staff"}
          className="px-5 py-4 m-1 rounded-lg bg-blue-800 border border-blue-700 text-white"
        >
          Staff Management
        </Link>
      </div>
    ),
  },
  {
    path: "/staff",
    element: <StaffManagement />,
  },
  {
    path: "/inventory",
    element: <InventoryManagement />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
