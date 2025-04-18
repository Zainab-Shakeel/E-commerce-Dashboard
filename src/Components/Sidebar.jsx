import App from "../App";
import React from "react";

function Sidebar(){
    return(
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
            <ul className="space-y-4">
                <li className="hover:bg-gray-700 p-2 rounded">Dashboard</li>
                <li className="hover:bg-gray-700 p-2 rounded">Products</li>
                <li className="hover:bg-gray-700 p-2 rounded">Orders</li>
                <li className="hover:bg-gray-700 p-2 rounded">Customers</li>
                <li className="hover:bg-gray-700 p-2 rounded">Analytics</li>
            </ul>
        </div>
    )
}

export default Sidebar