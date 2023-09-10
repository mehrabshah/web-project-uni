import React from "react";
import "./Footer.css";
import { MdOutlineFacebook } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="footer pt-4">
        <div className="container">
          <div className="row ">
            <div className="col-md-5 text-center logo pt-5">
              <h1 className="main-heading"> SP GENTS</h1>
              <h2>Saloon</h2>
              <p>Established 2022</p>
            </div>
            <div className=" ms-auto  col-md-5 box">
              <div className="d-flex ms-1 text-center justify-content-center justify-content-lg-start">
                <MdOutlineFacebook size={30} className="ms-2"></MdOutlineFacebook>
                <RiWhatsappFill size={30} className="ms-2"></RiWhatsappFill>
                <AiFillTwitterCircle size={30} className="ms-2"></AiFillTwitterCircle>
                <FaInstagramSquare size={30} className="ms-2"> </FaInstagramSquare>
              </div>
              <p className="text-lg-start text-center mt-4">
                To book appointments online you will be redirected to a
                third-party site that SP Gents Salon does not own, operate, or
                control. If you have questions or concerns about booking
                appointments online, please contact the SP Gents Salon location
                where you would like to make an appointment. View all
                locations. 
              </p>
            </div>
          </div>
          <div className="row justify-content-center text-center mt-5 pb-1">
            © 2023 SP GENTS Salon | Terms & Conditions | Privacy Policy |
            Marketing Disclosure 
          </div>
        </div>
      </div>
    </>
  );
}
