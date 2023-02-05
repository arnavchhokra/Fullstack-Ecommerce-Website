import React from "react";
import "../style/BagProductCard.css";

function BagProductCard() {
  return (
    <div className="BagProductCard">
      <div className="BagProductCard-Container">
        <img src="https://www.creativeideas.store/media/catalog/product/cache/f7fe0c39a88bd276837542f863d0cbe2/o/v/oversize-tshirt-back_2.jpg"></img>
        <div className="BagProductCard-Details">
          <span>T-Shirt Edinburg</span>
          <span>Price $890</span>
          <span>Color red</span>
        </div>
      </div>
    </div>
  );
}

export default BagProductCard;
