import React from 'react'
import "./Akbar.css"
import img1 from "/public/img1.png";
import img2 from "/public/img2.png";
import img3 from "/public/img3.png";
import AkbarCard from "../../shared/AkbarCard/AkbarCard";
function Akbar() {
  return (
    <>
      <div className="Sect-1">
        <div className="left-div">
          <p className='pp'>our Working Process</p>
          <h2>Book tickets easily with
            just a few steps</h2>
          <p>Are you tired of the typical tourist destinations and looking to step out of your</p>
          <button>Read More</button>
        </div>
        <div className="right-div">
          <div className="card">
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <h4>Find Your Travel Destination</h4>
              <p>Do you want to relax on the beach, explore a new city, or go on an adventure?</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <h4>Book Your Ticket</h4>
              <p>Do you want to relax on the beach, explore
                a new city, or go on an adventure?</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={img3} alt="" />
            </div>
            <div>
              <h4>Award winning support</h4>
              <p>Do you want to relax on the beach, explore a new city, or go on an adventure?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing">
        <AkbarCard
          title="Basic"
          desc="Nam vel lacus eu nisl bibendum."
          price="299"
          features={[
            "Advanced Segmentation",
            "Travel Tour Guideline",
            "Comparative Reporting",
            "Insurance Travel Quote",
            "Ticket Booking Area",
            "24/7 Customer Support",
          ]}
        />

        <AkbarCard
          title="Standard"
          desc="Nam vel lacus eu nisl bibendum."
          price="799"
          features={[
            "Advanced Segmentation",
            "Travel Tour Guideline",
            "Comparative Reporting",
            "Insurance Travel Quote",
            "Ticket Booking Area",
            "24/7 Customer Support",
          ]}
        />

        <AkbarCard
          title="Cooperate"
          desc="Nam vel lacus eu nisl bibendum."
          price="999"
          features={[
            "Advanced Segmentation",
            "Travel Tour Guideline",
            "Comparative Reporting",
            "Insurance Travel Quote",
            "Ticket Booking Area",
            "24/7 Customer Support",
          ]}
        />
      </div>
    </>

  )

}

export default Akbar