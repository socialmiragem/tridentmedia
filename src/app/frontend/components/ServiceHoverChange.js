"use client";

import React, { useState } from "react";

const ServiceHoverChange = ({ services }) => {
  const [activeCard, setActiveCard] = useState(0);
  const redirection = [
    "graphic-design",
    "exhibit-design",
    "3d-modeling",
    "photography",
    "illustration",
    "woodcraft",
  ];
  const getRedirectUrl = (title) => {
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    return redirection.includes(slug) ? `/${slug}` : "#";
  };
  const getStyle = (index) => ({
    opacity: activeCard === index ? 1 : 0,
    visibility: activeCard === index ? "visible" : "hidden",
    position: activeCard === index ? "relative" : "absolute",
    transform: activeCard === index ? "translateY(0px)" : "translateY(20px)",
    transition: "all 0.4s ease",
  });

  return (
    <div className="px-md-5 px-1" id="servicehoverchange">
      <div className="row">
        <div className="col-md-7">
          <ul className="list-unstyled">
            {services.map((item, index) => (
              <li
                key={index}
                onClick={() => setActiveCard(index)}
                className={activeCard === index ? "active" : ""}
              >
                <span>
                  <img src={item.icon} alt="" />
                </span>
                <h3>{item.title}</h3>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-5" style={{ position: "relative" }}>
          {services.map((item, index) => (
            <div key={index} style={getStyle(index)} className="px-md-0 px-2">
              <div class="wrapper position-relative">
                <img src={item.image} alt="" className="img-fluid w-100" />
                <div className="position-absolute start-50 top-50 translate-middle">
                  <a
                    href={getRedirectUrl(item.title)}
                    className="bg-accent btn text-uppercase fs-4 fw-semibold"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="cardcontent text-md-start text-center">
                <p>what’s included</p>
                <ul className="text-md-start text-center">
                  {item.items.map((text, i) => (
                    <li className="text-md-start text-center" key={i}>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceHoverChange;
