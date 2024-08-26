import React from "react";
import { FaLeaf } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        {/* Logo section */}
        <div>
          <p>Fruit</p>
          <p>Store</p>
          <FaLeaf />
        </div>
        {/* Menu section */}
      </div>
    </nav>
  );
};

export default Navbar;
