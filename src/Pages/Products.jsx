import React, { useState, useEffect } from "react";
import App from "../App";

function Products() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'iPhone 14',
            category: 'Smartphones',
            price: 999,
            stock: 15,
        },
        {
            id: 2,
            name: 'MacBook Pro',
            category: 'Laptops',
            price: 1999,
            stock: 7,
        },
        {
            id: 3,
            name: 'Samsung Galaxy S23',
            category: 'Smartphones',
            price: 899,
            stock: 0,
        },
    ]);

    const handleDelete= (id)=>{
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if(confirmDelete){
            setProducts(products.filter(product => product.id !== id));
        }

    }
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Products</h1>
            <div className="overflow-x-auto bg-white rounded-lg shadow-md text-black">
                <table className="min-w-full text-left text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Product Name</th>
                            <th className="px-6 py-4 font-semibold">Category</th>
                            <th className="px-6 py-4 font-semibold">Price</th>
                            <th className="px-6 py-4 font-semibold">Stock</th>
                            <th className="px-6 py-4 font-semibold">Image</th>
                            <th className="px-6 py-4 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td className="px-6 py-4">{product.name}</td>
                                <td className="px-6 py-4">{product.category}</td>
                                <td className="px-6 py-4">{product.price}</td>
                                <td className="px-6 py-4">{product.stock > 0 ? (
                                    <span className="text-green-600 font-medium">
                                        In Stock
                                    </span>
                                ) : (
                                    <span className="text-red-600 font-medium">
                                        Out of Stock
                                    </span>
                                )}</td>
                                <td></td>
                                <td className="px-6 py-4 flex gap-2 text-white">
                                    <button onClick={()=>handleViewclick(product)}>View</button>
                                    <button onClick={()=> handleEditClick(product)}>Edit</button>
                                    <button onClick={()=> handleDelete(product.id)}>Delete</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Products