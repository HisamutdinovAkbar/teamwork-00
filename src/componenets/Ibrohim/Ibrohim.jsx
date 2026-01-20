import "./Ibrohim.css";
import card from '/public/card.png'
import card1 from '/public/card1.png'
import card2 from '/public/card2.png'
import { IoTime } from "react-icons/io5";
import { BsCalendarDateFill } from "react-icons/bs";`<BsCalendarDateFill />`

function Ibrohim() {
  return (
    <>
    <div className="sectoin6">
      <span>Tips and Inspiration</span>
    <h1>Latest News & Articles</h1>
    <p>Are you tired of the typical tourist destinations and looking
to step out of your comfort zonetravel</p>
    </div>
    <div className="Cards">
      <div className="Card">
        <img src={card} alt="" />
        <span>Spiritual & Wellness</span>
        <h1>Coastal Cruise: Seaside Tours
for Beach Buffs</h1>
        <p><BsCalendarDateFill /> 15th Jan, 2025</p>
        <p> <IoTime /> 4 min in read</p>
      </div>
      <div className="Card">
        <img src={card1} alt="" />
        <span>Urban & Culture</span>
        <h1>10 Safest Destinations for
Solo Female</h1>
        <p><BsCalendarDateFill /> 15th Jan, 2025</p>
        <p> <IoTime />  10 min in read</p>
      </div>
      <div className="Card">
        <img src={card2 } alt="" />
        <span>      Polar & Glacier</span>
        <h1>Three of the Best Day Trips
to Make from Francisco</h1>
        <p><BsCalendarDateFill /> 15th Jan, 2025</p>
        <p><IoTime />  4 min in read</p>
      </div>
    </div>
    </>
  );
}

export default Ibrohim;
