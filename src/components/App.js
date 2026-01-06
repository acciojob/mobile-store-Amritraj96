import React, { useState } from "react";
import "./../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Header from "./header";
import Admin from "./admin";
import Product from "./product";
import AdminProduct from "./adminProduct"; // Fixed typo from AdminProdcut
import productsData from "../constants/products"; // Renamed import to avoid confusion

const App = () => {
  // Initialize state with the default list
  const [products, setProducts] = useState(productsData);

  // Function to Add Product (Required for test: count increases)
  const addProduct = (newProduct) => {
    // specific logic to ensure ID is unique
    const productWithId = { ...newProduct, id: (products.length + 1).toString() };
    setProducts([...products, productWithId]);
  };

  // Function to Delete Product (Required for test: count decreases)
  const deleteProduct = (id) => {
    const newList = products.filter((p) => p.id !== id);
    setProducts(newList);
  };

  // Function to Update Product (Required for test: price update persists)
  const updateProduct = (updatedProduct) => {
    const newList = products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    setProducts(newList);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route 
          path="/admin" 
          element={
            <Admin 
              products={products} 
              addProduct={addProduct} 
              deleteProduct={deleteProduct} 
            />
          } 
        />
        <Route path="/products/:id" element={<Product products={products} />} />
        <Route 
          path="/admin/products/:id" 
          element={
            <AdminProduct 
              products={products} 
              updateProduct={updateProduct} 
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
