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
      <div>
        Home
        <Link to={"/inventory"} className="text-blue-900 m-2">
          Inventory Management
        </Link>
        <Link to={"/staff"} className="text-blue-900 m-2">
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
