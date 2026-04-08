import Link from 'next/link'
import React from 'react'

const Cta = () => {
    return (
        <>
            <div id="cta" className='position-relative overflow-hidden'>
                <div className="row m-0">
                    <div className="col-md-12 d-flex flex-column jusitfy-content-center align-items-center">
                        <h3>Let’s Create Something Impactful Together</h3>
                        <Link href="/contact" className="btn btn-red px-4">
                            get started <span><img src='/images/gt.svg' className='img-fluid' /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cta