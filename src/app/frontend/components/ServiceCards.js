'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    { title: 'LOGO DESIGN', img: '/images/placeholder.png', desc: 'Every brand begins with a mark. We craft logos that tell your story, creating lasting impressions across every touchpoint.', side: 'left' },
    { title: 'MURALS DESIGN', img: '/images/placeholder.png', desc: 'Walls become stories. We design murals that transform spaces into bold visual experiences that capture attention.', side: 'right' },
    { title: 'SIGNAGE DESIGN', img: '/images/placeholder.png', desc: 'Your presence deserves to be seen. We create signage that guides, informs, and strengthens your brand.', side: 'left' },
    { title: 'MARKETING', img: '/images/placeholder.png', desc: 'Ideas need a voice. We design marketing visuals that connect, engage, and move your audience.', side: 'right' },
    { title: 'VINYL WRAPS', img: '/images/placeholder.png', desc: 'Turn movement into impact. We create vinyl wraps that transform surfaces into bold, eye-catching brand statements.', side: 'left' },
];

export default function ServiceCards() {
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
                    end: () => `+=${services.length * 1200}`,
                    pin: true,
                    scrub: 1,
                    onUpdate: (self) => {
                        const total = services.length;
                        const progress = self.progress * total;
                        const index = Math.min(total - 1, Math.max(0, Math.floor(progress)));

                        if (currentIndex.current !== index) {
                            currentIndex.current = index;
                            changeTitle(services[index].title);
                        }
                    }
                },
            });

            services.forEach((service, i) => {

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
                            titleRef.current.innerText = service.title;
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
                        <h3>our Graphic Design Solution includes</h3>
                    </div>
                </div>
            </section>
            <section ref={sectionRef} className="svc-section">
                {/* Background Title */}
                <div className="svc-title-wrapper">
                    <h2 ref={titleRef} className="svc-title-bg">
                        {services[0].title}
                    </h2>
                </div>

                <div className="svc-container">
                    <div className="svc-card-stack">
                        {services.map((item, i) => (
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