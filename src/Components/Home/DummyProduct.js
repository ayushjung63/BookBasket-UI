import React, { Component } from "react";
import "./header.css";
import BookImage from "./book-img.jpg";
import { getBookById } from "../../apiCall/BookAPI";
import { orderBook } from "../../apiCall/OrderAPI";
import {Header2} from "./Header2.js";
import Footer from "./Footer.js";
import LoggedHeader from "./LoggedHeader.js";
import { Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//const theTheme = createMuiTheme({ palette: { primary: grey } })

export default class DummyProduct extends Component {
  
constructor(props){
  super(props)
  this.state = {
    open:'',
    search:'',
  }
  }



   handleClickOpen = (e) => {
    e.preventDefault();
  this.setState({open:true})
  };
   handleClose = (e) => {
    e.preventDefault();
       this.setState({open:false})
  };
  handleCategory=(key,event)=>{
      window.location.href=`/category/${key}`
  }

  componentDidMount() {
    this.setState({open: false})
   
  }
   handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value});
  }

  handleSearch=(event)=>{
    if(this.state.search==''){
      window.location.href='/srch'
    }else{
      window.location.href=`/srch/${this.state.search}`
    }
    }
  
   showCategory=(e)=>{
 this.setState({showCategory:!this.state.showCategory})
  }

  render() {
    return (
      <div>
        <div className="header">
        {(() => {
        if (this.state.isLogin) {
          return (
            <div>
             <LoggedHeader />
            </div>
          )
        }else {
          return (
            <div> <Header2/></div>
          )
        }
      })()}

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


         <div class="linebar">
    <div class="dropdown">
    <button class="dropbtn" onClick={(e)=>this.showCategory(e)}> <MenuIcon />Categories&nbsp;
    
    </button>
  <button class="dropbtn"><a onClick={(e)=>window.location.href='/sell'}><ShoppingCartIcon/> Buy Books</a></button>
  <button class="dropbtn"><a onClick={(e)=>window.location.href='/borrow'}><ThumbsUpDownIcon/> Borrow Books</a></button>
  </div> 
  {console.log(this.state.showCategory)}
 {this.state.showCategory?<div class="dropdown-content2">
         <ul class="grid-container">
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("College Books",event)}>College Books</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("School Books",event)}>School Books</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Action and Adventure",event)}>Action and Adventure</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Classics",event)}>Classics</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Comic",event)}>Comic</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Fantasy",event)}>Fantasy</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Historical Fiction",event)}>Historical Fiction</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Horror",event)}>Horror</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Romance",event)}>Romance</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Science Fiction (Sci-Fi)",event)}>Science Fiction (Sci-Fi)</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Short Stories",event)}>Short Stories</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Biographies and Autobiographies",event)}>Biographies and Autobiographies</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Poetry",event)}>Poetry</a></li>
           </ul>
   </div>:''}
   
</div>

        {/* Content */}
         <p className="display"><a onClick={(e)=>window.location.href='/'}>BookBasket</a> / Book /<b><i>Java</i></b></p>
          <hr />
        <div className="ccontent">
        
          <div className="product-content">
            <div className="product-img">
               {<img src={BookImage} />}
            </div>
           
            <div className="product-details">
              <h3>OOP in Java</h3>
              <h5><small>Author: </small>Ayush Basnet</h5>
              <p className="cat-show"> <a onClick={(event)=>this.handleCategory("College Books",event)}> College Books</a></p>
              <p>
              Java is a class-based, object-oriented programming language that is designed 
              to have as few implementation dependencies as possible. It
               is a general-purpose programming language intended to let application developers write once,
               run anywhere (WORA),[16] meaning that compiled Java code can run on all platforms that support 
               Java without the need for recompilation.[17] Java applications are typically compiled to bytecode 
               that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. 
              The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them.
              </p>
            </div>
           </div>
           </div>
          <hr width="65%" style={{margin:"auto"}} />
           <div className="other-details">

             <div className="seller">
               <h5>Seller Details:</h5>
               <p>Ayush Basnet</p>
               <p>+977-987654321</p>
               <p>seller@gmail.com</p>
             </div>
              <div className="order">
              <p><small>Type: </small><b>Borrow</b></p>
              <p><small>Price: </small>NPR.299 </p>
              <p>Delivery: <b>Available</b></p>
              <br />
             {/* onClick={(event)=>this.orderBooks(event)}*/}
             
              <Button onClick={(e)=>this.handleClickOpen(e)} variant="outlined" color="primary" className="orderButton" >Order Now</Button>
              
               <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          {/*<DialogContentText id="alert-dialog-description">
            Are you sure you want  to order <b>{this.state.book.title}</b> by <i>{this.state.book.author}</i> ?
          </DialogContentText>*/}
        </DialogContent>
        <DialogActions>
          <Button onClick={(e)=>this.orderBooks(e)} color="primary">
            Order Now
          </Button>
          <Button onClick={(e)=>this.handleClose(e)} color="secondary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

            </div>


           </div>

        {/* Footer */}
       <Footer />
        {/* END */}
      </div>
    );
  }
}
