"use client";

import React, { useState } from "react";

const ServiceHoverChange = ({ services }) => {
  const [activeCard, setActiveCard] = useState(0);

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
              <img src={item.image} alt="" className="img-fluid"/>
              <div className="cardcontent text-md-start text-center">
                <p>what’s included</p>
                <ul className="text-md-start text-center">
                  {item.items.map((text, i) => (
                    <li className="text-md-start text-center" key={i}>{text}</li>
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
