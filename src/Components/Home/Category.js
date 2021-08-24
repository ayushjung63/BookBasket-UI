import React, { Component } from "react";
import "./header.css";
import BookImage from "./book-img.jpg";
import {Header2} from "./Header2.js";
import Footer from "./Footer.js";
import LoggedHeader from "./LoggedHeader.js";
import { getBooksByCategory } from "../../apiCall/BookAPI";
import { orderBook } from "../../apiCall/OrderAPI";
import { Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import EmptyBooks  from './EmptyBooks.js';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';

export class Category extends Component {
  
constructor(props){
  super(props)
  this.state = {
    book: [],
    search:'',
    category:this.props.match.params.category,
    user:localStorage.getItem('userinfo') || null,
  }
  }

  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value});
  }
  handleCategory=(key,event)=>{
      window.location.href=`/category/${key}`
  }
  handleSearch=(event)=>{
    window.location.href=`/srch/${this.state.search}`
  }
  
  componentDidMount() {
    this.getBook();
    console.log(this.state.book);
  }

  getBook = () => {
    let self=this;
    getBooksByCategory(this.state.category).then(function (res) {
        self.setState({ book: res.data });
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  };
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
            <div>  <Header2/></div>
          )
        }
      })()}

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
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Science Fiction (Sci-Fi)",event)}>Science Fiction</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Short Stories",event)}>Short Stories</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Biographies and Autobiographies",event)}>Biographies and Autobiographies</a></li>
                   <li class="grid-item"><a onClick={(event)=>this.handleCategory("Poetry",event)}>Poetry</a></li>
           </ul>
   </div>:''}
   
</div>

        {/* Content */}
       
         <p className="display"><a onClick={(e)=>window.location.href='/'}>BookBasket</a> / Category / <b><i>{this.state.category}</i></b></p>
         <hr/>
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
							<img src={item.image} style={{maxHeight:"100%"}} />
					</div>
					<div className="book-data">
						<p>{item.title}</p>
						<p>{item.price}</p>
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
export default Category;