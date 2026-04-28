"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ServiceHoverChange from "./ServiceHoverChange";

const ServiceSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/services`,
        );

        setData(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchServices();
  }, []);

  if (!data) return null;

  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/storage/`;

  const services = [
    {
      icon: data.service_1_icon ? baseUrl + data.service_1_icon : null,
      title: data.service_1_title || "Service 1",
      image: data.section_1_image ? baseUrl + data.section_1_image : null,
      items: [
        data.section_1_item_1,
        data.section_1_item_2,
        data.section_1_item_3,
        data.section_1_item_4,
        data.section_1_item_5,
      ].filter(Boolean),
    },
    {
      icon: data.service_2_icon ? baseUrl + data.service_2_icon : null,
      title: data.service_2_title || "Service 2",
      image: data.section_2_image ? baseUrl + data.section_2_image : null,
      items: [
        data.section_2_item_1,
        data.section_2_item_2,
        data.section_2_item_3,
        data.section_2_item_4,
      ].filter(Boolean),
    },
    {
      icon: data.service_3_icon ? baseUrl + data.service_3_icon : null,
      title: data.service_3_title || "Service 3",
      image: data.section_3_image ? baseUrl + data.section_3_image : null,
      items: [
        data.section_3_item_1,
        data.section_3_item_2,
        data.section_3_item_3,
        data.section_3_item_4,
      ].filter(Boolean),
    },
    {
      icon: data.service_4_icon ? baseUrl + data.service_4_icon : null,
      title: data.service_4_title || "Service 4",
      image: data.section_4_image ? baseUrl + data.section_4_image : null,
      items: [
        data.section_4_item_1,
        data.section_4_item_2,
        data.section_4_item_3,
        data.section_4_item_4,
      ].filter(Boolean),
    },
    {
      icon: data.service_5_icon ? baseUrl + data.service_5_icon : null,
      title: data.service_5_title || "Service 5",
      image: data.section_5_image ? baseUrl + data.section_5_image : null,
      items: [
        data.section_5_item_1,
        data.section_5_item_2,
        data.section_5_item_3,
        data.section_5_item_4,
      ].filter(Boolean),
    },
    {
      icon: data.service_6_icon ? baseUrl + data.service_6_icon : null,
      title: data.service_6_title || "Service 6",
      image: data.section_6_image ? baseUrl + data.section_6_image : null,
      items: [
        data.section_6_item_1,
        data.section_6_item_2,
        data.section_6_item_3,
        data.section_6_item_4,
      ].filter(Boolean),
    },
  ];
  return (
    <div id="servicesection" className="overflow-hidden">
      <div className="bg-black py-5 position-relative">
        <div className="subheading">
          <h4>
            <span className="me-3">•</span>
            {data.section_sub_title}
            <span className="ms-3">•</span>
          </h4>
        </div>

        <div className="heading">
          <h3>{data.section_title}</h3>
        </div>

        <ServiceHoverChange services={services} />
      </div>
    </div>
  );
};

export default ServiceSection;
