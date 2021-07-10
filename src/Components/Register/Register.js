import React, { Component } from 'react';
import './register.css';
import {registerUser} from '../../apiCall/Login.js';
import Logo from '../Login/logo.jpg'

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export class Register extends Component {
	constructor(props){
		super(props);
		this.state={
				'username':'',
				'password':'',
				'address':'',
				'contact':'',
				'email':'',
				"error":'',
				"usernameError":"",
				"serverError":""
				}
		};
		
	handleChange=(event)=>{
		this.setState({[event.target.name]:event.target.value});
  		this.setState({error:''})
  	}
  	
  	handleValidation=()=>{
  		
  		if(isNaN(this.state.contact)==true){
  			this.setState({error:"Contact cannnot contain aphabets or symbols"})
  			return false;
  		}else if(this.state.contact.length!=10){
  			this.setState({error:"Contact must be 10 digits"})
  			return false;
  		}else if(this.checkWhiteSpace(this.state.username)==false){
  			this.setState({usernameError:"Username cannot contain spaces"})
  			return false;
  		}
  		else{
  			this.setState({error:''})
  		}
  		return true;
  	}

  	checkWhiteSpace=(word)=>{
  		if(word.indexOf(' ')>=0){
  			return false;
  		}
  		return true
  	}

	handleSubmit=(event)=>{
		event.preventDefault();
		console.log(this.checkWhiteSpace(this.state.username))
		console.log(this.handleValidation())
		if(this.handleValidation()){
		
		if(this.state.error==''){registerUser(this.state.username,this.state.password,this.state.address,this.state.contact,this.state.email,3).then((res)=>{
			console.log(res);
			console.log(localStorage.getItem('userInfo'));	
			window.location.href='/login'
		}).catch((err)=>{
			// if(err.response.status===404){
			// 	this.setState({username:'',password:''});
			// }
			this.setState({serverError:"Could not connect to server. Try again Later"})
		}
		)
	}
}
}


	render() {
		return (
			<div>
				<div class="login">
			
			<img src={Logo} style={{width:'20%',borderRadius:"50%",cursor:"pointer"}} onClick={(e)=>window.location.href='/'} /><br/>
			<h3 align="center" class="pheader2">
			Be a part of our platform?
			</h3>
				<p style={{color:"red"}}>{this.state.serverError}</p>	
				<form onSubmit={(event)=>this.handleSubmit(event)}>
			<p>
				{/*Username:*/}<input type="text" required name="username" placeholder=" username" onChange={(e)=>this.handleChange(e)}  />
				<p>{this.state.usernameError}</p>
			</p>
			<p>
				{/*Address:*/}<input type="text" required name="address" placeholder=" address"  onChange={(e)=>this.handleChange(e)} />
			</p>
			<p>
				{/*Contact:*/}<input type="text" required name="contact" placeholder=" contact" onChange={(e)=>this.handleChange(e)}  />
				<p>{this.state.error}</p>
			</p>
			<p>
			{/*Email:*/} 
			<input type="text" required name="email" class="inputData" placeholder=" email address"  onChange={(e)=>this.handleChange(e)} />
			</p>
			<p>
{/*			Password*/}
			<input type="password" required name="password" class="inputData" placeholder=" password" onChange={(e)=>this.handleChange(e)}  />
			</p>
			<p>
				<span class="pheader"> Already have an account? <a onClick={()=>window.location.href='/login'} >Loginhere</a></span>
				<button class="login-btn" type="submit"  >Sign Up</button>
			</p>
		</form>
	</div>
			</div>
		);
	}
}
export default Register;
