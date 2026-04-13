import Link from 'next/link'
import React from 'react'

const ServiceBanner = ({first, last, src}) => {
  return (
     <>
            <div id='hero' className='overflow-hidden'>
                <div className='position-relative h-100vh'>
                    <div className="wrapper">
                        <img src={src} alt="" className="img-fluid" />
                    </div>
                    <div className='position-absolute p-5 top-0 start-50 translate-middle-x content-column h-100 w-100'>
                        <div className="row m-0 w-100 h-100 align-content-end">
                            
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className='brand-name'>
                                            <h2 className='first'>
                                                {
                                                    first && (
                                                        first
                                                    )
                                                }
                                            </h2>
                                            <h2 className='last'>
                                                {last && (last)}
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

export default ServiceBanner