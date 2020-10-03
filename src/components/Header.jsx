import React, { Component } from 'react';
import logo from '../logo.jpg';
import image from '../creativeimg.jpeg';


class Header extends Component {
    state = {  }
    
    render() { 
        const headerStyle = {
            textAlign: "center",
            color: "#A7039A",
            fontSize:90
        }
        return ( <div style={{height: "420px", backgroundImage:`url(${image})`}}>
            
           
        </div> );
    }
}
 
export default Header;