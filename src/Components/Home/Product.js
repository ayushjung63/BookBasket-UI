import React, { Component } from "react";
import { browserHistory } from 'react-router';
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

export class Product extends Component {
  
constructor(props){
  super(props)
  this.state = {
    open:'',
    search:'',
    book: [],
    seller:[],
    id:this.props.match.params.id,
    isLogin:!!localStorage.getItem('userinfo') || false,
    user:JSON.parse(localStorage.getItem('userinfo')) || null,
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
    this.getBook(this.state.id);
    this.setState({open: false});
    this.setState({seller:this.state.book.addedBy})
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
  getBook = () => {
    let self=this;
    getBookById(self.state.id).then(function (res) {
        self.setState({ book: res.data });
        self.setState({seller:res.data.addedBy});
      })
      .catch((err) => console.log(err));
  };

  billingPage=(e)=>{
    e.preventDefault();
    let self=this;
    window.location.href='/billing'
  }

  orderBooks=(event)=>{
    let self=this;
    if(self.state.isLogin==false){
      window.location.href='/login'
    }
    if(self.state.user ==null || self.state.user==[]|| self.state.user==''){
      window.location.href='/login'
    }else{
    orderBook(self.state.book.id,self.state.user.id,3)
    .then(function (res) {
      if(res==true){
        //console.log(res)
        //console.log(self.state.user)
       // window.location.href=`/userdash/${self.state.user.id}`
        //window.location.href="/"
        window.location.href=`/userorders/${self.state.user.id}`
        //self.props.history.push(`/userorders/${self.state.user.id}`);
      }else{
        alert("Book not available to order or already ordered");
        window.location.href='/'
      }
      })
      .catch((err) => console.log(err));
  }
  }

   showCategory=(e)=>{
    this.setState({showCategory:!this.state.showCategory})
  }

  render() {
    const delivery=this.state.book.delivery;
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
         <p className="display"><a onClick={(e)=>window.location.href='/'}>BookBasket</a> / Book /<b><i>{this.state.book.title}</i></b></p>
          <hr />
        <div className="ccontent">
        
          
        
          <div className="product-content">

            <div className="product-img">
              <img src={this.state.book.image} alt={this.state.book.title} />
               {/*<img src={BookImage} />*/}
            </div>
           
            <div className="product-details">
              <h3>{this.state.book.title}</h3>
              <h5><small>by </small>{this.state.book.author}</h5>
              <p style={{color:"#F25B0A",fontWeight:600}}>{this.state.book.category}</p>
              <p>
               {this.state.book.description}
              
              </p>
            </div>
          </div>
           <hr width="65%" style={{margin:"auto"}} />
          <div className="other-details">
             <div className="seller">
              <h5>Seller Details:</h5>
              <p>Username: {this.state.book?.addedBy?.username}</p> 
              <p>Contact: {this.state.book?.addedBy?.contact}</p> 
              <p>Email: {this.state.book?.addedBy?.email}</p> 
              <p>Address: {this.state.book?.addedBy?.address}</p> 
               
              </div>
            
      

           <div className="order">
              <h5>Product Details:</h5>
              <p>Type: <b>{this.state.book.type}</b></p>
                {(delivery==="AVAILABLE")?
                 <p>Delivery: <b>{this.state.book.delivery}</b></p>
                 :<p></p>  
            }
              <i>Price: NPR. {this.state.book.price}</i>
              <br />
             {/* onClick={(event)=>this.orderBooks(event)}*/}
             
             {(delivery==="AVAILABLE")
             ?<Button onClick={(e)=>this.handleClickOpen(e)} variant="contained" disableElevation color="secondary" className="orderButton" >Order Now</Button>
             :<i><b>Delivery is not available. Please contact the seller for the book.</b></i>
              }

               <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want  to order <b>{this.state.book.title}</b> by <i>{this.state.book.author}</i> ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e)=>this.billingPage()} color="primary">
            Order Now
          </Button>
          <Button onClick={(e)=>this.handleClose(e)} color="secondary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

            </div>

          </div>
       
        </div>
      
        {/* Footer */}
       <Footer />
        {/* END */}
      </div>
    );
  }
}
