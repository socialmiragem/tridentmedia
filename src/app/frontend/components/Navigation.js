'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3" id='navigation'>
      <div className="px-5 w-100">
        <div className="row w-100 align-items-center">

          {/* LEFT: Links */}
          <div className="col d-flex align-items-center">
            <ul className="navbar-nav flex-row gap-3">

              <li className="nav-item">
                <Link 
                  href="/" 
                  className={`nav-link fw-semibold fs-18 text-uppercase ${isActive('/') ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link 
                  href="/about" 
                  className={`nav-link fw-semibold fs-18 text-uppercase ${isActive('/about') ? 'active' : ''}`}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link 
                  href="/services" 
                  className={`nav-link fw-semibold fs-18 text-uppercase ${isActive('/services') ? 'active' : ''}`}
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link 
                  href="/work" 
                  className={`nav-link fw-semibold fs-18 text-uppercase ${isActive('/work') ? 'active' : ''}`}
                >
                  Work
                </Link>
              </li>

            </ul>
          </div>

          {/* CENTER: Logo */}
          <div className="col text-center">
            <Link href="/" className="navbar-brand fw-bold m-0">
              <img src="/images/logo.png" alt="Logo" className="img-fluid logo"/>
            </Link>
          </div>

          {/* RIGHT: Button */}
          <div className="col d-flex justify-content-end">
            <Link href="/contact" className="btn btn-red px-4">
              let’s talk <span><img src='/images/gt.svg' className='img-fluid'/></span>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}