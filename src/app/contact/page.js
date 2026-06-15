import React from "react";
import ServiceBanner from "../frontend/components/ServiceBanner";
import ContactSection from "../frontend/components/ContactSection";

const page = () => {
  return (

    <>
    <ServiceBanner
      src="/images/banner/woodwork.png"
      first="Lets Connect"
      last=""
    />
    <div className="my-5">

    <ContactSection/>
    </div>
    </>
  );
};

export default page;
