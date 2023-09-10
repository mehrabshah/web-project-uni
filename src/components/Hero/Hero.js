import React from 'react'
import "./Hero.css"
export default function Hero(props) {
  return (
    <>
       <div className="heros">
        <div className="image-banner">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 m-auto  box">
                <div class="banner-content text-center pt-3">
                  <h2>{props.heading}</h2>
                  <h1>{props.subHeading}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
