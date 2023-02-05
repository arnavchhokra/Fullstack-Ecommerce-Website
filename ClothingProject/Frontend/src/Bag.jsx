import React from "react";
import BagProductCard from "./Components/BagProductCard";
import "./style/Bag.css";

function Bag() {
  return (
    <div className="Bag">
      <span className="Bag-Nav">BAG</span>
      <div className="Bag-container">
        <div className="Bag-Products">
          <BagProductCard />
          <BagProductCard />
        </div>
        <span>SUBTOTAL</span>
        <span>DELIVERY</span>
        <span>TOTAL</span>
        <div className="Bag-Buttons">
          <button>GO BACK</button>
          <button>GO TO DELIVERY</button>
        </div>
      </div>
    </div>
  );
}

export default Bag;
