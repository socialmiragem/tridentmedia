"use client";
import ServiceBanner from "../frontend/components/ServiceBanner";
import SectionTitle from "../frontend/components/SectionTitle";
import ServiceCards from "../frontend/components/ServiceCards";
import ServiceChoose from "../frontend/components/ServiceChoose";
import Cta from "../frontend/components/Cta";
import { servicechoose, services } from "@/app/data/data";
import React, { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  const [hero, setHero] = useState(null);
  const [card, setCard] = useState([]);
  const [choose, setChoose] = useState([]);
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/service-page`,
        );

        setHero(res.data.data);
      } catch (err) {
        // console.error(err);
      }
    };

    fetchHero();
  }, []);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/service-cards`,
        );

        setCard(res.data.data);
      } catch (err) {
        // console.error(err);
      }
    };

    fetchCards();
  }, []);


  useEffect(() => {
    const fetchChoose = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/why-choose`,
        );

        setChoose(res.data.data);
        console.log(res.data)
      } catch (err) {
        // console.error(err);
      }
    };

    fetchChoose();
  }, []);

  if (!hero) return null; // or loader

  const imageUrl = hero?.image
    ? `${process.env.NEXT_PUBLIC_BASE_URL}${hero.image}`
    : "/images/banner/gd.png";


  return (
    <>
      <ServiceBanner
        src={imageUrl}
        first={hero.first_text}
        last={hero.last_text}
      />

      <div className="background">
        <SectionTitle title="what’s included" bg="#fafafa" color="#ed1c24" />
        <ServiceCards
          data={card}
          title="our Graphic Design Solution includes"
        />
      </div>

      <ServiceChoose
        data={choose}
        title="Strategic Graphic Design That Drives Impact"
      />

      <Cta />
    </>
  );
};

export default page;
