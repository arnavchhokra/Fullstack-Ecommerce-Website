import { useState, useEffect, Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Home";
import Selection from "./Selection";
import Shop from "./Shop.jsx";
import Bag from "./Bag";
import Product from "./Product";
import Login from "./Login";

const App = () => {
  const login_api = async (email, password, success, fail) => {
    const response = await fetch(`http://localhost:8000/api/token/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const text = await response.text();
    if (response.status === 200) {
      console.log("success", JSON.parse(text));
      success(JSON.parse(text));
    } else {
      console.log("failed", text);
      Object.entries(JSON.parse(text)).forEach(([key, value]) => {
        fail(`${key}: ${value}`);
      });
    }
  };

  return (
    <div className="App">
      <div className="App-Container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Selection" element={<Selection />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Bag" element={<Bag />} />
            <Route path="/Create" element={<Product />} />
            <Route path="/Shop/:id" element={<Product />} />
            <Route path="/Login" element={<Login login_api={login_api} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
