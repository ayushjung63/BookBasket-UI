import React, { Component } from "react";
import "./header.css";
import BookImage from "./book-img.jpg";
import {Header2} from "./Header2.js";
import Footer from "./Footer.js";
import LoggedHeader from "./LoggedHeader.js";
import { getBooksByType } from "../../apiCall/BookAPI";
import { orderBook } from "../../apiCall/OrderAPI";
import { Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import EmptyBooks  from './EmptyBooks.js';

export class Sell extends Component {
  
constructor(props){
  super(props)
  this.state = {
    search:'',
    book: [],
    sell: [],
    user:JSON.parse(localStorage.getItem('userinfo')) || null,
    isLogin:localStorage.getItem('userinfo') || false
  }
  }
  
  handleSearch=(event)=>{
    if(this.state.search==''){
      window.location.href='/srch'
    }else{
      window.location.href=`/srch/${this.state.search}`
    }
    }

  componentDidMount() {
    this.getBook();
    this.getOthers();
  }

  getOthers=()=>{
    for(var i=0;i<this.state.book.length;i++){
      if(this.state.book[i].addedBy.id!==this.state.user.id){
        this.setState({sell:this.state.book[i]});
      }
    }
  }

    showCategory=(e)=>{
    this.setState({showCategory:!this.state.showCategory})
  }
  handleCategory=(key,event)=>{
      window.location.href=`/category/${key}`
  }

  getBook = () => {
    let self=this;
    if(self.state.isLogin==false){
      getBooksByType("Sell",0).then(function (res) {
        self.setState({ book: res.data });
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }else{
    getBooksByType("Sell",this.state.user.id).then(function (res) {
        self.setState({ book: res.data });
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  };
}
  handleSearch=(event)=>{
    window.location.href=`/srch/${this.state.search}`
  }

  render() {
    return (
      <div>
       <div className="header">
       <Header2 />
          <div className="header1">
            <h1> <a style={{ cursor:"pointer" }} onClick={()=>window.location.href='/'}> Book Basket</a></h1>
            <div></div>
            <div className="search">
              <input type="text" onChange={(event)=>this.handleChange(event)} name="search" className="keyword" placeholder="Search book by title, author, keyword" /> 
              <input type="submit" onClick={(event)=>this.handleSearch(event)}  value="Search" className="src-btn" />
            </div>
          </div>

         
        </div>
        {/* END */}

         <div class="linebar">
    <div class="dropdown">
    <button class="dropbtn" onClick={(e)=>this.showCategory(e)}>  <MenuIcon />Categories&nbsp;
   
    </button>
  <button class="dropbtn"><a onClick={(e)=>window.location.href='/sell'}><ShoppingCartIcon/> Buy Books</a></button>
  <button class="dropbtn"><a onClick={(e)=>window.location.href='/borrow'}><ThumbsUpDownIcon/> Borrow Books</a></button>
  </div> 
  {console.log(this.state.showCategory)}
 {this.state.showCategory?<div class="dropdown-content2">
         <ul class="grid-container">
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("College Books",event)}>College Books</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("School Books",event)}>School Books</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Programming",event)}>Programming</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Classics",event)}>Classics</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Comic",event)}>Comic</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Fantasy",event)}>Fantasy</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Historical Fiction",event)}>Historical Fiction</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Horror",event)}>Horror</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Romance",event)}>Romance</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Science Fiction (Sci-Fi)",event)}>Science Fiction (Sci-Fi)</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Finance",event)}>Finance</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Biographies and Autobiographies",event)}>Biographies and Autobiographies</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Novels",event)}>Novels</a></li>
           </ul>
   </div>:''}
   
</div>

        {/* Content */}
       
           <p className="display"><a onClick={(e)=>window.location.href='/'}>BookBasket</a> / <b><i>Buy</i></b></p>
          <hr />
          {(() => {
        if(this.state.book==[]||this.state.book=='') {
          return (
            <div>
            <EmptyBooks />
            </div>
          )
        }else {
          return (
          <div className="sell-content">
        
      {this.state.book.map((item)=>
        <div className="book-card">
          <div className="book-img">
              <img src={item.image} />
          </div>
          <div className="book-data">
          <p><b>{item.title}</b></p>
            <p><i>Rs.{item.price}</i></p>
            <button class="view"><a style={{ cursor:"pointer" }} onClick={(e)=>window.location.href=`/pr/${item.id}`}>View More</a></button>
          </div>
        </div>
        )}
      </div>
      )
        }
      })()}
			
		
        {/* Footer */}
       <Footer />
        {/* END */}
      </div>
    );
  }
}
export default Sell;