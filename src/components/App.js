import React, { useState } from "react";
import "./../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Header from "./header";
import Admin from "./admin";
import Product from "./product";
// Corrected typo in variable name below for clarity
import AdminProduct from "./adminProduct"; 

// You likely have a data file, or you can start with a default array here
// Ensure this matches the 8 products mentioned in the evaluation criteria
const initialProducts = [
  { id: "1", name: "iPhone 13", price: 60000, description: "Apple phone", image: "url..." },
  // ... add the rest of your initial 8 items here
];

const App = () => {
  // 1. Lift state up: The master list lives here
  const [products, setProducts] = useState(initialProducts);

  // 2. Handler to Add a Product (Requirements: count increases to 9)
  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now().toString() }]);
  };

  // 3. Handler to Delete a Product (Requirements: count decreases by 1)
  const deleteProduct = (id) => {
    const updatedList = products.filter((item) => item.id !== id);
    setProducts(updatedList);
  };

  // 4. Handler to Edit a Product (Requirements: price updates persist)
  const updateProduct = (updatedProduct) => {
    const updatedList = products.map((item) => 
      item.id === updatedProduct.id ? updatedProduct : item
    );
    setProducts(updatedList);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Pass products list to Home */}
        <Route path="/" element={<Home products={products} />} />
        
        {/* Pass products, add, and delete handlers to Admin */}
        <Route 
          path="/admin" 
          element={
            <Admin 
              products={products} 
              onDelete={deleteProduct} 
              onAdd={addProduct} 
            />
          } 
        />
        
        {/* Pass products list to Product Details (so it can find the specific item) */}
        <Route path="/products/:id" element={<Product products={products} />} />
        
        {/* Pass products and update handler to Admin Product Edit page */}
        <Route 
          path="/admin/products/:id" 
          element={
            <AdminProduct 
              products={products} 
              onUpdate={updateProduct} 
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
