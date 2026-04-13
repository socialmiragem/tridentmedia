import React from 'react'
import {servicechoose} from "@/app/data/data";
const ServiceChoose = ({ icon, title, desc }) => {
    return (
        <>
            <div id="ServiceChoose" className='px-5 mb-5 bg-black py-5 position-relative'>
                <div className='subheading' >
                    <h4 style={{ backgroundColor: "#111", color: "#B2CA9B" }}>
                        <span className='me-3'>•</span>why choose trident creative<span className='ms-3'>•</span>
                    </h4>
                </div>
                <div className='heading'>
                    <h2 className='text-white text-center '>
                        Strategic Graphic Design That Drives Impact
                    </h2>
                </div>
                <div className="purposecards bg-white p-1 mt-5">
                    <div className="row g-1 d-flex align-items-stretch">

                        {
                            servicechoose?.map(({ id, title, icon, desc }) => {
                                return (
                                    <div key={id} className="col-md-6 d-flex">
                                        <div className="w-100 bg-black purposecard d-flex flex-column">

                                            <div className="wrapper mb-3">
                                                <img
                                                    src={icon}
                                                    alt={title}
                                                    className="img-fluid w-100"
                                                />
                                            </div>

                                            <h3 className="text-white text-uppercase">
                                                {title}
                                            </h3>

                                            <p className="pb-5">
                                                {desc}
                                            </p>

                                        </div>
                                    </div>
                                );
                            })
                        }

                    </div>
                </div>
            </div >
        </>
    )
}

export default ServiceChoose