import React from "react";
import Image3 from "./assets/Image3.jpg";
import "./style/Selection.css";
import Navbar from "./Components/Navbar";

function Selection() {
  return (
    <div className="Selection">
      <Navbar />
      <div className="Selection-container">
        <div className="Selection-Left">
          <div className="Selection-ButtonRow">
            <button>ALL</button>
            <button>OUTERWEAR</button>
          </div>
          <div className="Selection-ButtonRow">
            <button>SKIRTS AND SHORTS</button>
            <button>TOPS AND T-SHIRTS</button>
          </div>
          <div className="Selection-ButtonRow">
            <button>DRESSES AND OVERALLS</button>
            <button>JACQUES AND VESTS</button>
          </div>
          <div className="Selection-ButtonRow">
            <button>BLOUSES AND SHIRTS</button>
            <button>SWEATERS AND CARDIGANS</button>
          </div>
          <div className="Selection-ButtonRow">
            <button>PANTS AND JEANS</button>
            <button>HOODIES AND SWEATSHOES</button>
          </div>
        </div>
        <div className="Selection-Right">
          <img src={Image3}></img>
        </div>
      </div>
    </div>
  );
}

export default Selection;
