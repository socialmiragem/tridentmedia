import React from 'react'

const Purpose = () => {
    return (
        <>
            <div id="purpose" className='px-5 bg-black py-5'>
                <div className='subheading' >
                    <h4 style={{ backgroundColor: "#111", color: "#B2CA9B" }}>
                        <span className='me-3'>•</span>driven by purpose<span className='ms-3'>•</span>
                    </h4>
                </div>
                <div className="purposecards bg-white p-1">
                    <div className="row g-1 d-flex align-items-stretch">
                        <div className="col-md-4 d-flex">
                            <div className="w-100 bg-black purposecard d-flex flex-column">
                                <img src="/images/aboutpurpose.png" alt="" className="img-fluid w-100" />
                            </div>
                        </div>

                        <div className="col-md-4 d-flex">
                            <div className="w-100 bg-black purposecard d-flex flex-column">
                                <div className="wrapper mb-3">
                                    <img src="/images/purposetarget.svg" alt="" className="img-fluid w-100" />
                                </div>
                                <h3 className='text-white text-uppercase'>our mission</h3>
                                <p>To transform ideas into impactful visual and physical solutions through thoughtful design, precision, and collaboration, delivering creative results that elevate brands.</p>
                            </div>
                        </div>

                        <div className="col-md-4 d-flex">
                            <div className="w-100 bg-black purposecard d-flex flex-column">
                                <div className="wrapper mb-3">
                                    <img src="/images/purposearrow.svg" alt="" className="img-fluid w-100" />
                                </div>
                                <h3 className='text-white text-uppercase'>our vision</h3>
                                <p>To be a trusted creative partner known for innovation, craftsmanship, and delivering seamless design-to-production solutions that shape brands and inspire lasting impact.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Purpose