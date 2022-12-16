import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "./pages/menu";
import DetailProduct from "./pages/detail";

function App() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  let onLogin = async (inputUsername, inputPassword) => {
    try {
      // Step1. Validasi inputan

      // Step2. Check apakah username dan password nya ada
      let response = await axios.get(`http://localhost:5000/users?username=${inputUsername}&password=${inputPassword}`);

      if (response.data.length === 0) throw { message: "Account Not Found" };
      // console.log(response);
      setUsername(response.data[0].username);
      localStorage.setItem("id", response.data[0].id);
      navigate("/");
    } catch (error) {}
  };

  let keepLogin = async () => {
    try {
      let getId = parseInt(localStorage.getItem("id"));

      let response = await axios.get(`http://localhost:5000/users/${getId}`);
      setUsername(response.data.username);
    } catch (error) {}
  };

  // useEffect(() => {
  //   keepLogin();
  // }, []);

  return (
    <>
      <Navbar myUsername={{ username }} />
      <Routes>
        <Route path="/register" element={username ? navigate(`/`) : <Register />} />
        <Route path="/Login" element={username ? navigate(`/`) : <Login myFunc={{ onLogin }} />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
      </Routes>
    </>
  );
}

export default App;
