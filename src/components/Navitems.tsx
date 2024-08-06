import React from "react";
import webplug1 from "../assets/webplug_1.png";
import { Link } from "react-router-dom";


export default function Navitems() {
  return (
    <div className="navbar">
      <span className="logodiv">
        <img src={webplug1} alt="logo" style={{ width: 30 }} className="logo" />
        <li className="brandname">WEBPLUG</li>
      </span>
      <span className="menuitems">
        <Link to={"/"}>
          <li className="btn1">Home</li>
        </Link>
        <Link to={"/about"}>
          <li className="btn1">Services</li>
        </Link>
        <Link to={"/contact"}>
          <li className="btn1">Contact</li>
        </Link>
      </span>
    </div>
  );
}
