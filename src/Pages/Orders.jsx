import App from "../App";
import React from "react";
import { useState, useEffect } from "react";

function Orders() {

    const [orders, setOrders] = useState([
        {
            id: 1,
            customerName: 'Zainab',
            date: '12-2-2025',
            total: 2000,
            status: 'Shipped',
        },
        {
            id: 2,
            customerName: 'Fatima',
            date: '31-3-2025',
            total: 12000.34,
            status: 'Pending',
        },
        {
            id: 3,
            customerName: 'Rahmat',
            date: '22-4-2025',
            total: 5420.332,
            status: 'Delivered',
        }
    ]);
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Order</h1>
            <div className="flex items-center justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search order..."
                    className="border px-3 py-2 rounded w-1/3"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="bg-white text-black overflow-x-auto rounded shadow">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-gray-300">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Orders ID</th>
                            <th className="px-6 py-4 font-semibold">Customer Name</th>
                            <th className="px-6 py-4 font-semibold">Date</th>
                            <th className="px-6 py-4 font-semibold">Total</th>
                            <th className="px-6 py-4 font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {orders.filter((order) => order.customerName.toLowerCase().includes(searchTerm.toLowerCase())).map((order) => (
                            <tr key={order.id} className="border">
                                <td className="px-6 py-4">{order.id}</td>
                                <td className="px-6 py-4">{order.customerName}</td>
                                <td className="px-6 py-4">{order.date}</td>
                                <td className="px-6 py-4">{order.total}</td>
                                <td className="px-6 py-3">
                                    <span
                                        className={
                                            `px-2 py-1 rounded-full text-3xs font-bold
                                            ${order.status === 'Pending' ? ' text-red-800' :
                                                order.status === 'Shipped' ? ' text-blue-800' :
                                                    order.status === 'Delivered' ? ' text-green-800' :
                                                        ' text-gray-800'
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Orders