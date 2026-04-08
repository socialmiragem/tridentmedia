import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <>
            <div id='hero' className='overflow-hidden'>
                <div className='position-relative h-100vh'>
                    <div className="wrapper">
                        <img src="/images/hero.png" alt="" className="img-fluid" />
                    </div>
                    <div className='position-absolute p-5 top-0 start-50 translate-middle-x content-column h-100 w-100'>
                        <div className="row m-0 h-100 align-content-between">
                            <div className="col-md-12 d-flex flex-column align-items-center">
                                <h3>your creative partner. moving ideas forward.</h3>
                                <Link href="/contact" className="btn btn-red px-4">
                                    explore <span><img src='/images/gt.svg' className='img-fluid'/></span>
                                </Link>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className='brand-name'>
                                            <h2 className='first'>
                                                trident
                                            </h2>
                                            <h2 className='last'>
                                                Creative
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero