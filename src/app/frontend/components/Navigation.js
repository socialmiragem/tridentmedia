"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const closeSidebar = () => {
    setSidebarOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light py-1"
        id="navigation"
      >
        <div className="px-md-5 p-2 w-100">
          {/* DESKTOP NAVIGATION */}
          <div className="row w-100 align-items-center d-none d-lg-flex">
            {/* LEFT: Links */}
            <div className="col d-flex align-items-center">
              <ul className="navbar-nav flex-row gap-3">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link fw-semibold fs-18 text-uppercase ${
                      isActive("/") ? "active" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/about"
                    className={`nav-link fw-semibold fs-18 text-uppercase ${
                      isActive("/about") ? "active" : ""
                    }`}
                  >
                    About
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className={`nav-link dropdown-toggle fw-semibold fs-18 text-uppercase ${
                      isActive("/services") ? "active" : ""
                    }`}
                    href="javascript:void(0)"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Services
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/graphic-design" className="dropdown-item">
                        Graphic Design
                      </Link>
                    </li>

                    <li>
                      <Link href="/exhibit-design" className="dropdown-item">
                        Exhibit Design
                      </Link>
                    </li>

                    <li>
                      <Link href="/3d-modeling" className="dropdown-item">
                        3D Modeling
                      </Link>
                    </li>

                    <li>
                      <Link href="/photography" className="dropdown-item">
                        Photography
                      </Link>
                    </li>

                    <li>
                      <Link href="/illustrations" className="dropdown-item">
                        Illustrations
                      </Link>
                    </li>

                    <li>
                      <Link href="/woodcraft" className="dropdown-item">
                        Woodcraft
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="/work"
                    className={`nav-link fw-semibold fs-18 text-uppercase ${
                      isActive("/work") ? "active" : ""
                    }`}
                  >
                    Work
                  </Link>
                </li>
              </ul>
            </div>

            {/* CENTER: Logo */}
            <div className="col text-center">
              <Link href="/" className="navbar-brand fw-bold m-0">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="img-fluid logo"
                />
              </Link>
            </div>

            {/* RIGHT: Button */}
            <div className="col d-flex justify-content-end">
              <Link href="/contact" className="btn btn-red px-4">
                let’s talk{" "}
                <span>
                  <img src="/images/gt.svg" className="img-fluid" />
                </span>
              </Link>
            </div>
          </div>

          {/* MOBILE NAVIGATION */}
          <div className="d-flex d-lg-none justify-content-between align-items-center">
            {/* Logo */}
            <Link href="/" className="navbar-brand fw-bold m-0">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="img-fluid logo"
              />
            </Link>

            {/* Hamburger */}
            <button
              className="border-0 bg-transparent p-0"
              onClick={() => setSidebarOpen(true)}
            >
              <div
                style={{
                  width: "28px",
                  height: "2px",
                  background: "#000",
                  marginBottom: "6px",
                }}
              />

              <div
                style={{
                  width: "28px",
                  height: "2px",
                  background: "#000",
                  marginBottom: "6px",
                }}
              />

              <div
                style={{
                  width: "28px",
                  height: "2px",
                  background: "#000",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={closeSidebar}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "rgba(0,0,0,0.5)",
          opacity: sidebarOpen ? 1 : 0,
          visibility: sidebarOpen ? "visible" : "hidden",
          transition: "0.3s",
          zIndex: 999,
        }}
      />

      {/* SIDEBAR */}
      <div
        className="sidebar"
        style={{
          position: "fixed",
          top: 0,
          right: sidebarOpen ? 0 : "-320px",
          width: "300px",
          height: "100vh",
          background: "#fff",
          transition: "0.3s ease",
          zIndex: 100000000,
          padding: "30px 25px",
          overflowY: "auto",
        }}
      >
        {/* CLOSE BUTTON */}
        <div className="d-flex justify-content-end mb-4">
          <button
            onClick={closeSidebar}
            className="border-0 bg-transparent fs-1 lh-1"
          >
            ×
          </button>
        </div>

        {/* LINKS */}
        <ul className="list-unstyled d-flex flex-column gap-3">
          <li>
            <Link
              href="/"
              onClick={closeSidebar}
              className={`text-decoration-none text-uppercase fw-semibold ${
                isActive("/") ? "active" : ""
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              onClick={closeSidebar}
              className={`text-decoration-none text-uppercase fw-semibold ${
                isActive("/about") ? "active" : ""
              }`}
            >
              About
            </Link>
          </li>

          {/* SERVICES DROPDOWN */}
          <li>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="border-0 bg-transparent p-0 w-100 d-flex justify-content-between align-items-center text-uppercase fw-semibold"
            >
              <span>Services</span>

              <span
                style={{
                  transition: "0.3s",
                  transform: servicesOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              >
                ▼
              </span>
            </button>

            <div
              style={{
                maxHeight: servicesOpen ? "500px" : "0px",
                overflow: "hidden",
                transition: "0.3s ease",
              }}
            >
              <ul className="list-unstyled ps-3 pt-3 d-flex flex-column gap-3">
                <li>
                  <Link
                    href="/graphic-design"
                    onClick={closeSidebar}
                    className="text-decoration-none"
                  >
                    Graphic Design
                  </Link>
                </li>

                <li>
                  <Link
                    href="/exhibit-design"
                    onClick={closeSidebar}
                    className="text-decoration-none"
                  >
                    Exhibit Design
                  </Link>
                </li>

                <li>
                  <Link
                    href="/3d-modeling"
                    onClick={closeSidebar}
                    className="text-decoration-none"
                  >
                    3D Modeling
                  </Link>
                </li>

                <li>
                  <Link
                    href="/photography"
                    onClick={closeSidebar}
                    className="text-decoration-none"
                  >
                    Photography
                  </Link>
                </li>

                <li>
                  <Link
                    href="/illustrations"
                    onClick={closeSidebar}
                    className="text-decoration-none"
                  >
                    Illustrations
                  </Link>
                </li>

                <li>
                  <Link
                    href="/woodcraft"
                    onClick={closeSidebar}
                    className="text-decoration-none"
                  >
                    Woodcraft
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link
              href="/work"
              onClick={closeSidebar}
              className={`text-decoration-none text-uppercase fw-semibold ${
                isActive("/work") ? "active" : ""
              }`}
            >
              Work
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              onClick={closeSidebar}
              className={`text-decoration-none text-uppercase fw-semibold ${
                isActive("/contact") ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}