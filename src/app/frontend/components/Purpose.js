'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Purpose = () => {
    const [purpose, setPurpose] = useState(null)

    useEffect(() => {
        const fetchPurpose = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/about-page-purpose`
                )

                setPurpose(res.data.data)
            } catch (err) {
                console.error(err)
            }
        }

        fetchPurpose()
    }, [])

    if (!purpose) return null

    return (
        <>
            <div id="purpose" className='px-5 bg-black py-5'>
                
                {/* heading */}
                <div className='subheading'>
                    <h4 style={{ backgroundColor: "#111", color: "#B2CA9B" }}>
                        <span className='me-3'>•</span>
                        {purpose.sub_title || 'driven by purpose'}
                        <span className='ms-3'>•</span>
                    </h4>
                </div>

                <div className="purposecards bg-white p-1">
                    <div className="row g-1 d-flex align-items-stretch">

                        {/* LEFT IMAGE */}
                        <div className="col-md-4 d-flex">
                            <div className="w-100 bg-black purposecard d-flex flex-column">
                                <img
                                    src={
                                        purpose.left_image
                                            ? `${process.env.NEXT_PUBLIC_BASE_URL}${purpose.left_image}`
                                            : '/images/aboutpurpose.png'
                                    }
                                    alt=""
                                    className="img-fluid w-100"
                                />
                            </div>
                        </div>

                        {/* MISSION */}
                        <div className="col-md-4 d-flex">
                            <div className="w-100 bg-black purposecard d-flex flex-column">

                                <div className="wrapper mb-3">
                                    <img
                                        src={
                                            purpose.mission_icon
                                                ? `${process.env.NEXT_PUBLIC_BASE_URL}${purpose.mission_icon}`
                                                : '/images/purposetarget.svg'
                                        }
                                        alt=""
                                        className="img-fluid w-100"
                                    />
                                </div>

                                <h3 className='text-white text-uppercase'>
                                    {purpose.mission_title}
                                </h3>

                                <p>{purpose.mission_description}</p>
                            </div>
                        </div>

                        {/* VISION */}
                        <div className="col-md-4 d-flex">
                            <div className="w-100 bg-black purposecard d-flex flex-column">

                                <div className="wrapper mb-3">
                                    <img
                                        src={
                                            purpose.vision_icon
                                                ? `${process.env.NEXT_PUBLIC_BASE_URL}${purpose.vision_icon}`
                                                : '/images/purposearrow.svg'
                                        }
                                        alt=""
                                        className="img-fluid w-100"
                                    />
                                </div>

                                <h3 className='text-white text-uppercase'>
                                    {purpose.vision_title}
                                </h3>

                                <p>{purpose.vision_description}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Purpose