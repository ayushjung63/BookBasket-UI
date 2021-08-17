import React, { Component } from 'react';
import './login.css';
import {addData} from '../../apiCall/Login.js';
import Logo from './logo.jpg'

export class Login extends Component {
	 constructor(props){
		super(props);
		this.state={
			errors:'',
			username:'',
			password:''
		}
	}

	handleChange=(event)=>{
		
		this.setState({[event.target.name]:event.target.value});
	}

	handleSubmit=(event)=>{
		event.preventDefault();
		var date=Date.now()
		addData(this.state.username,this.state.password,3).then((res)=>{
			console.log(res)
			if(res==null){
				this.setState({error:"Bad Credentials. Please try again with valid username and password"})
			}else{
			localStorage.setItem("expiry_time",JSON.stringify(date+8640000));
			localStorage.setItem("userinfo",JSON.stringify(res));
			window.location.href=`/userdash/${res.id}`;
			console.log(res);
			console.log(localStorage.getItem('userInfo'));	
			}
		}).catch((err)=>{
				this.setState({username:'',password:''});
				this.setState({error:"ERROR: Could not connect to Server. Please try again later"})
		}
		)
	}
	


    render() {
        return (
            <div>
			<div class="login">
			<h3 align="center">
			<img src={Logo} style={{width:'20%',borderRadius:"50%",cursor:"pointer",color: "#3A6B8D"}} onClick={(e)=>window.location.href='/'} /><br/>
			Welcome to Book Basket</h3>
		<p align="center" class="pheader">Enter login details to get access</p>
		<p style={{color:'red'}}>{this.state.error}</p>
		<form onSubmit={(event)=>this.handleSubmit(event)} >
			<p class="pinput">
			<input type="text" name="username" class="inputData" placeholder="username / email address" 
			onChange={(e)=>this.handleChange(e)} required />
			</p>
			<p class="pinput">
			<input type="password" name="password" class="inputData" placeholder="password" 
			onChange={(e)=>this.handleChange(e)}  required/>
			</p>
			<p class="forgot" align="right"><a href="#">Forgot Password?</a></p>
			<p>
				Doesnot have an account?<span class="pheader"> <a style={{ cursor:"pointer" }} onClick={()=>window.location.href='/register'} >Sign Up </a>here</span>
				<button class="login-btn" type="submit"  >Login</button>
			</p>
			</form>
		</div>
	</div>
        );
    }
}
export default Login;