'use client';

import React, { useState } from 'react';

const ServiceHoverChange = () => {

    const [activeCard, setActiveCard] = useState(0);

    const getStyle = (index) => ({
        opacity: activeCard === index ? 1 : 0,
        visibility: activeCard === index ? 'visible' : 'hidden',
        position: activeCard === index ? 'relative' : 'absolute',
        transform: activeCard === index ? 'translateY(0px)' : 'translateY(20px)',
        transition: 'all 0.4s ease'
    });

    return (
        <>
            <div className="px-5" id='servicehoverchange'>
                <div className="row">
                    <div className="col-md-7">
                        <div className='listing'>
                            <ul className='list-unstyled'>
                                <li onClick={() => setActiveCard(0)}>
                                    <span><img src="/images/service1.svg" alt="" className="img-fluid" /></span><h3>3d printing</h3>
                                </li>
                                <li onClick={() => setActiveCard(1)}>
                                    <span><img src="/images/service2.svg" alt="" className="img-fluid" /></span><h3>woodcraft</h3>
                                </li>
                                <li onClick={() => setActiveCard(2)}>
                                    <span><img src="/images/service3.svg" alt="" className="img-fluid" /></span><h3>vehicle wraps</h3>
                                </li>
                                <li onClick={() => setActiveCard(3)}>
                                    <span><img src="/images/service4.svg" alt="" className="img-fluid" /></span><h3>vinyl wraps</h3>
                                </li>
                                <li onClick={() => setActiveCard(4)}>
                                    <span><img src="/images/service5.svg" alt="" className="img-fluid" /></span><h3>exhibit design</h3>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* IMPORTANT: relative parent */}
                    <div className="col-md-5" style={{ position: 'relative' }}>

                        <div className='card1' style={getStyle(0)}>
                            <div>
                                <img src="/images/card1.png" alt="" className="img-fluid" />
                            </div>
                            <div className='cardcontent'>
                                <p>what’s included</p>
                                <ul className='list-disc' style={{listStyle : 'disc'}}>
                                    <li>Rapid Prototypes</li>
                                    <li>Custom Parts</li>
                                    <li>Scale Models</li>
                                    <li>Concept Samples</li>
                                    <li>Functional Pieces</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card2' style={getStyle(1)}>
                            <div>
                                <img src="/images/card2.png" alt="" className="img-fluid" />
                            </div>
                            <div className='cardcontent'>
                                <p>what’s included</p>
                                <ul className='list-disc'>
                                    <li>Rapid Prototypes</li>
                                    <li>Custom Parts</li>
                                    <li>Scale Models</li>
                                    <li>Concept Samples</li>
                                    <li>Functional Pieces</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card3' style={getStyle(2)}>
                            <div>
                                <img src="/images/card3.png" alt="" className="img-fluid" />
                            </div>
                            <div className='cardcontent'>
                                <p>what’s included</p>
                                <ul className='list-disc'>
                                    <li>Rapid Prototypes</li>
                                    <li>Custom Parts</li>
                                    <li>Scale Models</li>
                                    <li>Concept Samples</li>
                                    <li>Functional Pieces</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card4' style={getStyle(3)}>
                            <div>
                                <img src="/images/card4.png" alt="" className="img-fluid" />
                            </div>
                            <div className='cardcontent'>
                                <p>what’s included</p>
                                <ul className='list-disc'>
                                    <li>Rapid Prototypes</li>
                                    <li>Custom Parts</li>
                                    <li>Scale Models</li>
                                    <li>Concept Samples</li>
                                    <li>Functional Pieces</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card5' style={getStyle(4)}>
                            <div>
                                <img src="/images/card5.png" alt="" className="img-fluid" />
                            </div>
                            <div className='cardcontent'>
                                <p>what’s included</p>
                                <ul className='list-disc'>
                                    <li>Rapid Prototypes</li>
                                    <li>Custom Parts</li>
                                    <li>Scale Models</li>
                                    <li>Concept Samples</li>
                                    <li>Functional Pieces</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceHoverChange;