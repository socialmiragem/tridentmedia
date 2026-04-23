import React from "react";
import ServiceBanner from "../frontend/components/ServiceBanner";
import SectionTitle from "../frontend/components/SectionTitle";
import ServiceCards from "../frontend/components/ServiceCards";
import ServiceChoose from "../frontend/components/ServiceChoose";
import Cta from "../frontend/components/Cta";
import {servicechoose_photography, services_photography} from "@/app/data/data";

const page = () => {
  return (
    <>
      <ServiceBanner src="/images/banner/photo.png" first="photography" last="" />

      <div className="background">
        <SectionTitle title="what’s included" bg="#fafafa" color="#ed1c24" />
        <ServiceCards data = {services_photography} title = "our photography Solution includes" />
      </div>

      <ServiceChoose 
        data = {servicechoose_photography}
        title = "Photography That Captures Purpose and Presence"
      />

      <Cta/>
    </>
  );
};

export default page;
