import React from "react";
import ServiceBanner from "../frontend/components/ServiceBanner";
import SectionTitle from "../frontend/components/SectionTitle";
import ServiceCards from "../frontend/components/ServiceCards";
import ServiceChoose from "../frontend/components/ServiceChoose";
import Cta from "../frontend/components/Cta";

const page = () => {
  return (
    <>
      <ServiceBanner src="/images/gd.png" first="Graphic" last="design" />

      <div className="background">
        <SectionTitle title="what’s included" bg="#fafafa" color="#ed1c24" />
        <ServiceCards />
      </div>

      <ServiceChoose/>

      <Cta/>
    </>
  );
};

export default page;
