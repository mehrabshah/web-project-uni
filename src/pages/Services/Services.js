import React from "react";
import "./Services.css";
import { BiRightArrow } from "react-icons/bi";
import { Outlet, Link } from "react-router-dom";

const servicesData = [
  {
    title: "01. THE CUT",
    description:
      "Tell us how you want your hair cut and we’ll take it from there. Snip, snip, clip, clip... “Sir, you are looking studly.",
  },
  {
    title: "02. HOT TOWEL",
    description:
      "Nothing’s better than a hot towel on your face after a fresh hair cut. Lay back and relax, but please, try not to fall asleep.",
  },
  {
    title: "03. THE WASH",
    description:
      "Nobody likes an itchy neck. We wash you down and scrub your scalp with exfoliating menthol based shampoo.",
  },
  {
    title: "04. THE MASSAGE",
    description:
      "Just when you thought it couldn’t get any better, we top off your haircut with a relaxing shoulder massage. You’ll leave one relaxed fellow.",
  },
];

const services = [
  {
    title: "MALE CUT",
    description: "Includes: Wash, Massage, and Hot Towel",
  },
  {
    title: "KIDS CUT",
    description: "10 years and under - Haircut only",
  },
  {
    title: "BEARD TRIM / CUT",
    description: "Includes: Product",
  },
  {
    title: "COLOR",
    description: "Includes: Wash, Massage, and Hot Towel",
  },
  {
    title: "WAX",
    description: "Facial Waxing",
  },
  {
    title: "Facial Waxing",
    description: "Includes: Hot Towel",
  },
];

export default function Services() {
  return (
    <>
      <div className="hero">
        <div className="image-banner">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 m-auto pb-5">
                <div class="banner-content text-center">
                  <h2>WHERE VIP COMES STANDARD </h2>
                  <h1>ONE GROOMED MAN AT A TIME</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="outline pt-3 pb-2">
        <div className="container ps-5 pe-5">
          <div className="row ">
            <h1 className="text-center">SP GENTS SALON</h1>
            <p className="text-center">
              At The SP Giant Salon, our mission is to be the #1 choice for male
              grooming. We do that by providing the highest quality professional
              services at a competitive price. All in an atmosphere built for
              the guys. We take great pride in the value of service you will
              receive!
            </p>
          </div>
        </div>
      </div>

      <div className="cutting">
        <div className="image-banner">
          <div class="container d-flex flex-column justify-content-center align-items-center box p-5">
           <div className="box-inner">
            <div class="row upper">
              <h1 className="text-center">SP GENTS SALON SERVICES</h1>
            </div>
            <hr />
            <div className="row bottom">
              {services.map((service, index) => (
                
                  <div className="col-md-6"  key={index} >
                    <h1>{service.title}</h1>
                    <h2>{service.description}</h2>
                    <hr />
                  </div>
               
              ))}
            </div>
            </div>

          </div>
        </div>
      </div>

      <div className="services pt-3 pb-5">
        <div className="container ps-5 pe-5">
          <div className="row">
            <div className="col-lg-5  align-self-center  left">
              <h1 className="text-center text-lg-start">
                WHERE VIP COMES STANDARD
              </h1>
              <p className="text-center text-lg-start">
                Our salons are built for the fellas! Relax in our lounge which
                features a large TV and free water. During your service you will
                enjoy a classic leather barber chair, your own TV, and wash bowl
                to clean you up.
              </p>
              <Link to="/book"> <button type="button" className="button-width mt-4">
                Book Online{" "}
                <BiRightArrow
                  size={25}
                  className="ms-5 arow-icon"
                ></BiRightArrow>
              </button>   </Link>


            </div>
            <div className="ms-lg-auto col-lg-5 right ">
              <div className="row ">
                {servicesData.map((service, index) => (
                  <div className="col-md-5 box mt-3 me-3" key={index}>
                    <div className="box-inner">
                      <h1>{service.title}</h1>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
