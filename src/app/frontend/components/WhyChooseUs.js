"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const WhyChooseUs = () => {
  const [whychooseus, setWhychooseus] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/whychooseus`,
        );

        setWhychooseus(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchHero();
  }, []);
  if (!whychooseus) return null; // or loader

  //   const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${about.image}`;
  return (
    <>
      <div id="whychooseus" className="overflow-hidden px-md-5 px-2 py-5">
        <div className="py-5">
          <div className="subheading2" style={{ backgroundColor: "#fafafa" }}>
            <h4 style={{ color: "#ed1c24" }}>
              <span className="me-3">•</span>
              {whychooseus.sub_title}
              <span className="ms-3">•</span>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <h3>
              <span className="me-3" style={{ color: "#ed1c24" }}>
                •
              </span>
              {whychooseus.title}
            </h3>
          </div>
          <div className="col-md-4">
            <p>{whychooseus.description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 border-top-2 p-md-0 px-md-0 px-3">
            <div className="cards-parent">
              <div className="d-flex justify-content-between align-items-center pt-4">
                <p className="m-0">
                  <span className="text-secondary">|</span>
                </p>
                <p className="fw-semibold text-primary fs-18 mb-0 text-uppercase">
                  {whychooseus.card_1_title}
                </p>
              </div>
              <div className="cards d-flex flex-column justify-content-between">
                <div>
                  <p className="fw-regular text-primary fs-18 mb-0 text-uppercase">
                    {whychooseus.card_1_desc}
                  </p>
                </div>
                <div className="cards-bottom">
                  <div className="row m-0 align-items-center ">
                    <div className="col-md-6 p-0">
                      <h3 className="text-accent fw-bold mb-0">
                        {whychooseus.card_1_counter}
                      </h3>
                    </div>
                    <div className="col-md-6 p-0 text-end">
                      <p className="text-uppercase text-text mb-0">
                        {whychooseus.card_1_counter_title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 border-top-2 p-md-0 px-md-0 px-3 alt-card">
            <div className="cards-parent">
              <div className="d-flex justify-content-between align-items-center pt-4">
                <p className="m-0">
                  <span className="text-secondary">||</span>
                </p>
                <p className="fw-semibold text-primary fs-18 mb-0 text-uppercase">
                  {whychooseus.card_2_title}
                </p>
              </div>
              <div className="cards d-flex flex-column justify-content-between">
                <div>
                  <p className="fw-regular text-primary fs-18 mb-0 text-uppercase">
                    {whychooseus.card_2_desc}
                  </p>
                </div>
                <div className="cards-bottom">
                  <div className="row m-0 align-items-center ">
                    <div className="col-md-6 p-0">
                      <h3 className="text-accent fw-bold mb-0">{whychooseus.card_2_counter}</h3>
                    </div>
                    <div className="col-md-6 p-0 text-end">
                      <p className="text-uppercase text-text mb-0">
                        {whychooseus.card_2_counter_title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 border-top-2 p-md-0 px-md-0 px-3">
            <div className="cards-parent">
              <div className="d-flex justify-content-between align-items-center pt-4">
                <p className="m-0">
                  <span className="text-secondary">|||</span>
                </p>
                <p className="fw-semibold text-primary fs-18 mb-0 text-uppercase">
                  {whychooseus.card_3_title}
                </p>
              </div>
              <div className="cards d-flex flex-column justify-content-between">
                <div>
                  <p className="fw-regular text-primary fs-18 mb-0 text-uppercase">
                    {whychooseus.card_3_desc}
                  </p>
                </div>
                <div className="cards-bottom">
                  <div className="row m-0 align-items-center ">
                    <div className="col-md-6 p-0">
                      <h3 className="text-accent fw-bold mb-0">{whychooseus.card_3_counter}</h3>
                    </div>
                    <div className="col-md-6 p-0 text-end">
                      <p className="text-uppercase text-text mb-0">
                        {whychooseus.card_3_counter_title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 border-top-2 p-md-0 px-md-0 px-3 alt-card">
            <div className="cards-parent">
              <div className="d-flex justify-content-between align-items-center pt-4">
                <p className="m-0">
                  <span className="text-secondary">||||</span>
                </p>
                <p className="fw-semibold text-primary fs-18 mb-0 text-uppercase">
                  {whychooseus.card_4_title}
                </p>
              </div>
              <div className="cards d-flex flex-column justify-content-between">
                <div>
                  <p className="fw-regular text-primary fs-18 mb-0 text-uppercase">
                    {whychooseus.card_4_desc}
                  </p>
                </div>
                <div className="cards-bottom">
                  <div className="row m-0 align-items-center ">
                    <div className="col-md-6 p-0">
                      <h3 className="text-accent fw-bold mb-0">{whychooseus.card_4_counter}</h3>
                    </div>
                    <div className="col-md-6 p-0 text-end">
                      <p className="text-uppercase text-text mb-0">
                        {whychooseus.card_4_counter_title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
