import React, { useState } from "react";
import { Link } from "react-router-dom";

const Admin = ({ products, addProduct, deleteProduct }) => {
  // Local state for the "Add New Product" form
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;
    addProduct(formData);
    // Reset form
    setFormData({ name: "", price: "", description: "", image: "" });
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      
      {/* 1. Add Product Form */}
      <div className="add-product-form">
        <h3>Add New Product</h3>
        <input 
          className="form-control" 
          name="name" 
          placeholder="Name" 
          onChange={handleChange} 
          value={formData.name}
        />
        <input 
          className="form-control" 
          name="price" 
          placeholder="Price" 
          onChange={handleChange} 
          value={formData.price}
        />
        <input 
          className="form-control" 
          name="description" 
          placeholder="Description" 
          onChange={handleChange} 
          value={formData.description}
        />
        <input 
          className="form-control" 
          name="image" 
          placeholder="Image URL" 
          onChange={handleChange} 
          value={formData.image}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>

      <hr />

      {/* 2. Product List with Delete Options */}
      <ul>
        {products.map((item) => (
          <li key={item.id} style={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
            <span>
              <Link to={`/admin/products/${item.id}`}>
                {item.name} - ${item.price}
              </Link>
            </span>
            
            {/* Specific structure for Delete button test case */}
            <div>
               <button 
                 className="float-right" 
                 onClick={() => deleteProduct(item.id)}
               >
                 Delete
               </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
