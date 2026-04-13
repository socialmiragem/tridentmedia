import React from "react";
import ServiceBanner from "../frontend/components/ServiceBanner";
import SectionTitle from "../frontend/components/SectionTitle";
import ServiceCards from "../frontend/components/ServiceCards";
import ServiceChoose from "../frontend/components/ServiceChoose";
import Cta from "../frontend/components/Cta";
import {servicechoose_ed, services_ed} from "@/app/data/data";

const page = () => {
  return (
    <>
      <ServiceBanner src="/images/gd.png" first="EXHIBIT" last="design" />

      <div className="background">
        <SectionTitle title="what’s included" bg="#fafafa" color="#ed1c24" />
        <ServiceCards data = {services_ed} title = "our exhibit Design Solution includes" />
      </div>

      <ServiceChoose 
        data = {servicechoose_ed}
        title = "Exhibit Design That Captivates and Performs"
      />

      <Cta/>
    </>
  );
};

export default page;
