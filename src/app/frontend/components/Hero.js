'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Hero = () => {
    const [hero, setHero] = useState(null);

    useEffect(() => {
        const fetchHero = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/hero`
                );

                setHero(res.data.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchHero();
    }, []);

    if (!hero) return null; // or loader

    const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${hero.image}`;

    return (
        <div id='hero' className='overflow-hidden'>
            <div className='position-relative h-100vh'>
                <div className="wrapper">
                    <img src={imageUrl} alt="" className="img-fluid" />
                </div>

                <div className='position-absolute p-5 top-0 start-50 translate-middle-x content-column h-100 w-100'>
                    <div className="row m-0 h-100 align-content-between">

                        <div className="col-md-12 d-flex flex-column align-items-center">
                            <h3>{hero.sub_title}</h3>

                            <Link href={hero.button_link || "#"} className="btn btn-red px-4">
                                {hero.button_text}
                                <span>
                                    <img src='/images/gt.svg' className='img-fluid' />
                                </span>
                            </Link>
                        </div>

                        <div className="col-md-12">
                            <div className="brand-name">
                                <h2 className='first'>
                                    {hero.title}
                                </h2>
                                <h2 className='last'>
                                    {hero.title_2}
                                </h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;