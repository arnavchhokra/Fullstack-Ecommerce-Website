import React from "react";
import "../style/ProductCard.css";
import Image4 from "../assets/image4.jpg";
import { Link } from "react-router-dom";

function ProductCard({ props }) {
  return (
    <div className="ProductCard">
      <a href={`/Shop/${props.id}`}>
        <div className="ProductCard-container">
          <img src={props.image}></img>
          <div className="ProductCard-details">
            <span>{props.name}</span>
            <span>{props.price}</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
