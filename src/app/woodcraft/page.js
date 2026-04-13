import React from "react";
import ServiceBanner from "../frontend/components/ServiceBanner";
import SectionTitle from "../frontend/components/SectionTitle";
import ServiceCards from "../frontend/components/ServiceCards";
import ServiceChoose from "../frontend/components/ServiceChoose";
import Cta from "../frontend/components/Cta";
import {servicechoose_woodcraft, services_woodcraft} from "@/app/data/data";

const page = () => {
  return (
    <>
      <ServiceBanner src="/images/gd.png" first="Woodcraft" last="" />

      <div className="background">
        <SectionTitle title="what’s included" bg="#fafafa" color="#ed1c24" />
        <ServiceCards data = {services_woodcraft} title = "our woodcraft Solution includes" />
      </div>

      <ServiceChoose 
        data = {servicechoose_woodcraft}
        title = "Craftsmanship in Wood, Precision in Every Detail"
      />

      <Cta/>
    </>
  );
};

export default page;
