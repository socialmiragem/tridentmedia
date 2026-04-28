"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

const AboutSection = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about`);

        setAbout(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchHero();
  }, []);
  if (!about) return null; // or loader

  const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${about.image}`;
  return (
    <>
      <div id="aboutsection" className="">
        <div className="row m-0 gap-0">
          <div className="col-md-6 p-0">
            <img
              // src="/images/about-front.svg"
              src={imageUrl}
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
                <h4>{about.sub_title}</h4>
              </div>
              <div className="content">
                <h3>{about.title}</h3>
                <p>
                  {about.description_1}
                </p>
                <p>
                  {about.description_2}
                </p>
              </div>
            </div>
            <div className="button">
              <Link href={about.button_link || "#"}>{about.button_text}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
