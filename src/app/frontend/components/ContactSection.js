import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <>
      <div id="servicesection" className="overflow-hidden ">
        <div className="bg-black py-5 z-3 position-relative">
          <div className="z-3 position-relative">
            <div className="subheading">
              <h4 className="mb-0">
                <span className="me-3">•</span>get in touch
                <span className="ms-3">•</span>
              </h4>
            </div>
            <div className="heading">
              <h3>YOUR CREATIVE PARTNER. MOVING IDEAS FORWARD.</h3>
            </div>
            <div className="changeSection">
                <ContactForm/>
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
