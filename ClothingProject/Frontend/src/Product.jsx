import { React } from "react";
import "./style/Product.css";
import Navbar from "./Components/Navbar";
import Draggable from "react-draggable";
import { DraggableCore } from "react-draggable";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function shared() {
  const params = useParams();
  let sharedid = params.id;
  return sharedid;
}

function Product() {
  const [text, settext] = useState("");

  const onChangeHandler = (event) => {
    settext(event.target.value);
  };
  console.log(text);

  const addi = () => {
    let newtext = document.createElement("p");
    //newtext.append("Hello");
    newtext.innerHTML = "New span";
    document.getElementById("Product-Gen").append(newtext);
  };
  const params = useParams();
  let ProductId = params.id;
  let [Products, setProducts] = useState([ProductId]);

  let [product, setproduct] = useState([]);
  useEffect(() => {
    getproduct();
  }, []);

  let getproduct = async () => {
    let response = await fetch(`http://localhost:8000/Shop/${ProductId}/`);
    let data = await response.json();
    setproduct(data);
    console.log(data);
  };
  const increase = () => {
    var element = document.getElementById("Product-Resize");
    var txt = document.getElementById("Product-Resize");
    var style = window
      .getComputedStyle(txt, null)
      .getPropertyValue("font-size");
    var currentSize = parseFloat(style);
    element.style.fontSize = currentSize + 1 + "px";
  };

  return (
    <div className="Product">
      <Navbar />
      <div className="Product-container">
        <div className="Product-Left">
          <span className="Product-Tile">/{product.name}</span>
          <span className="Product-Price">${product.price}</span>
          <span className="Product-Desc">{product.description}</span>
          <button className="Product-Size">S</button>
          <button className="Product-Color">BLACK</button>
          <button className="Product-Color">Add To Cart</button>
        </div>
        <div className="Product-right">
          <input
            placeholder="Write Text"
            onChange={(e) => {
              settext(e.target.value);
            }}
            value={text}
          ></input>
          <button onclick={addi}>Add</button>
          <button>Remove all</button>

          <Draggable>
            <div className="Product-Gen">
              <div id="Product-Resize">{text}</div>
            </div>
          </Draggable>
          <img className="Product-Image" src={product.image}></img>
          <div className="Product-ResizeProperties">
            <button onClick={increase}>Font +</button>
            <button>Font -</button>
            <button>Color</button>
          </div>
        </div>
      </div>
      <div className="Product-Upsell"></div>
    </div>
  );
}

export default Product;
