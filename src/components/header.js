import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        {/* Requirement: Link to Admin must exist */}
        <Link to="/admin">Admin Panel</Link>
      </nav>
    </header>
  );
};

export default Header;
