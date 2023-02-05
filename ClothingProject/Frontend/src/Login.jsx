import React, { useContext } from "react";
import Navbar from "./Components/Navbar";

const Login = ({ login_api }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");

  const success = async (text) => {
    console.log("Yeah! Authenticated!");
    await localStorage.setItem("salesToken", text.access);
    window.location = "/";
  };

  const tryLogin = async (e) => {
    e.preventDefault();
    console.log("Loggin in with", email, password);
    await login_api(email, password, success, (text) => {
      setMessage(text);
    });
  };

  return (
    <div className="login">
      <Navbar />
      <form>
        <input
          type="text"
          htmlFor="email"
          name="email"
          placeholder="Enter user"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          htmlFor="password"
          name="password"
          placeholder="Enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button type="submit" onClick={tryLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
