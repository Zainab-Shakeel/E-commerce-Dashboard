import App from "../App";
import React from "react";
import { useState, useEffect } from "react";

function Customers(){

    const [customers, setCustomers] = useState([
        {
            id: 1,
            customerName: 'Zainab',
            email: 'zainab@gmail.com',
            phone: '01234567890',
            address: '123 Main St, City, Country',
            totalOrders: 5,
        },
        {
            id: 2,
            customerName: 'Fatime',
            email: 'fatima@gmail.com',
            phone: '01234567990',
            address: '456 Elm St, City, Country',
            totalOrders: 2,
        },
        {
            id: 3,
            customerName: 'Rahmat',
            email: 'rahmat@gmail.com',
            phone: '01234569990',
            address: '789 Oak St, City, Country',
            totalOrders: 7,
        }
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);

    const [viewCustomer, setViewCustomer] = useState(null);
    const [showViewModal, setShowViewModal] = useState(false);

    const [editCustomer, setEditCustomer] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    const [newCustomer, setNewCustomer] = useState({
            id: '',
            customerName: '',
            email: '',
            phone: '',
            address: '',
            totalOrders: '',
    })

    const handleViewclick = (customer) => {
        setViewCustomer(customer);
        setShowViewModal(true);
    }

    const handleEditClick = (customer) => {
        setEditCustomer(customer);
        setShowEditModal(true);
    }

    const handleDelete = (id) =>{
        const confirmDelete= window.confirm("Are you sure you want to delete this cutomer information?");
        if(confirmDelete){
            setCustomers(customers.filter((customer) => customer.id !== id));
        }
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Customers</h1>
            <div className="flex items-center justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search customer..."
                    className="border px-3 py-2 rounded w-1/3"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    onClick={() => setShowAddModal(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    + Add Customer
                </button>
            </div>
            <div className="bg-white text-black overflow-x-auto rounded shadow">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-gray-300">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Customer ID</th>
                            <th className="px-6 py-4 font-semibold">Customer Name</th>
                            <th className="px-6 py-4 font-semibold whitespace-nowrap w-40">Email</th>
                            <th className="px-6 py-4 font-semibold">Phone</th>
                            <th className="px-6 py-4 font-semibold">Address</th>
                            <th className="px-6 py-4 font-semibold">Total Orders</th>
                            <th className="px-6 py-4 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.filter((customer) => customer.customerName.toLowerCase().includes(searchTerm.toLowerCase())).map((customer) => (
                            <tr key={customer.id} className="border">
                                <td className="px-6 py-4">{customer.id}</td>
                                <td className="px-6 py-4">{customer.customerName}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
                                <td className="px-6 py-4">${customer.phone}</td>
                                <td className="px-6 py-4">{customer.address}</td>
                                <td className="px-6 py-4">{customer.totalOrders}</td>
                                <td className="px-6 py-4 flex gap-2 text-white">
                                    <button onClick={() => handleViewclick(customer)}>View</button>
                                    <button onClick={() => handleEditClick(customer)}>Edit</button>
                                    <button onClick={() => handleDelete(customer.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showAddModal && (
                <div className="text-black fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Add new Customer</h2>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const newId = customers.length ? customers[customers.length - 1].id + 1 : 1;
                                const customerToAdd = {
                                    ...newCustomer,
                                    id: newId,
                                }

                                setCustomers([...customers, customerToAdd]);
                                setShowAddModal(false);
                                setNewCustomer({ customerName: '', email: '', phone: '', address: '', totalOrders: '' });

                            }}
                            className="space-y-4"
                        >
                            <div>
                                <label><strong>Customer Name </strong></label>
                                <input
                                    type="text"
                                    className="w-full border px-3 py-2 rounded"
                                    value={newCustomer.customerName}
                                    onChange={
                                        (e) => {
                                            setNewCustomer({ ...newCustomer, customerName: e.target.value })
                                        }
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label><strong>Email </strong></label>
                                <input
                                    type="email"
                                    className="w-full border px-3 py-2 rounded"
                                    value={newCustomer.email}
                                    onChange={
                                        (e) => {
                                            setNewCustomer({ ...newCustomer, email: e.target.value })
                                        }
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label><strong>Phone </strong></label>
                                <input
                                    type="text"
                                    className="w-full border px-3 py-2 rounded"
                                    value={newCustomer.phone}
                                    onChange={
                                        (e) => {
                                            setNewCustomer({ ...newCustomer, phone: e.target.value })
                                        }
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label><strong>Address </strong></label>
                                <input
                                    type="text"
                                    className="w-full border px-3 py-2 rounded"
                                    value={newCustomer.address}
                                    onChange={
                                        (e) => {
                                            setNewCustomer({ ...newCustomer, address: e.target.value })
                                        }
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label><strong>Total Orders </strong></label>
                                <input
                                    type="number"
                                    className="w-full border px-3 py-2 rounded"
                                    value={newCustomer.totalOrders}
                                    onChange={
                                        (e) => {
                                            setNewCustomer({ ...newCustomer, totalOrders: e.target.value })
                                        }
                                    }
                                    required
                                />
                            </div>
                            <div className="text-white flex justify-end gap-3 p-2">
                                <button className="text-white px-4 py-2" type="button" onClick={() => setShowAddModal(false)}>
                                    Cancel
                                </button>
                                <button className="text-white px-4 py-2" type="submit">
                                    Add Customer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            )}

            {showViewModal && viewCustomer && (
                <div className="text-black fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Customer Details</h2>
                        <div className="space-y-2">
                            <p><strong>Customer ID: </strong>{viewCustomer.id}</p>
                            <p><strong>Customer Name: </strong>{viewCustomer.customerName}</p>
                            <p><strong>Email: </strong>{viewCustomer.email}</p>
                            <p><strong>Phone: </strong>{viewCustomer.phone}</p>
                            <p><strong>Address: </strong>{viewCustomer.address}</p>
                            <p><strong>Total Orders: </strong>{viewCustomer.totalOrders}</p>

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
                        <h2 className="text-xl font-bold mb-4">Edit Customers</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setCustomers((prev) =>
                                    prev.map((p) =>
                                        p.id == editCustomer.id ? editCustomer : p
                                    )
                                )
                                setShowEditModal(false);
                            }}
                            className="space-y-4"
                        >
                            <div>
                                <label className="block mb-1 font-medium">Customer Name </label>
                                <input className="w-full border px-3 py-2 rounded" type="text" value={editCustomer.customerName} onChange={(e) => setEditCustomer({ ...editCustomer, customerName: e.target.value })} />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Email</label>
                                <input className="w-full border px-3 py-2 rounded" type="email" value={editCustomer.email} onChange={(e) => setEditCustomer({ ...editCustomer, email: e.target.value })} />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Phone</label>
                                <input className="w-full border px-3 py-2 rounded" type="text" value={editCustomer.phone} onChange={(e) => setEditCustomer({ ...editCustomer, phone: e.target.value })} />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Address</label>
                                <input className="w-full border px-3 py-2 rounded" type="text" value={editCustomer.address} onChange={(e) => setEditCustomer({ ...editCustomer, address: e.target.value })} />  
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Total Orders</label>
                                <input className="w-full border px-3 py-2 rounded" type="number" min="0" value={editCustomer.totalOrders} onChange={(e) => setEditCustomer({ ...editCustomer, totalOrders: e.target.value })} />
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

export default Customers;