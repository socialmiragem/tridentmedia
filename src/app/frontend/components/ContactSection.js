"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./ContactForm";

const ContactSection = () => {

  const [getintouch, setGetintouch] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/getintouch`,
        );

        setGetintouch(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchHero();
  }, []);
  if (!getintouch) return null; // or loader

    const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${getintouch.image}`;

  return (
    <>
      <div id="servicesection" className="overflow-hidden ">
        <div className="bg-black py-5 z-3 position-relative">
          <div className="z-3 position-relative">
            <div className="subheading">
              <h4 className="mb-0">
                <span className="me-3">•</span>{getintouch.section_sub_title}
                <span className="ms-3">•</span>
              </h4>
            </div>
            <div className="heading">
              <h3>{getintouch.section_title}</h3>
            </div>
            <div className="changeSection">
                <ContactForm form_sub_title_prop = {getintouch?.form_sub_title} form_title = {getintouch?.form_title} form_image = {imageUrl}/>
            </div>
          </div>

          <div className="img-wrapper position-absolute top-50 start-0 translate-middle-y z-1">
            <img src="/images/icon.svg" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
