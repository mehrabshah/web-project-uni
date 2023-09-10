import React from "react";
import "./Blog.css";
import { BiRightArrow } from "react-icons/bi";
import Hero from "./../../components/Hero/Hero";
export default function Blog() {
  const imageNames = [
    "cutting1.jpeg",
    "cutting2.jpeg",
    "cutting3.jpeg",
    "cutting4.jpeg",
  ];
  return (
    <>
      <Hero heading="WHERE VIP COMES STANDARD" subHeading="IMAGES SALOON" />
      <div className="blog mb-5">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center  upper ">
            <p className=" text-center pt-4">
              Download our Mobile App for easy booking! Go to your App Store and
              search for The Man Salon Mobile and look for our logo, click to
              download. 
            </p>
            <button type="button" className="button-width">
              Book Online{" "}
              <BiRightArrow size={25} className="ms-5"></BiRightArrow>
            </button>
          </div>

          <div className="row mt-5">
            {imageNames.map((imageName, index) => (
              <div className="col-md-6" key={index}>
                <img
                  src={`./images/${imageName}`}
                  className="img-fluid mt-5"
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
