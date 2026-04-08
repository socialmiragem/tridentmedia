import React from 'react'

const AboutPageSection = () => {
    return (
        <>
            <div id="aboutpagesection">
                <div className='py-5 px-5'>
                    <div className='subheading2' style={{ backgroundColor: "#fafafa" }}>
                        <h4 style={{ color: "#ed1c24" }}>
                            <span className='me-3'>•</span>about<span className='ms-3'>•</span>
                        </h4>
                    </div>
                    <div className="row m-0 pt-4">
                        <div className="col-md-6">
                            <h3>Crafting Innovation Through Design Excellence</h3>
                            <div className='wrapper'>
                                <img src="/images/aboutpage.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p>Trident Creative is a multidisciplinary design studio built around the idea that strong concepts deserve thoughtful execution. At its core, the studio specializes in graphic design in many capacities and 3D modeling for trade show exhibits—bringing ideas to life through visually compelling, strategically crafted design.</p>
                            <p>With experience across a wide range of creative and production disciplines, Trident Creative supports clients at every stage of a project. Whether developing a concept from the ground up or refining an existing vision, the approach is collaborative, detail-driven, and focused on moving ideas forward with clarity and purpose.</p>
                            <p>Beyond design, Trident Creative offers consulting and project support to help navigate the full creative process. This includes acting as a liaison between clients and vendors, coordinating with contractors, and managing projects to ensure timelines, budgets, and expectations are met.</p>
                            <p>Additional capabilities include 3D printing and laser engraving, providing hands-on solutions that bridge the gap between digital design and physical production.</p>
                            <p>At every level, Trident Creative is committed to being more than a service provider—serving as a creative partner dedicated to turning ideas into tangible, effective results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPageSection