import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <nav>
        <div className="logo">
          <h1>
            <Link to="/">Navbar</Link>
          </h1>
        </div>
        <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={openMenu ? "open" : "close"}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
