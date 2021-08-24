import React, { Component } from "react";
import createHistory from 'history/createBrowserHistory'
import "./header.css";
import {Header2} from "./Header2.js";
import LoggedHeader from "./LoggedHeader.js";
import BannerImage from "./banner.jpg";
import Filler from "./filler.jpg";
import Footer from "./Footer.js";
import BookImage from "./book-img.jpg";
import { availableBooks} from "../../apiCall/BookAPI";
import { otherBooks} from "../../apiCall/BookAPI";
import { Button } from '@material-ui/core'
import Dummy  from './Dummy.js';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';



export class Homepage extends Component {
 
  constructor(props){
  super(props)
  this.state = {
    search:'',
    showCategory:false,
    books: [],
    isLogin:localStorage.getItem('userinfo') || false,
    user:JSON.parse(localStorage.getItem('userinfo')) || null,
    userId:'',
  }
  }
  componentDidMount() {
    const history = createHistory();
    if (history.location.state && history.location.state.transaction) {
        let state = { ...history.location.state };
        delete state.transaction;
        history.replace({ ...history.location, state });
    }
    
     this.getallBooks();
  }

  handleCategory=(key,event)=>{
      window.location.href=`/category/${key}`
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
  

  getallBooks = () => {
    let self = this;
    if (this.state.isLogin==false){
       console.log("books available")
      availableBooks()
      .then(function (res) {
        console.log(res.data)
        self.setState({ books: res.data });
      })
      .catch((err) => console.log(err));
    }else{
     console.log("books other than mine")
      otherBooks(self.state.user.id)
      .then(function (res) {
        console.log(res.data)
        self.setState({ books: res.data });
      })
      .catch((err) => console.log(err));
    } 
  };

  showCategory=(e)=>{
 this.setState({showCategory:!this.state.showCategory})
  }

 

  render() {
    return (
      <div>
        <div className="header">
        <Header2 />
       
        {/* {(() => {
        if (this.state.isLogin) {
          return (
            <div>
             <LoggedHeader />
            </div>
          )
        }else {
          return (
            <div>  
            <Header2/> 
            </div>
          )
        }
      })()} */}
     

          <div className="header1">
 <h1> <a style={{ cursor:"pointer" }} onClick={()=>window.location.href='/'}> Book Basket</a></h1>
            <div></div>
         
            <div className="search">
               <p style={{color:'white'}}>{this.state.error}</p>
              <input type="text" onChange={(event)=>this.handleChange(event)} required name="search" className="keyword" placeholder="Search book by title, author, keyword" /> 
              <input type="submit" onClick={(event)=>this.handleSearch(event)} value="Search" className="src-btn" />
            </div>
          </div>

         
       </div>
		{/* END */}
    
		{/* Banner */}
          <div className="image">
            <img src={BannerImage} />
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
 {this.state.showCategory?<div class="dropdown-content">
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
    {(() => {
        if(this.state.books==[]||this.state.books=='') {
          return (
            <div>
            <Dummy />
            </div>
          )
        }else {
          return (
            <div>
		<div className="ccontent">


    
      <div className="book-content">
        
            {this.state.books.reverse().map((item)=>
        <div className="book-card">
          <div className="book-img">
              <img className="book-img-1" src={item.image} alt={item.title} />
          </div>
          <div className="book-data">
            <p><b>{item.title}</b></p>
            <p>Author :{item.author}</p>
            <p><i>NPR.{item.price}</i></p>
            <button class="view"><a style={{ cursor:"pointer" }} onClick={(e)=>window.location.href=`/pr/${item.id}`}>View More</a></button>
          </div>
        </div>
      
      )}
              </div>
        </div>
            </div>
          )
        }
      })()}

    
			
      {/* Content}

        

        {/* Footer */}
        <Footer />
		{/* END */}
	  </div>
    );
  }
}
export default Homepage;
