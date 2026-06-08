'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Cta = () => {

    const [cta, setCta] = useState(null)

    useEffect(() => {

        const fetchCta = async () => {

            try {

                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/global-cta`
                )

                setCta(res.data.data)

            } catch (err) {
                console.error(err)
            }
        }

        fetchCta()

    }, [])

    if (!cta) return null

    return (
        <>
            <div
                id="cta"
                className='position-relative overflow-hidden'
                style={{
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}${cta.background_image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >

                <div className="row m-0">

                    <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">

                        <h3>
                            {cta.title || 'Let’s Create Something Impactful Together'}
                        </h3>

                        <Link
                            href={cta.button_link || '/contact'}
                            className="btn btn-red px-4"
                        >

                            {cta.button_text || 'get started'}

                            <span>
                                <img
                                    src='/images/gt.svg'
                                    className='img-fluid'
                                    alt=""
                                />
                            </span>

                        </Link>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Cta