import React from "react";
import webplug1 from "../assets/webplug_1.png";

export default function FooterItem() {
  return (
    <div className="footer">
      <div className="footerimages">
        <span className="logodiv">
          <img
            src={webplug1}
            alt="logo"
            style={{ width: 30 }}
            className="logo"
          />
        </span>
        
      </div>

      <form>
        <p>subscribe to recieve latest tech news</p>
        <div className="form-group">
          <input
            name="email "
            type="text"
            placeholder="user@mail.com"
            className="textfield1 form-control "
          />
          <button className="btn ">Subscribe</button>
        </div>
      </form>
    </div>
  );
}
