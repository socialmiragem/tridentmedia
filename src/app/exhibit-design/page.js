"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import ServiceBanner from "../frontend/components/ServiceBanner";
import SectionTitle from "../frontend/components/SectionTitle";
import ServiceCards from "../frontend/components/ServiceCards";
import ServiceChoose from "../frontend/components/ServiceChoose";
import Cta from "../frontend/components/Cta";
import { useLoader } from "@/app/context/LoaderContext";

const page = () => {
  const [hero, setHero] = useState(null);
  const [card, setCard] = useState([]);
  const [choose, setChoose] = useState([]);
  const { startLoading, stopLoading } = useLoader();

  useEffect(() => {
    const fetchHero = async () => {
      try {
                        startLoading();

        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/exibit-design/service-page`
        );

        setHero(res.data.data);
      } catch (err) {}
      finally {

        stopLoading();
      }
    };

    fetchHero();
  }, []);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/exibit-design/service-cards`
        );

        setCard(res.data.data);
      } catch (err) {}
    };

    fetchCards();
  }, []);

  useEffect(() => {
    const fetchChoose = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/exibit-design/why-choose`
        );

        setChoose(res.data.data);
      } catch (err) {}
    };

    fetchChoose();
  }, []);

  if (!hero) return null;

  const imageUrl = hero?.image
    ? `${process.env.NEXT_PUBLIC_BASE_URL}${hero.image}`
    : "/images/banner/exibit.png";

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
          title="our exhibit Design Solutions include"
        />
      </div>

      <ServiceChoose
        data={choose}
        title="Exhibit Design That Captivates and Performs"
      />

      <Cta />
    </>
  );
};

export default page;