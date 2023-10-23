import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimo from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hey! I Am</span>
                <span>Sam David</span>
                <span>Experienced Front-End Developer: 
                     Elevating Web Design and Development with Expertise, 
                     Delivering Exceptional Quality.</span>
            </div>
            <button className=" button i-button">Hire Me</button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={Linkedin} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
                <img src={vector1} alt="" />
                <img src={vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimo} alt="" />
                <div style={{top:'-5%', left:'50%'}}>
                  <FloatingDiv image={crown} txt1="Web" txt2="Developer"/>
                </div>
                <div style={{top:'18rem', left:'-5rem'}}>
                <FloatingDiv image={thumbup} txt1="Clients" txt2="Best Choice"/>
                </div>

                <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
                <div className="blur" style={{background: "#C1F5FF", top: '17rem', width:'21rem', height: '11rem', left:'-10rem'}}></div>

                
        </div>
                
    </div>
  )
}

export default Intro