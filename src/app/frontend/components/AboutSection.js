import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <>
      <div id="aboutsection" className="">
        <div className="row m-0 gap-0">
          <div className="col-md-6 p-0">
            <img
              src="/images/about-front.svg"
              alt=""
              className="img-fluid h-100 object-fit-cover"
            />
          </div>
          <div className="col-md-6 p-0 position-relative">
            <div className="wrapper">
              <img
                src="/images/about-back.svg"
                alt=""
                className="img-fluid h-100 w-100 object-fit-cover"
              />
            </div>
            <div className="position-absolute top-0 w-100">
              <div className="border-bottom border-secondary rounded-0 w-100">
                <h4>About</h4>
              </div>
              <div className="content">
                <h3>Crafting Innovation Through Design Excellence</h3>
                <p>
                  Trident Creative is a multidisciplinary design studio built
                  around the idea that strong concepts deserve thoughtful
                  execution. At its core, the studio specializes in graphic
                  design in many capacities and 3D modeling for trade show
                  exhibits—bringing ideas to life through visually compelling,
                  strategically crafted design.
                </p>
                <p>
                  With experience across a wide range of creative and production
                  disciplines, Trident Creative supports clients at every stage
                  of a project. Whether developing a concept from the ground up
                  or refining an existing vision, the approach is collaborative,
                  detail-driven, and focused on moving ideas forward with
                  clarity and purpose.
                </p>
              </div>
            </div>
            <div className="button">
              <Link href="#">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
