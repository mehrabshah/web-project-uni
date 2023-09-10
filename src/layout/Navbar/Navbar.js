import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ImWhatsapp } from "react-icons/im";
import { BiRightArrow } from "react-icons/bi";
import "./Navbar.css";
const navLinks = [
  { text: "Services", path: "/" },
  { text: "Book Online", path: "/book" },
  { text: "Location", path: "/location" },
  { text: "Blog", path: "/blog" },
 
];
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="flex flex-column text-center">
            <h1 className="main-heading"> SP GENTS</h1>
            <h2>Saloon</h2>
            <p>Established 2022</p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
             <span class="navbar-toggler-icon"></span>
          
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex flex-column ms-auto justify-content-end ">
              <div className="d-flex flex-lg-column  align-items-lg-end  align-items-center justify-content-between  justify-content-lg-end ">
            <Link to="/book"  > <button type="button" className="button-width">
                      Book Online  <BiRightArrow size={25} className="ms-5"></BiRightArrow>    
                </button> </Link>
                <div className="d-flex justify-content-end align-items-center me-4 mt-1">
                  <span>+05 6597 4037</span>
                  <ImWhatsapp className="ms-2"></ImWhatsapp>
                </div>
              </div>

              <ul className="navbar-nav   mb-2 mb-lg-0">
                {navLinks.map((link, index) => (
                  <li
                    className={`nav-item${
                      index !== navLinks.length - 1
                        ? " nav-links-padding"
                        : " last-child-padding"
                    }`}
                    key={index}
                  >
                    <Link to={link.path} className="nav-link">
                          {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
