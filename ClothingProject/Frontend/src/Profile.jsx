import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "./Components/Navbar";
import "./style/Profile.css";

const Profile = () => {
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  const [name, setName] = useState("name");
  const [email, setEmail] = useState("name@example.com");

  useEffect(() => {
    authenticate();
  }, []);

  const authenticate = async () => {
    try {
      console.log(localStorage.getItem("salesToken"));
      const res = await fetch("http://localhost:8000/api/token/verify/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: localStorage.getItem("salesToken"),
        }),
      });
      if (res.status === 200) {
        setLoading(false);
        console.log("200");
      } else {
        const error = new Error(res.statusText);
        throw error;
      }
    } catch (err) {
      console.log("err");
      console.error(err);
      setRedirect(true);
      setLoading(false);
    }
  };

  const a = () => {
    if (loading === true) {
      console.log("Oii");
    }
    if (redirect === true) {
      navigate("/Login");
      console.log("Not authed asshole");
    } else {
      console.log("authed");
      getdetails();
    }
  };
  const getdetails = async () => {
    try {
      console.log(localStorage.getItem("salesToken"));
      const res = await fetch("http://localhost:8000/profile/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("salesToken")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.email);
          setName(data.name);
          setEmail(data.email);
          console.log(data.name);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (e) {
      console.log("outer error");
      console.log(e);
    }
  };

  const logout = () => {
    localStorage.removeItem("salesToken");
    navigate("/");
  };
  return (
    <div className="Profile">
      <Navbar />
      <div className="Profile-Name">
        {a()}
        Hi, {name}
      </div>
      <div className="Profile-Email">Email: {email}</div>
      <button onClick={logout}>LogOut</button>
    </div>
  );
};

export default Profile;
