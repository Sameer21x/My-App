import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume.pdf';

const Services = () => {
  return (
    <div className="services">
        {/* #left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>services</span>
            <spane>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            </spane>
            <a href={Resume} downlaod>
            <button className='button s-button'>Download CV</button>
            </a >
            <div className="blur s-blur1" style={{background: "#CDF7FF"}}></div>

        </div>
    {/* #right side */}
        <div className="cards">
            <div style={{left:'14rem'}}><Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail= {"Figma, Sketch, Adbode XD, Photoshop"}
                />
                </div>

                <div style={{top:'12rem',left:'-5rem'}}><Card
                emoji = {Glasses}
                heading = {'Developer'}
                detail= {"HTML, CSS, React, Javascript"}
                />
                </div>

                <div style={{top:'19rem',left:'13rem'}}><Card
                emoji = {Humble}
                heading = {'UI/UX'}
                detail= {"lorem ipsumahb jbshdbhasbdhh asbdha djhw hbashdgayhsbd"}
                />
                </div>
                <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services