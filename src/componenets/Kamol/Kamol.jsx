import React from "react";
import "./Kamol.css";
import img1 from "/public/img1.png";
import img2 from "/public/img2.png";
import { BiWorld } from "react-icons/bi";
import { AiOutlineSafety } from "react-icons/ai";
import { IoPricetagsOutline } from "react-icons/io5";

function Kamol() {
  return (
    <>
      <div className="section2">
        <div className="section2-left">
          <button>Explore the world</button>
          <p>Here is Great opportunity for adventure & travels</p>
          <p>
            Are you tired of the typical tourist destinations and looking to
            step out of your comfort zone? Adventure travel may be the perfect
            solution for you! Here are four.
          </p>
          <img src={img1} alt="img" />
        </div>
        <div className="section2-middle">
          <div className="middle1">
            <BiWorld className="icon" />
            <ul>
              <li>
                <p className="p1">Best Travel Agency</p>
              </li>
              <li>
                <p className="p2">
                  Are you tiredthe typical tourist destina looking step
                  outyourcomfort.
                </p>
              </li>
            </ul>
          </div>
          <div className="middle2">
            <AiOutlineSafety className="icon" />
            <ul>
              <li><p className="p1">Secure Journey With Us</p></li>
              <li><p className="p2">Are you tired of the typical tourist
destinatio and looking step out of your
comfort.</p></li>
            </ul>
          </div>
          <div className="middle3">
            <IoPricetagsOutline className="icon" />
            <ul>
              <li><p className="p1">Friendly price</p></li>
              <li><p className="p2">Are you tiredthe typical tourist destina
looking step outyour comfort.</p></li>
            </ul>
          </div>
        </div>
        <div className="section2-right">
          <img src={img2} alt="" />
        </div>
      </div>
    </>
  );
}

export default Kamol;
