import React from "react";
import Navbar from "./Components/Navbar";
import "./style/Home.css";
import Img1 from "./assets/sustainable.jpg";
import Img2 from "./assets/Image2.jpg";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home-Container">
        <div className="Home-Left">
          <a href="/Shop">SALE</a>
          <a href="/Selection">SELECTION</a>
          <a href="/Create">CREATE</a>
          <a href="/Bag">BAG</a>
          <a href="#">REVIEW</a>
          <a href="#">PROFILE</a>
        </div>
        <div className="Home-Right">
          <img src={Img1} />
        </div>
      </div>
      <div className="Home-Footer">
        <img src={Img2} />
      </div>
      <div class="wrapper">
        <div class="marquee">
          <p>ELEVEN58/ ELEVEN58/ ELEVEN58/ ELEVEN58/ ELEVEN58/ ELEVEN58/ </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
