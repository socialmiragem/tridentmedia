'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AboutPageSection = () => {
    const [section, setSection] = useState(null)

    useEffect(() => {
        const fetchSection = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/about-page-section`
                )

                setSection(res.data.data)
            } catch (err) {
                console.error(err)
            }
        }

        fetchSection()
    }, [])

    if (!section) return null

    const imageUrl = section?.image
        ? `${process.env.NEXT_PUBLIC_BASE_URL}${section.image}`
        : '/images/aboutpage.png'

    return (
        <>
            <div id="aboutpagesection">
                <div className='py-5 px-md-5 px-2'>
                    
                    {/* heading */}
                    <div className='subheading2' style={{ backgroundColor: "#fafafa" }}>
                        <h4 style={{ color: "#ed1c24" }}>
                            <span className='me-3'>•</span>
                            {section.sub_title || 'about'}
                            <span className='ms-3'>•</span>
                        </h4>
                    </div>

                    <div className="row m-0 pt-4">
                        
                        {/* LEFT SIDE */}
                        <div className="col-md-6">
                            <h3>{section.title}</h3>

                            <div className='wrapper'>
                                <img
                                    src={imageUrl}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="col-md-6 aboutpage_content">
                            <p>{section.description_1}</p>
                            <p>{section.description_2}</p>
                            <p>{section.description_3}</p>
                            <p>{section.description_4}</p>
                            <p>{section.description_5}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPageSection