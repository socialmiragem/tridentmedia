import React from "react";
import ServiceBanner from "../frontend/components/ServiceBanner";
import SectionTitle from "../frontend/components/SectionTitle";
import ServiceCards from "../frontend/components/ServiceCards";
import ServiceChoose from "../frontend/components/ServiceChoose";
import Cta from "../frontend/components/Cta";
import {servicechoose, services} from "@/app/data/data";

const page = () => {
  return (
    <>
      <ServiceBanner src="/images/banner/gd.png" first="Graphic" last="design" />

      <div className="background">
        <SectionTitle title="what’s included" bg="#fafafa" color="#ed1c24" />
        <ServiceCards data = {services} title = "our Graphic Design Solution includes" />
      </div>

      <ServiceChoose 
        data = {servicechoose}
        title = "Strategic Graphic Design That Drives Impact"
      />

      <Cta/>
    </>
  );
};

export default page;
