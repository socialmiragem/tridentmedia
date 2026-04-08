import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="mt-5 pt-5 bg-black">
        <div className="mb-5 icons">
          <div className="row m-0 justify-content-center">
            <div className="col-md-6 ">
              <div className="menu">
                <ul>
                  <li>
                    <Link href="/">home</Link>
                  </li>
                  <li>
                    <Link href="/about">about</Link>
                  </li>
                  <li>
                    <Link href="#">services</Link>
                  </li>
                  <li>
                    <Link href="#">work</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row m-0 justify-content-center mt-3 py-3">
            <div className="col-md-5">
              <Link href="mailto:contact@tridentcreative.us" className="text-decoration-none">
                <div className="email-anchor">
                  <div className="">
                    <img className="img-fluid" src="/images/email.svg" />
                  </div>
                  <div>
                    <p className="ancholabel">Email:</p>
                    <p className="mail">contact@tridentcreative.us</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row mx-0 justify-content-center mt-5">
            <div className="col-md-5 d-flex justify-content-center">
              <Link href="/contact" className="btn btn-accent px-4">
                get started <span><img src='/images/gt-alt.svg' className='img-fluid' /></span>
              </Link>
            </div>
          </div>
        </div>


        <div className="subfooter pt-5 border-top">
          <div className="row mx-0">
            <div className="col-md-12">
              <p className="text-center text-white text-capitalize small">copyright © 2026 Trident Creative. All Rights Reserved.</p>
            </div>
            <div className="col-md-12">
              <img src="/images/brandname.svg" alt="" className="img-fluid d-block mx-auto" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
