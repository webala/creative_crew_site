import React, { Component } from 'react';
import {RiYoutubeLine, RiWhatsappFill} from 'react-icons/ri';
import {FiInstagram} from 'react-icons/fi';
import {RiFacebookCircleLine} from 'react-icons/ri';
import {FiTwitter} from 'react-icons/fi';

class About extends Component {
    
    render() {
        const linkStyle = {
            color:"blue",
            fontSize: 30,
        } 
        const headerStyle = {
            color: "black",
            textAlign: "center",
            fontFamily: "Courier",
            fontSize: 80
        }
        const parStyle ={
            textAlign: "center",
            fontSize: 20
        }
        const appStyle = {
            textAlign: "center",
            color: "green"
        }
        return ( 

        <div>
            <h1 style={headerStyle}><u>Leh Creative Crew</u></h1>
            <h2 style={headerStyle}>About us</h2>
            <p style={parStyle}>An entertainment crew deicated to producing amaizing content for our viewers.<br/>Contact us via whatsapp for events 
                and product promotions
            </p>
            <div style={appStyle}>
                <RiWhatsappFill/><p>+254791055897</p>
            </div>
            <p style={parStyle}>Follow us for more content</p>
            <div style={{textAlign:"center"}}>
            <a style={linkStyle} target="_blank" className="m-2"
                href="https://www.youtube.com/channel/UC8w8EaXV7zmwosr52MZBBXA">
                   <RiYoutubeLine /></a>
            <a  style={linkStyle} target="_blank" className="m-2"
                href="https://www.instagram.com/lehcrewcreative/" > 
                       <FiInstagram /></a>
            <a style={linkStyle} target="_blank" className="m-2"
                href="https://www.facebook.com/leh.crew">
                        <RiFacebookCircleLine /></a>
            <a style={linkStyle} target="_blank" className="m-2"
                href="https://twitter.com/crew_leh?s=09">
                    <FiTwitter /></a>
            </div>
        </div> );
    }
}
 
export default About;