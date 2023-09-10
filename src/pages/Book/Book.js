import React from "react";
import "./Book.css";
import Hero from "./../../components/Hero/Hero";
import { BiRightArrow } from "react-icons/bi";


const formInputs = [
  {
    label: 'Name',
    type: 'text',
    id: 'name',
    placeholder: 'Write Your Name',
  },
  {
    label: 'Phone',
    type: 'tel',
    id: 'phone',
    placeholder: 'Write Your Phone',
  },
  {
    label: 'Date',
    type: 'date',
    id: 'date',
    placeholder: 'Select a Date',
  },
  {
    label: 'Time',
    type: 'time',
    id: 'time',
    placeholder: 'Select a Time',
  },
];

export default function Book() {
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
  };

  return (
    <>
      <Hero
        heading="WHERE VIP COMES STANDARD"
        subHeading="BOOK YOUR APPOINTMENT"
      />
      <div className="book mb-5">
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
            <div className="col-md-6 m-auto">
            <form onSubmit={sendEmail}>
      {formInputs.map((input) => (
        <div key={input.id} className="mb-3 d-flex align-items-center">
          <label htmlFor={input.id} className="form-label me-3">
            {input.label}
          </label>
          <input
            type={input.type}
            className="form-control"
            id={input.id}
            placeholder={input.placeholder}
          />
        </div>
      ))}
      {/* <button type="submit" className="btn btn-primary">
        Submit
      </button> */}
    </form>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}
