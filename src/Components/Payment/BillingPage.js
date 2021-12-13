import React, { Component } from 'react'
import Footer from '../Home/Footer'
import { Header2 } from '../Home/Header2'
import './billing.css'
import EsewaLogo from './Esewa.jpeg';

export default class BillingPage extends Component {
  handleEsewa=(e)=>{
    e.preventDefault();

  }  
  render() {
        return (
            <div>
                <div className="header">
                <Header2 />

           <div className="header1">
            <h1 className="bookbasket"> <a style={{ cursor:"pointer" }} onClick={()=>window.location.href='/'}> Book Basket</a></h1>
            <div></div>
            <div className="search">
              <input type="text" onChange={(event)=>this.handleChange(event)} required name="search" className="keyword" placeholder="Search book by title, author, keyword" /> 
              <input type="submit" onClick={(event)=>this.handleSearch(event)}  value="Search" className="src-btn" />
            </div>
          </div>
            </div>
            {/* END */}

            <div className='billing'>
            <div class="row">
  <div class="col-75">
    <div class="container">
      <form action="/action_page.php">

        <div class="row">
          <div class="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Enter your full name" /><br/>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="Enter your email address" /><br/>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="Enter your address" /><br/>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="Enter your city" /> <br/>

          </div>
          <div class="col-50">
            <h3>Payment</h3>
            <button className='cash'>Cash in Delivery</button>
            <img className='esewa' src={EsewaLogo} onClick={(e)=>this.handleEsewa(e)} />
          </div>

        </div>
      </form>
    </div>
  </div>

</div>
            </div>
            <Footer />
            </div>
        )
    }
}
