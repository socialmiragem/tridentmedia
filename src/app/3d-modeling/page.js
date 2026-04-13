import React from "react";
import ServiceBanner from "../frontend/components/ServiceBanner";
import SectionTitle from "../frontend/components/SectionTitle";
import ServiceCards from "../frontend/components/ServiceCards";
import ServiceChoose from "../frontend/components/ServiceChoose";
import Cta from "../frontend/components/Cta";
import {servicechoose_modeling, services_modeling} from "@/app/data/data";

const page = () => {
  return (
    <>
      <ServiceBanner src="/images/gd.png" first="3d" last="modeling" />

      <div className="background">
        <SectionTitle title="what’s included" bg="#fafafa" color="#ed1c24" />
        <ServiceCards data = {services_modeling} title = "our 3d modeling Solution includes" />
      </div>

      <ServiceChoose 
        data = {servicechoose_modeling}
        title = "Precision 3D Modeling That Brings Ideas to Life"
      />

      <Cta/>
    </>
  );
};

export default page;
