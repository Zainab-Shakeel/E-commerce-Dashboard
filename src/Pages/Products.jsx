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

    const [editingProduct, seteditingProduct] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    const [viewProduct, setViewProduct] = useState(null);
    const [showViewModal, setShowViewModal] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');

    const [showAddModal, setShowAddModal] = useState(false);

    const [newProduct, setNewProduct] = useState({
        name: '',
        category: '',
        price: '',
        stock: '',
    })

    const handleEditClick = (product) => {
        seteditingProduct(product)
        setShowEditModal(true);
    }
    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (confirmDelete) {
            setProducts(products.filter(product => product.id !== id));
        }
    }

    const handleViewclick = (product) => {
        setViewProduct(product);
        setShowViewModal(true);
    }
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Products</h1>
            <div className="flex items-center justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search product..."
                    className="border px-3 py-2 rounded w-1/3"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button
                    onClick={() => setShowAddModal(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    + Add Product
                </button>
            </div>
            <div className="overflow-x-auto bg-white rounded-lg shadow-md text-black">
                <table className="min-w-full text-left text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Product Name</th>
                            <th className="px-6 py-4 font-semibold">Category</th>
                            <th className="px-6 py-4 font-semibold">Price</th>
                            <th className="px-6 py-4 font-semibold">Stock</th>
                            <th className="px-6 py-4 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map((product) => (
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
                                <td className="px-6 py-4 flex gap-2 text-white">
                                    <button onClick={() => handleViewclick(product)}>View</button>
                                    <button onClick={() => handleEditClick(product)}>Edit</button>
                                    <button onClick={() => handleDelete(product.id)}>Delete</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* edit button modal */}

            {showEditModal && (
                <div className="text-black fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Edit Product</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setProducts((prev) =>
                                    prev.map((p) =>
                                        p.id === editingProduct.id ? editingProduct : p
                                    )
                                );
                                setShowEditModal(false);
                            }}
                            className="space-y-4"
                        >

                            <div>
                                <label className="block mb-1 font-medium">Product Name </label>
                                <input className="w-full border px-3 py-2 rounded" type="text" value={editingProduct.name} onChange={(e) => seteditingProduct({ ...editingProduct, name: e.target.value })} />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Price </label>
                                <input className="w-full border px-3 py-2 rounded" type="number" value={editingProduct.price} onChange={(e) => seteditingProduct({ ...editingProduct, price: parseFloat(e.target.value) })} />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Quantity </label>
                                <input className="w-full border px-3 py-2 rounded" type="number" value={editingProduct.stock} onChange={(e) => seteditingProduct({ ...editingProduct, stock: parseInt(e.target.value) })} />
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

            {/* view modal */}
            {showViewModal && viewProduct && (
                <div className="text-black fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Product Details</h2>
                        <div className="space-y-2">
                            <p><strong>Name: </strong>{viewProduct.name}</p>
                            <p><strong>Category: </strong>{viewProduct.category}</p>
                            <p><strong>Price: </strong>{viewProduct.price}</p>
                            <p><strong>Stock: </strong>{viewProduct.stock > 0 ?
                                <span>
                                    In Stock
                                </span> :
                                <span>
                                    Out of Stock
                                </span>}</p>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button className="text-white px-4 py-2" type="button" onClick={() => setShowViewModal(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Add product modal */}
            {showAddModal && (
                <div className="text-black fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Add new Product</h2>

                        <form
                            onSubmit={(e)=>{
                                e.preventDefault();
                                const newId= products.length ? products[products.length - 1].id + 1 : 1;
                                const productToAdd={
                                    ...newProduct,
                                    id: newId,
                                    price: parseFloat(newProduct.price),
                                    stock: parseInt(newProduct.stock),
                                }

                                setProducts([...products, productToAdd]);
                                setShowAddModal(false);
                                setNewProduct({name: '', category: '', price: '', stock: ''});
                            }}
                            className="space-y-4"
                        >
                            <div>
                                <label><strong>Product Name </strong></label>
                                <input 
                                    type="text" 
                                    className="w-full border px-3 py-2 rounded" 
                                    value={newProduct.name}
                                    onChange={
                                        (e)=>{
                                            setNewProduct({...newProduct, name: e.target.value})
                                        }
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label><strong>Category </strong></label>
                                <input 
                                    type="text" 
                                    className="w-full border px-3 py-2 rounded" 
                                    value={newProduct.category}
                                    onChange={
                                        (e)=>{
                                            setNewProduct({...newProduct, category: e.target.value})
                                        }
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label><strong>Price </strong></label>
                                <input 
                                    type="number" 
                                    className="w-full border px-3 py-2 rounded" 
                                    value={newProduct.price}
                                    onChange={
                                        (e)=>{
                                            setNewProduct({...newProduct, price: e.target.value})
                                        }
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label><strong>Quantity </strong></label>
                                <input 
                                    type="number" 
                                    className="w-full border px-3 py-2 rounded" 
                                    value={newProduct.stock}
                                    onChange={
                                        (e)=>{
                                            setNewProduct({...newProduct, stock: e.target.value})
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
                                    Add Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            )}
        </div>
    )
}


export default Products