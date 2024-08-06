import { useState } from "react";
import mypic from "../assets/mypic.png";
import SEO from "../assets/7484896.jpg";
import webdev from "../assets/webdev.jpg";
import security from "../assets/sysadmin.jpg";
export default function Test() {
  const data = {
    idoption: [
      {
        title: " >> About Me",
        image: [mypic],
        description:
          " >> Hello! I'm Uche, your go-to expert for all things digital and web-related. Whether you need assistance with digital marketing, SEO, web development, optimization, system security, data analysis, or visualization, I'm here to help. My true passion lies in full-stack web development and cybersecurity. If you or your business needs support in these areas, feel free to reach out. Let's work together to bring your ideas to life and tackle any challenges you face. Looking forward to connecting and collaborating with you in the future! ",
      },
    ],

    whatidooption: [
      {
        title: " >> About what I do",
        image: [SEO, webdev, security],
        description:
          " >> I will promote your business online to increase visibility and attract more customers, optimize your website to rank higher on search engines and improve discoverability.I can also build and maintain custom websites that are user-friendly and functional and enhance your existing website's performance and speed for a better user experience. I care about your security too, so I protect your digital assets from unauthorized access and cyber threats. for businesses I can analyze your data to uncover insights and guide decision-making, create visual reports to simplify complex data and highlight key information. ",
      },
    ],
    whativdonoption: [
      {
        title: " >> What I've done",
        image: [SEO, webdev, security],
        description:
          ">> Projects and collaborations ",
      },
    ],
  };

  const [aboutOption, setaboutOption] = useState("idoption");
  const renderoptions = () => {
    if (aboutOption === "idoption") {
      return data.idoption.map((item, index) => (
        <div key={index}>
          <div style={{ margin: "8px" }}>
            <h3> {item.title}</h3>
            <p>
              {item.description}
              <span className="typingcursor">|</span>
            </p>
          </div>

          <div className="mypicdiv">
            <img src={mypic} alt="mypic" className="optionimg mypic" />
            <span>
              <p>Uche Wachuku</p>
              <p>Full-stack developer| ISC2 member/Associate (CC)</p>
            </span>
          </div>
        </div>
      ));
    } else if (aboutOption === "whatidooption") {
      return data.whatidooption.map((item, index) => (
        <div key={index}>
          <div style={{ boxSizing: "border-box", padding: "8px" }}>
            <h3>{item.title}</h3>
            <p>
              {item.description}
              <span className="typingcursor">|</span>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <img src={item.image[0]} alt="seo" className="optionimg workimgs" />
            <img src={item.image[2]} alt="" className="optionimg workimgs" />
            <img src={item.image[1]} alt="" className="optionimg workimgs" />
          </div>
        </div>
      ));
    } else {
      return data.whativdonoption.map((item, index) => (
        <div key={index}>
          <div style={{ boxSizing: "border-box", padding: "8px" }}>
            <h3>{item.title}</h3>
            <h4>{item.description} </h4>
          </div>
          <p style={{ textAlign: "center", padding: "8px" }}>
            Comming soon...<span className="typingcursor">|</span>
          </p>
        </div>
      ));
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ display: "flex", gap: "15px" }} className="landingbtndiv">
        <p onClick={() => setaboutOption("idoption")} className="landingbtn">
          WHO I AM
        </p>
        <p
          onClick={() => setaboutOption("whatidooption")}
          className="landingbtn"
        >
          WHAT I DO
        </p>
        <p
          onClick={() => setaboutOption("whativdonoption")}
          className="landingbtn"
        >
          WHAT I'VE DONE'
        </p>
      </div>
      <div>{renderoptions()}</div>
    </div>
  );
}
