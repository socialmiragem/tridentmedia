import React from "react";
import ServiceBanner from "../frontend/components/ServiceBanner";
import SectionTitle from "../frontend/components/SectionTitle";
import ServiceCards from "../frontend/components/ServiceCards";
import ServiceChoose from "../frontend/components/ServiceChoose";
import Cta from "../frontend/components/Cta";
import {servicechoose_illustrations, services_illustrations} from "@/app/data/data";

const page = () => {
  return (
    <>
      <ServiceBanner src="/images/gd.png" first="illustrations" last="" />

      <div className="background">
        <SectionTitle title="what’s included" bg="#fafafa" color="#ed1c24" />
        <ServiceCards data = {services_illustrations} title = "our illustration Solution includes" />
      </div>

      <ServiceChoose 
        data = {servicechoose_illustrations}
        title = "Illustration That Transforms Ideas into Visual Stories"
      />

      <Cta/>
    </>
  );
};

export default page;
