import React from "react";
import { Link } from "react-router-dom";

// Receive products as a prop
const Home = ({ products }) => {
  return (
    <div className="home-container">
      {products.map((item) => (
        <div key={item.id} className="product-card">
          <Link to={`/products/${item.id}`}>
            <h3>{item.name}</h3>
          </Link>
          {/* Test requires a button inside the link or card */}
          <Link to={`/products/${item.id}`}>
             <button className="btn">Buy</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
