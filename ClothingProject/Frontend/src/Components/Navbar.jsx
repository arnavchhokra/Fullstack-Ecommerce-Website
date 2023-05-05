import React from "react";
import "../style/Navbar.css";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-container">
        <div className="Navbar-Left">
          <a href="/Shop">SHOP</a>
          <a href="/Selection">SELECTION</a>
        </div>
        <a className="Navbar-Logo" href="/">
          ELEVEN58
        </a>
        <div className="Navbar-Right">
          <a href="/Profile">PROFILE</a>
          <a hreg="#">
            <a href="/Bag">BAG</a>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
