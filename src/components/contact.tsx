import React from "react";
import contactpic from "../assets/contact1.png";

export default function Contact() {
  return (
    <div className="contact" style={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <img
          src={contactpic}
          alt="contact"
          style={{
            height: 400,
            width: 400,
            marginBottom: "0",
          }}
        />
        <div
          style={{ height: "50px", width: "80%", backgroundColor: "white" }}
          className="contactmobilediv"
        >
          <p>Mobile: +31685349285 </p>
          <p>Location: Netherland</p>
        </div>
      </div>
      <div className="contactformdiv">
        <form action="" className="contactform">
          <input
            type="name"
            className="input"
            aria-label="Demo input"
            placeholder="your name"
          />
          <input
            type="email"
            className="input"
            aria-label="Demo input"
            placeholder="Abc@email.com…"
          />
          <textarea
            aria-label="Demo input"
            placeholder="Message"
            className="input"
          />
          <button className="btn1">Reach out</button>
        </form>
        <span className="socials" style={{ display: "flex", gap: 10 }}>
          <a href="https://www.facebook.com/webplug001">
            <button>FACEBOOK</button>
          </a>
          <a href="https://www.linkedin.com/in/ucee">
            <button>LINKEDIN</button>
          </a>
          <a href="https://www.github.com/scriptbozz">
            <button>GITHUB</button>
          </a>
        </span>
      </div>
    </div>
  );
}
