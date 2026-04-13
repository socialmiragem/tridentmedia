'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



export default function ServiceCards({ data, title }) {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef([]);
    const currentIndex = useRef(-1);

    const changeTitle = (newTitle) => {
        const el = titleRef.current;

        el.classList.add("fade");

        setTimeout(() => {
            el.innerText = newTitle;
            el.classList.remove("fade");
        }, 150);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: () => `+=${data.length * 1200}`,
                    pin: true,
                    scrub: 1,
                    onUpdate: (self) => {
                        const total = data.length;
                        const progress = self.progress * total;
                        const index = Math.min(total - 1, Math.max(0, Math.floor(progress)));

                        if (currentIndex.current !== index) {
                            currentIndex.current = index;
                            changeTitle(data[index].title);
                        }
                    }
                },
            });

            data.forEach((service, i) => {

                const card = cardsRef.current[i];

                // bring card in
                tl.fromTo(
                    card,
                    { opacity: 0, y: 80, scale: 0.98 },
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

                // hold phase (important for “stay on screen” feel)
                tl.to({}, { duration: 1.2 });

                // exit phase
                tl.to(card, {
                    opacity: 0,
                    y: -80,
                    scale: 0.98,
                    duration: 1,
                });

            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section className='heading'>
                <div className="row mx-0">
                    <div className="col-md-12 text-center">
                        <h3>{title}</h3>
                    </div>
                </div>
            </section>
            <section ref={sectionRef} className="svc-section">
                {/* Background Title */}
                <div className="svc-title-wrapper">
                    <h2 ref={titleRef} className="svc-title-bg">
                        {data[0].title}
                    </h2>
                </div>

                <div className="svc-container">
                    <div className="svc-card-stack">
                        {data.map((item, i) => (
                            <div
                                key={i}
                                ref={(el) => (cardsRef.current[i] = el)}
                                className={`svc-card svc-${item.side}`}
                                style={{ opacity: 0 }}

                            >
                                <div className="svc-img">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
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