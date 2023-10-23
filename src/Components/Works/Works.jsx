import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
  return (
    <div className="works">
        <div className="awesome">
            <span>Works for all these</span>
            <span>Brands & Clients</span>
            <spane>
                Lorem ipsum dolor sit, 
                <br />
                amet consectetur adipisicing elit.
                <br />
                amet consectetur adipisicing elit. 
                <br />
                amet consectetur adipisicing elit.
            </spane>
          
            <button className='button s-button'>Hire Me</button>
           
            <div className="blur s-blur1" style={{background: "#CDF7FF"}}></div>

        </div>

        {/* right side */}
        <div className="w-right">
              <div className="w-maincircle">
                <div className="w-seccircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-seccircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-seccircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-seccircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-seccircle">
                    <img src={Facebook} alt="" />
                </div>
              </div>

              {/* background circles */}
              <div className="w-backcircle bluecircle"></div>
              <div className="w-backcircle yellowcircle"></div>


        </div>
    </div>
  )
}

export default Works