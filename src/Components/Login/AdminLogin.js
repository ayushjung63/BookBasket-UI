import React, { Component } from 'react';
import './login.css';
import {adminLogin} from '../../apiCall/Login.js';

export class AdminLogin extends Component {
	 constructor(props){
		super(props);
		this.state={
			username:'',
			password:'',
			error:""
		}
	}

	handleChange=(event)=>{
		this.setState({[event.target.name]:event.target.value});
	}

	handleSubmit=(event)=>{
		event.preventDefault();
		var date=Date.now()

		adminLogin(this.state.username,this.state.password,3).then((res)=>{
			if(res==false){
				window.location.reload();
				this.setState({error:"Bad Credentials. Please try again with valid username and password"})
			}else{
			localStorage.setItem("admininfo",true);
			window.location.href='/admindash';
			console.log(res);
			console.log(localStorage.getItem('admininfo'));	
		}
		}).catch((err)=>{
			if(err.response.status===404){
				this.setState({username:'',password:''});
				this.setState({error:"Bad Credentials. Please try again with valid username and password"})
			}
		}
		)
		// if (this.state.username=='admin') {
		// 	window.location.href='/admindash';
		// 	localStorage.setItem("admininfo",true);
		// }
	}
	


    render() {
        return (
            <div>
			<div class="login">
			<h1 align="center">ADMIN Login</h1>
			<p align="center" class="pheader">Enter login details to get access</p>
			<p style={{color:'red'}}>{this.state.error}</p>
		<form onSubmit={(event)=>this.handleSubmit(event)} >
			<p class="pinput">
			Username
			<input type="text" name="username" class="inputData" placeholder="username / email address" 
			onChange={(e)=>this.handleChange(e)} />
			</p>
			<p class="pinput">
			Password
			<input type="password" name="password" class="inputData" placeholder="password" 
			onChange={(e)=>this.handleChange(e)} />
			</p>
			<p>
				<button class="login-btn" type="submit" >Login</button>
			</p>
			</form>
		</div>
	</div>
        );
    }
}
export default AdminLogin;