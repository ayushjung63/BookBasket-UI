import React, { Component } from 'react';
import './header.css'
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';

export class Header2 extends Component {
	render() {
    const iconStyle={
      height: "50px",
      width: "50px",
      borderRadius: "50%",
      display: "flex",
      justifyContent:"center",
      margin: "5px"
    }
    
		return (
			<div>
      <div className="header2">
		
			<div className="social">
              <p>
                <span><FacebookIcon /> </span>
                <span><InstagramIcon  /> </span>
                <span><WhatsAppIcon /> </span>
                <span><GitHubIcon /> </span>
              </p>
              <p><PhoneIcon />+977-987654321</p>
              <p><MailIcon />info@bookbasket.com</p>
            </div>
            <div className="buttons">
              <p>Be a part of our platform? </p>
              <button class="btn-login" onClick={(e)=>window.location.href='/login'}>Login</button>
              <button  class="btn-register" onClick={(e)=>window.location.href='/register'}>  Register</button>
            </div>
          </div>
          </div>
        
	
		);
	}
}
