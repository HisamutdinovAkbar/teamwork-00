import React from "react";
import "./Abdumajid.css";
import { AiOutlineTeam } from "react-icons/ai";
import { FaGlobeAsia } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import img from "/public/1750601747_image.png.png";
function Abdumajid() {
  return (
    <>
      <section>
        <div className="der">
          <div className="as">
            <AiOutlineTeam />
            <h3>Happy Clients</h3>
          </div>

          <div className="as">
            <FaGlobeAsia />
            <h3>Country Tour</h3>
          </div>

          <div className="as">
            <FaTrophy />

            <h3>ourism Award </h3>
          </div>

          <div className="as">
            <MdOutlineSupportAgent />

            <h3>Skilled Support</h3>
          </div>
        </div>

        <div className="lo">
          <div className="kim">
            <button className="buton">our Working Process</button>
            <h3>Get 5% off on your first app booking Apps </h3>
            <span>
              <button className="button1">
                {" "}
                <FaApple />{" "}
              </button>
              <button className="button1">
                {" "}
                <FaGooglePlay />
              </button>
            </span>
          </div>

          <div className="ki">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Abdumajid;
