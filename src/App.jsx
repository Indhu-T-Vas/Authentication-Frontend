import { useState } from "react";
import "./App.css";
import SignUp from "./assets/Pages/SignUp";
import Login from "./assets/Pages/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/Pages/Home";
function App() {
  // test
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;
