import React from "react";
import Navbar from "./Components/Navbar.jsx";
import "./style/Shop.css";
import { useState, useEffect } from "react";
import ProductCard from "./Components/ProductCard.jsx";
function Shop() {
  let [products, setproducts] = useState([]);
  useEffect(() => {
    getproducts();
  }, []);

  let getproducts = async () => {
    let response = await fetch("http://127.0.0.1:8000/Shop/");
    let data = await response.json();
    setproducts(data);
    console.log(data);
  };

  return (
    <div className="Shop">
      <Navbar />
      <div className="Shop-container">
        {products.map((Products, index) => (
          <ProductCard key={index} props={Products} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
