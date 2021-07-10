import React, { Component } from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';

export default class Footer extends Component {
	render() {
		return (
			<div>
				<div class="footer">
          <div class="about-us">
            <h3>ABOUT BOOKBASKET</h3>
            <p>
             Book Basket is an online platform where a person can trade books and even borrow books for
            certain period of time in reasonable price. The platform is focused more in borrowing books
            so that people don’t need to buy books if they want to read it and keep it for a short period of
            time. The platform will use both used and new books.

            </p>
          </div>
          <div class="quick-links">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Categories</li>
              <li>Latest Books</li>
              <li style={{cursor:"pointer"}} onClick={(e)=>window.location.href='/sell'}>Buy Books</li>
              <li style={{cursor:"pointer"}} onClick={(e)=>window.location.href='/borrow'} >Borrow Books</li>
             
            </ul>
          </div>
          <div class="contact">
            <h3 align="right">CONTACT US</h3>
				<ul>
					<li style={{textAlign:"right"}}><PhoneIcon/> +977-987654321</li>
					<li style={{textAlign:"right"}}><MailIcon/> bookbasket@gmail.com</li>
					<li style={{textAlign:"right"}}><FacebookIcon /> <InstagramIcon /> <WhatsAppIcon /> <GitHubIcon/></li>
				</ul>
          </div>
        </div>
         <div class="copyright">
          <p align="center">&copy;Copyright Ayush Basnet 2021</p>
          </div>
			</div>
		);
	}
}
