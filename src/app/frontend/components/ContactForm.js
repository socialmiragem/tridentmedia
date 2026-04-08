import Link from 'next/link'
import React from 'react'

const ContactForm = () => {
    return (
        <>
            <div id="contactform" className='px-5'>
                <div className="row m-0">
                    <div className="col-md-6 ">
                        <div className='wrapper'>
                            <img src="/images/contactimage.svg" alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='bg-white rounded-3 contact-card'>
                            <div className='subheading-3'>
                                <h4>let’s talk</h4>
                            </div>
                            <div className='mainheading'>
                                <h3>Start the conversation</h3>
                            </div>
                            <div className='form'>
                                <form action="">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className='feild'>
                                                <label htmlFor="fullname">full name</label>
                                                <input type="text" id='fullname' className='form-control' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className='feild'>
                                                <label htmlFor="email">email</label>
                                                <input type="text" id='email' className='form-control' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className='feild'>
                                                <label htmlFor="phone">phone number</label>
                                                <input type="text" id='phone' className='form-control' />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className='feild'>
                                                <label htmlFor="service">service</label>
                                                <select id='service' className='form-select'>
                                                    <option value="select">--Select--</option>
                                                    <option value="vehicle wrap">Vehicle Wrap</option>
                                                    <option value="Woodcraft">Woodcraft</option>
                                                    <option value="3d Printing">3d Printing</option>
                                                    <option value="Vinyl Wraps">Vinyl Wraps</option>
                                                    <option value="Exhibit Design">Exhibit Design</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className='feild'>
                                                <label htmlFor="msg">message</label>
                                                <textarea
                                                    id="msg"
                                                    className="form-control"
                                                    rows="8"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12 d-flex">
                                            <Link href="/contact" className="btn btn-red px-4">
                                                get started <span><img src='/images/gt.svg' className='img-fluid' /></span>
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm