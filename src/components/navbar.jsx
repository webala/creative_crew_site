import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {RiYoutubeLine} from 'react-icons/ri';
import {FiInstagram} from 'react-icons/fi';
import {RiFacebookCircleLine} from 'react-icons/ri';
import {FiTwitter} from 'react-icons/fi';

class Navbar extends Component {
    state = {  }
    render() { 
        const linkStyle = {
            color: "#A7039A",
            fontSize: 30
        }
        return ( 
        <nav className="navbar navber-expand-lg navbar-dark bg-dark">
            <a style={linkStyle} href="/">Home</a>
            <a style={linkStyle} href="/videos">Videos</a>
            <a style={linkStyle} target="_blank" 
                href="https://www.youtube.com/channel/UC8w8EaXV7zmwosr52MZBBXA">
                   <RiYoutubeLine /></a>
            <a  style={linkStyle} target="_blank" href="https://www.instagram.com/lehcrewcreative/">
                       <FiInstagram /></a>
            <a style={linkStyle} target="_blank" href="https://www.facebook.com/leh.crew">
                        <RiFacebookCircleLine /></a>
            <a style={linkStyle} target="_blank" href="https://twitter.com/crew_leh?s=09">
                    <FiTwitter /></a>
                    
        </nav> );
    }
}
 
export default Navbar;