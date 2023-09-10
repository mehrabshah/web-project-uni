import React from "react";
import "./Location.css";
import { Outlet, Link } from "react-router-dom";
import Hero from "./../../components/Hero/Hero";
import { BiRightArrow } from "react-icons/bi";
export default function Location() {
  return (
    <>
      <Hero heading="WHERE VIP COMES STANDARD" subHeading="LOCATION SALON" />
      <div className="location mb-5">
        <div className="container ">
          <div className="d-flex flex-column justify-content-center align-items-center  upper">
            <p className=" text-center pt-4">
              Download our Mobile App for easy booking! Go to your App Store and
              search for The Man Salon Mobile and look for our logo, click to
              download. 
            </p>
          </div>
          <div className="row map-margin p-5">
            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.160923085427!2d54.49607178010944!3d24.375704708420677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e412074e9918d%3A0x6129b559c0d63351!2s13th%20Street%20-%20Musaffah%20-%20Musaffah%20Industrial%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1694362376185!5m2!1sen!2s"
                width="600"
                height="450"
                className="img-map"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-lg-5 ms-lg-4 mt-4  mt-lg-0  ">
                  <address className="text-lg-start text-center ">SP Gents Saloon central street#5 shop #5 plot #38 Musaffah 13 Abu Dhabi</address>
                  <h1 className="mt-4 text-start ">024420129</h1>
                  <h2 className="mt-4 text-start ">mob# 056 3662640</h2>
                  <Link to="/book">    <button type="button" className="button-width mt-4 ">
                      Book Online  <BiRightArrow size={25} className="ms-5"></BiRightArrow>    
                  </button> </Link> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
