"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceCards({ data, title }) {
  if (!Array.isArray(data) || data.length === 0) return null;

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const currentIndex = useRef(-1);

  const [isMobile, setIsMobile] = useState(false);

  const BASE = process.env.NEXT_PUBLIC_BASE_URL;

  // detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!data?.length) return;

    // =========================
    // MOBILE MODE (NO GSAP)
    // =========================
    if (isMobile) {
      cardsRef.current.forEach((card) => {
        if (card) {
          card.style.opacity = 1;
          card.style.transform = "none";
        }
      });

      return;
    }

    // =========================
    // DESKTOP MODE (GSAP)
    // =========================
    const ctx = gsap.context(() => {
      // set initial title (VERY IMPORTANT)
      if (titleRef.current) {
        titleRef.current.innerText = data[0]?.title || "";
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${data.length * 1200}`,
          pin: true,
          scrub: 1,

          onUpdate: (self) => {
            const total = data.length;
            const progress = self.progress * total;

            const index = Math.min(
              total - 1,
              Math.max(0, Math.floor(progress))
            );

            if (currentIndex.current !== index) {
              currentIndex.current = index;

              // update title safely
              if (titleRef.current) {
                titleRef.current.innerText = data[index].title;
              }
            }
          },
        },
      });

      data.forEach((service, i) => {
        const card = cardsRef.current[i];

        tl.fromTo(
          card,
          {
            opacity: 0,
            y: 80,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            onStart: () => {
              if (titleRef.current) {
                titleRef.current.innerText = service.title;
              }
            },
          }
        );

        tl.to({}, { duration: 1.2 });

        tl.to(card, {
          opacity: 0,
          y: -80,
          scale: 0.98,
          duration: 1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [data, isMobile]);

  return (
    <>
      {/* HEADING */}
      <section className="heading section_heading">
        <div className="row mx-0">
          <div className="col-md-12 text-center">
            <h3>{title}</h3>
          </div>
        </div>
      </section>

      {/* SERVICE SECTION */}
      <section
        ref={sectionRef}
        className={`svc-section ${isMobile ? "is-mobile" : ""}`}
      >
        {/* DESKTOP TITLE */}
        <div className="svc-title-wrapper">
          <h2 ref={titleRef} className="svc-title-bg">
            {data?.[0]?.title}
          </h2>
        </div>

        <div className="svc-container">
          <div className="svc-card-stack">
            {data.map((item, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className={`svc-card svc-${item.side}`}
                style={{ opacity: isMobile ? 1 : 0 }}
              >
                {/* MOBILE TITLE */}
                {isMobile && (
                  <h2 className="svc-card-title">
                    {item.title}
                  </h2>
                )}

                {/* IMAGE */}
                <div className="svc-img">
                  <img
                    src={`${BASE}${item.img}`}
                    alt={item.title}
                    className="img-fluid"
                  />
                </div>

                {/* DESC */}
                <div className="svc-content">
                  <p className="svc-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}