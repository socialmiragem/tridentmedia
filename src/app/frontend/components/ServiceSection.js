import React from 'react'
import ServiceHoverChange from './ServiceHoverChange'

const ServiceSection = () => {
    return (
        <>
            <div id="servicesection" className='overflow-hidden '>
                <div className='bg-black py-5 z-3 position-relative'>
                    <div className='z-3 position-relative'>
                        <div className='subheading'>
                            <h4>
                                <span className='me-3'>•</span>Services<span className='ms-3'>•</span>
                            </h4>
                        </div>
                        <div className="heading">
                            <h3>Elevate Your Brand with Expert Creative Solutions</h3>
                        </div>
                        <div className="changeSection">
                            <ServiceHoverChange />
                        </div>
                    </div>

                    <div className="img-wrapper position-absolute top-50 start-50 translate-middle z-1">
                        <img src="/images/icon.svg" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSection