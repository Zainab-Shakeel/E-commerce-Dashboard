import App from "../App";
import React from "react";
import { useState, useEffect } from "react";

function Orders() {

    const [orders, setOrders] = useState([
        {
            id: 1,
            customerName: 'Zainab',
            date: '2025-02-12',
            total: 2000,
            status: 'Shipped',
        },
        {
            id: 2,
            customerName: 'Fatima',
            date: '2025-03-31',
            total: 12000.34,
            status: 'Pending',
        },
        {
            id: 3,
            customerName: 'Rahmat',
            date: '2025-12-24',
            total: 5420.332,
            status: 'Delivered',
        }
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);

    const [viewOrder, setViewOrder] = useState(null);
    const [showViewModal, setShowViewModal] = useState(false);

    const [editOrder, setEditOrder] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    const [newOrder, setNewOrder] = useState({
        orderId: '',
        customerName: '',
        date: '',
        total: '',
        status: '',
    })

    const handleViewclick = (order) => {
        setViewOrder(order);
        setShowViewModal(true);
    }

    const handleEditClick = (order) => {
        setEditOrder(order);
        setShowEditModal(true);
    }

    const handleDelete = (id) =>{
        const confirmDelete= window.confirm("Are you sure you want to delete this order?");
        if(confirmDelete){
            setOrders(orders.filter((order) => order.id !== id));
        }
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Orders</h1>
            <div className="flex items-center justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search order..."
                    className="border px-3 py-2 rounded w-1/3"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    onClick={() => setShowAddModal(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    + Add Order
                </button>
            </div>
            <div className="bg-white text-black overflow-x-auto rounded shadow">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-gray-300">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Orders ID</th>
                            <th className="px-6 py-4 font-semibold">Customer Name</th>
                            <th className="px-6 py-4 font-semibold whitespace-nowrap w-40">Date</th>
                            <th className="px-6 py-4 font-semibold">Total</th>
                            <th className="px-6 py-4 font-semibold">Status</th>
                            <th className="px-6 py-4 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.filter((order) => order.customerName.toLowerCase().includes(searchTerm.toLowerCase())).map((order) => (
                            <tr key={order.id} className="border">
                                <td className="px-6 py-4">{order.id}</td>
                                <td className="px-6 py-4">{order.customerName}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                                <td className="px-6 py-4">${order.total}</td>
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
                                <td className="px-6 py-4 flex gap-2 text-white">
                                    <button onClick={() => handleViewclick(order)}>View</button>
                                    <button onClick={() => handleEditClick(order)}>Edit</button>
                                    <button onClick={() => handleDelete(order.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

            {showAddModal && (
                <div className="text-black fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Add new Order</h2>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const newId = orders.length ? orders[orders.length - 1].id + 1 : 1;
                                const orderToAdd = {
                                    ...newOrder,
                                    id: newId,
                                    total: parseFloat(newOrder.total),
                                    // stock: parseInt(newProduct.stock),
                                }

                                setOrders([...orders, orderToAdd]);
                                setShowAddModal(false);
                                setNewOrder({ customerName: '', date: '', total: '', status: '' });

                            }}
                            className="space-y-4"
                        >
                            <div>
                                <label><strong>Customer Name </strong></label>
                                <input
                                    type="text"
                                    className="w-full border px-3 py-2 rounded"
                                    value={newOrder.customerName}
                                    onChange={
                                        (e) => {
                                            setNewOrder({ ...newOrder, customerName: e.target.value })
                                        }
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label><strong>Date </strong></label>
                                <input
                                    type="Date"
                                    className="w-full border px-3 py-2 rounded"
                                    value={newOrder.date}
                                    onChange={
                                        (e) => {
                                            setNewOrder({ ...newOrder, date: e.target.value })
                                        }
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label><strong>Total </strong></label>
                                <input
                                    type="number"
                                    className="w-full border px-3 py-2 rounded"
                                    value={newOrder.total}
                                    min="0"
                                    onChange={
                                        (e) => {
                                            setNewOrder({ ...newOrder, total: e.target.value })
                                        }
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label><strong>Status </strong></label>
                                <select
                                    className="w-full border px-3 py-2 rounded"
                                    value={newOrder.status}
                                    onChange={(e) => {
                                        setNewOrder({ ...newOrder, status: e.target.value })
                                    }}
                                    required
                                >
                                    <option value="">Select status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Delivered">Delivered</option>
                                </select>

                            </div>
                            <div className="text-white flex justify-end gap-3 p-2">
                                <button className="text-white px-4 py-2" type="button" onClick={() => setShowAddModal(false)}>
                                    Cancel
                                </button>
                                <button className="text-white px-4 py-2" type="submit">
                                    Add Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            )}

            {showViewModal && viewOrder && (
                <div className="text-black fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Order Details</h2>
                        <div className="space-y-2">
                            <p><strong>Order ID: </strong>{viewOrder.id}</p>
                            <p><strong>Customer Name: </strong>{viewOrder.customerName}</p>
                            <p><strong>Date: </strong>{viewOrder.date}</p>
                            <p><strong>Total: </strong>${viewOrder.total}</p>
                            <p>
                                <strong>Status: </strong>
                                <span className={
                                    viewOrder.status === 'Pending' ? 'text-red-800 font-bold' :
                                        viewOrder.status === 'Shipped' ? 'text-blue-800 font-bold' :
                                            viewOrder.status === 'Delivered' ? 'text-green-800 font-bold' :
                                                'text-gray-800'
                                }>
                                    {viewOrder.status}
                                </span>
                            </p>

                        </div>


                        <div className="mt-4 flex justify-end">
                            <button className="text-white px-4 py-2" type="button" onClick={() => setShowViewModal(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showEditModal && (
                <div className="text-black fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Edit Orders</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setOrders((prev) =>
                                    prev.map((p) =>
                                        p.id == editOrder.id ? editOrder : p
                                    )
                                )
                                setShowEditModal(false);
                            }}
                            className="space-y-4"
                        >
                            <div>
                                <label className="block mb-1 font-medium">Customer Name </label>
                                <input className="w-full border px-3 py-2 rounded" type="text" value={editOrder.customerName} onChange={(e) => setEditOrder({ ...editOrder, customerName: e.target.value })} />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Date</label>
                                <input className="w-full border px-3 py-2 rounded" type="date" value={editOrder.date} onChange={(e) => setEditOrder({ ...editOrder, date: e.target.value })} />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Total</label>
                                <input className="w-full border px-3 py-2 rounded" type="number" min="0" value={editOrder.total} onChange={(e) => setEditOrder({ ...editOrder, total: e.target.value })} />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Status</label>
                                <select className="w-full border px-3 py-2 rounded" value={editOrder.status} onChange={(e) => setEditOrder({ ...editOrder, status: e.target.value })}>
                                    <option value="">Select status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Delivered">Delivered</option>
                                </select>
                            </div>
                            <div className="text-white flex justify-end gap-3 p-2">
                                <button className="px-4 py-2 rounded" type="buton" onClick={() => setShowEditModal(false)}>
                                    Cancel
                                </button>
                                <button type="submit" className="px-4 py-2 rounded">
                                    Save
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </div>
    )
}

export default Orders