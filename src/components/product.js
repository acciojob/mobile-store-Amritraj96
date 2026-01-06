import React from "react";
import { Link, useParams } from "react-router-dom";

const Product = ({ products }) => {
  const { id } = useParams();
  
  // Find the specific product from the PROPS, not the file
  const product = products.find((p) => p.id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{width: "200px"}} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      
      {/* Requirement: Back button with class .btn */}
      <Link to="/">
        <button className="btn">Back</button>
      </Link>
    </div>
  );
};

export default Product;
