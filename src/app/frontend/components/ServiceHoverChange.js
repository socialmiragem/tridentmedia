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
                                <li onClick={() => setActiveCard(0)} className={activeCard === 0 ? "active" : ""}>
                                    <span><img src="/images/service1.svg" alt="" className="img-fluid" /></span><h3>graphic design</h3>
                                </li>
                                <li onClick={() => setActiveCard(1)} className={activeCard === 1 ? "active" : ""}>
                                    <span><img src="/images/service2.svg" alt="" className="img-fluid" /></span><h3>Exhibit design</h3>
                                </li>
                                <li onClick={() => setActiveCard(2)} className={activeCard === 2 ? "active" : ""}>
                                    <span><img src="/images/service3.svg" alt="" className="img-fluid" /></span><h3>3d Modeling</h3>
                                </li>
                                <li onClick={() => setActiveCard(3)} className={activeCard === 3 ? "active" : ""}>
                                    <span><img src="/images/service4.svg" alt="" className="img-fluid" /></span><h3>Photography</h3>
                                </li>
                                <li onClick={() => setActiveCard(4)} className={activeCard === 4 ? "active" : ""}>
                                    <span><img src="/images/service5.svg" alt="" className="img-fluid" /></span><h3>Illustrations</h3>
                                </li>
                                <li onClick={() => setActiveCard(5)} className={activeCard === 5 ? "active" : ""}>
                                    <span><img src="/images/service2.svg" alt="" className="img-fluid" /></span><h3>Woodcraft</h3>
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
                                <ul className='' >
                                    <li>Logos</li>
                                    <li>Murals</li>
                                    <li>Signage</li>
                                    <li>Marketing</li>
                                    <li>Vinyl Wraps</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card2' style={getStyle(1)}>
                            <div>
                                <img src="/images/card2.png" alt="" className="img-fluid" />
                            </div>
                            <div className='cardcontent'>
                                <p>what’s included</p>
                                <ul className=''>
                                    <li>Exhibit models</li>
                                    <li>Exhibit graphics</li>
                                    <li>pull-Up banners</li>
                                    <li>Signage</li>
                                    {/* <li>Functional Pieces</li> */}
                                </ul>
                            </div>
                        </div>

                        <div className='card3' style={getStyle(2)}>
                            <div>
                                <img src="/images/card3.png" alt="" className="img-fluid" />
                            </div>
                            <div className='cardcontent'>
                                <p>what’s included</p>
                                <ul className=''>
                                    <li>Exhibits</li>
                                    <li>Spaces</li>
                                    <li>Objects</li>
                                    <li>Printing</li>
                                    {/* <li>Functional Pieces</li> */}
                                </ul>
                            </div>
                        </div>

                        <div className='card4' style={getStyle(3)}>
                            <div>
                                <img src="/images/card4.png" alt="" className="img-fluid" />
                            </div>
                            <div className='cardcontent'>
                                <p>what’s included</p>
                                <ul className=''>
                                    <li>Creative</li>
                                    <li>Promotional</li>
                                    <li>Landscape</li>
                                    <li>Portrait</li>
                                    {/* <li>Functional Pieces</li> */}
                                </ul>
                            </div>
                        </div>

                        <div className='card5' style={getStyle(4)}>
                            <div>
                                <img src="/images/card5.png" alt="" className="img-fluid" />
                            </div>
                            <div className='cardcontent'>
                                <p>what’s included</p>
                                <ul className=''>
                                    <li>Sketching</li>
                                    <li>Mechanical</li>
                                    <li>Landscape</li>
                                    {/* <li>Concept Samples</li>
                                    <li>Functional Pieces</li> */}
                                </ul>
                            </div>
                        </div>
                        <div className='card5' style={getStyle(5)}>
                            <div>
                                <img src="/images/woodcraft.png" alt="" className="img-fluid" />
                            </div>
                            <div className='cardcontent'>
                                <p>what’s included</p>
                                <ul className=''>
                                    <li>Design</li>
                                    <li>Production prep</li>
                                    <li>Laser engraving & cutting</li>
                                    {/* <li>Concept Samples</li>
                                    <li>Functional Pieces</li> */}
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