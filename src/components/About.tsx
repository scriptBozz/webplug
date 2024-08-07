import React, { useEffect } from "react";
import { Element, scroller } from "react-scroll";
import  { useLocation, Link } from "react-router-dom";

import Seo from "../assets/74848961.png";
import webdev from "../assets/webdev1.png";
import sysadmin from "../assets/33238821.png";
import data from "../assets/data1.png";

export default function About() {
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.articleId) {
      scroller.scrollTo(location.state.articleId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location.state]);

  return (
    <div className="container">
      <div>
        <Element name="article1">
          <section className="seo" style={{ display: "flex" }}>
            <figure>
              <img src={Seo} alt="seo" style={{ width: 300 }} />
            </figure>
            <article style={{ height: "auto", width: 500 }}>
              <p>
                <span className="serviceheaders">
                  Search Engine Optimization (SEO)
                </span>
                plays a pivotal role in ensuring your website ranks high on
                search engine results pages (SERPs), making it more visible to
                potential customers. Understanding SEO is essential for
                businesses looking to enhance their online visibility and reach
                their target audience effectively.What is SEO? SEO is the
                process of optimizing your website's content, structure, and
                performance to improve its visibility on search engines like
                Google, Bing, and Yahoo. When users search for specific keywords
                or phrases related to your business, SEO helps your website
                appear among the top results, increasing the likelihood of
                attracting organic traffic.In today's digital landscape, having
                a strong online presence is crucial for businesses to thrive.
              </p>
              <Link to="/contact" className="no-text-decoration">
                <p className="hirebtn">HIRE ME</p>
              </Link>
            </article>
          </section>
        </Element>
      </div>
      <Element name="article3">
        <section className="webdev" style={{ display: "flex" }}>
          <figure>
            <img src={webdev} alt="seo" style={{ width: 300 }} />
          </figure>
          <article style={{ height: "auto", width: 500 }}>
            <p>
              <span className="serviceheaders">Web development</span> serves as
              the backbone of the digital economy, empowering businesses and
              individuals to leverage the power of the internet to connect,
              engage, and succeed. By embracing innovative technologies,
              adopting best practices, and prioritizing user experience, web
              developers play a pivotal role in shaping the future of digital
              innovation and driving business growth in the digital age. As
              businesses continue to embrace digital transformation, investing
              in professional web development services remains essential for
              unlocking the full potential of the online marketplace and
              achieving lasting success.
            </p>
            <Link to="/contact" className="no-text-decoration">
              <p className="hirebtn">HIRE ME</p>
            </Link>
          </article>
        </section>
      </Element>

      <Element name="article2">
        <section className="sysadmin" style={{ display: "flex" }}>
          <figure>
            <img src={sysadmin} alt="seo" style={{ width: 300 }} />
          </figure>
          <article style={{ height: "auto", width: 500 }}>
            <p>
              <span className="serviceheaders">Security</span>is paramount. In
              today's interconnected digital landscape, safeguarding your
              organization's data, infrastructure, and operations is paramount
              to success and longevity. As a seasoned Systems Administrator with
              a keen focus on security, I am pleased to propose my comprehensive
              SysAdmin and Security services to fortify your digital assets and
              empower your business to thrive in a secure and resilient
              environment.
            </p>
            <Link to="/contact" className="no-text-decoration">
              <p className="hirebtn">HIRE ME</p>
            </Link>
          </article>
        </section>
      </Element>

      <section className="data" style={{ display: "flex" }}>
        <figure>
          <img src={data} alt="seo" style={{ width: 300 }} />
        </figure>
        <article style={{ height: "auto", width: 500, marginBottom: "10px" }}>
          <p>
            <span className="serviceheaders">
              Data Analysis and Visualization
            </span>
            play a critical role in transforming raw data into actionable
            insights and compelling narratives. By analyzing and interpreting
            data trends, patterns, and relationships, organizations can gain
            valuable insights into customer behavior, market dynamics, and
            operational performance. Visualization techniques further enhance
            understanding by presenting complex data in intuitive and visually
            engaging formats, facilitating decision-making and driving strategic
            initiatives.
          </p>
          <Link to="/contact" className="no-text-decoration">
            <p className="hirebtn">HIRE ME</p>
          </Link>
        </article>
      </section>
    </div>
  );
}
