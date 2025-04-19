import App from "../App";
import React from "react";
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
      <ul className="space-y-4">
        <Link to="/" className="block py-2 px-4 hover:bg-gray-100 rounded">
          Dashboard
        </Link>
        <Link to="/products" className="block py-2 px-4 hover:bg-gray-100 rounded">
          Products
        </Link>
        <Link to="/orders" className="block py-2 px-4 hover:bg-gray-100 rounded">
          Orders
        </Link>
        <li className="hover:bg-gray-700 p-2 rounded">Customers</li>
        <li className="hover:bg-gray-700 p-2 rounded">Analytics</li>
      </ul>
    </div>
  )
}

export default Sidebar;