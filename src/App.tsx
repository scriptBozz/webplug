import React from "react";
import "./App.css";
import "./App.mobil.css";
import Navbar from "./components/Navbar";
import FooterItem from "./components/FooterItem";
import About from "./components/About";
import Contact from "./components/contact";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <FooterItem></FooterItem>
    </div>
  );
}

export default App;
