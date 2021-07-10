import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';

export default class LineBar extends Component {
	render() {
		return (
			<div>
				 <div class="linebar">
    <div class="dropdown">
    <button class="dropbtn" onClick={(e)=>this.showCategory(e)}>Categories&nbsp;
     <MenuIcon />
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
			</div>
		);
	}
}
