import React, { Component } from 'react';
import './header.css'
import HomeIcon from '@material-ui/icons/Home';


export class LoggedHeader extends Component {
  constructor(props){
  super(props)
  this.state = {
    user:JSON.parse(localStorage.getItem('userinfo')),
  }
}
	render() {
		return (
			<div>
				 <div className="header2">
            <div className="buttons">
              <button class="sup" onClick={(e)=>window.location.href=`/userdash/${this.state.user.id}`}>
              <HomeIcon/>View Dashboard
              </button>
     
            </div>
        
        </div>
			</div>
		);
	}
}
export default LoggedHeader;
