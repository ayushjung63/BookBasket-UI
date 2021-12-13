import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './Components/Login/Login.js';
import AdminLogin from './Components/Login/AdminLogin.js';
import Register from './Components/Register/Register.js';
import Test from './Components/Register/Test.js';
import Homepage from './Components/Home/Homepage.js'
import OrderDialog from './Components/Home/OrderDialog.js'
import Userdashboard from './Components/dashboard/Userdashboard.js';
import Admindashboard from './Components/admindashboard/Admindashboard.js';
import Addproduct from './Components/dashboard/Addproduct.js';
import Editproduct from './Components/dashboard/Editproduct.js';
import Productmanagement from './Components/admindashboard/Productmanagement.js';
import UserManagement from './Components/admindashboard/UserManagement.js';
import OrderManagement from './Components/admindashboard/OrderManagement.js';
import Userorder from './Components/dashboard/Userorder.js';
import Bookorder from './Components/dashboard/Bookorder.js';
import Profile from './Components/dashboard/profile.js';
import AllBooks from './Components/ApiTest/AllBooks.js';
import EditProduct from './Components/dashboard/Editproduct.js';
import { Product } from './Components/Home/Product.js';
import DummyProduct from './Components/Home/DummyProduct.js';
import Sell  from './Components/Home/Sell.js';
import Borrow  from './Components/Home/Borrow.js';
import Search  from './Components/Home/Search.js';
import Category  from './Components/Home/Category.js';
import EmptyBooks  from './Components/Home/EmptyBooks.js';
import ImageUpload  from './Components/Home/ImageUpload.js';
import BillingPage from './Components/Payment/BillingPage.js';

export class Routes extends Component {
	constructor(props){ 
		super(props);
		this.state={
			expired:localStorage.getItem('expiry_time')||null,
			isLogin:localStorage.getItem('userinfo')?!!JSON.parse(localStorage.getItem('userinfo')):false,
			userinfo:localStorage.getItem('userinfo')?JSON.parse(localStorage.getItem('userinfo')):[],
			adminLogin:localStorage.getItem('admininfo')||false
		}
	}
	componentDidMount(){
		this.checkIfExpired()
	}
	checkIfExpired=()=>
	{
		if(this.state.userinfo.length && this.state.expired<=Date.now())
		{	
			console.log(this.state.userinfo)
			console.log(this.state.expired)
			localStorage.clear()
			window.location.reload();
		}	
	}
	
	render() {
		return (
			<div>
				<Router>
					{	
					this.state.adminLogin?
					<Switch>
						
						<Route exact path="/admin" component={Admindashboard} />
						<Route exact path="/admindash" component={Admindashboard} />
						<Route exact path="/products" component={Productmanagement} />
						<Route exact path="/users" component={UserManagement} />
						<Route exact path="/orders" component={OrderManagement} />
					</Switch>:
					<Switch>
						<Route exact path="/admin" component={AdminLogin} />
						<Route exact path="/admindash" component={AdminLogin} />
						<Route exact path="/products" component={AdminLogin} />
						<Route exact path="/users" component={AdminLogin} />
						<Route exact path="/orders" component={AdminLogin} />

					</Switch>
					}
					{
					!this.state.isLogin?
					<Switch>
				
						<Route exact path="/login" component={Login}/>
						<Route exact path="/register" component={Register} />
						<Route exact path="/hey" component={Test} />
						<Route exact path="/" component={Homepage} />
						<Route exact path="/pr" component={DummyProduct} />
						<Route exact path="/pr/:id" component={Product} />
						<Route exact path="/billing" component={BillingPage} />
						<Route exact path="/sell" component={Sell} />
						<Route exact path="/borrow" component={Borrow} />
						<Route exact path="/srch" component={Search} />
						<Route exact path="/srch/:key" component={Search} />
						<Route exact path="/category/:category" component={Category} />

						
						<Route exact path="/userdash/:userId" component={Login} />
						<Route exact path="/bookorder/:id" component={Login} />
						<Route exact path="/addproducts" component={Login} />
						<Route exact path="/editproducts/:id" component={Login} />
						<Route exact path="/userorders" component={Login} />
						<Route exact path="/profile" component={Login} />

					</Switch>:
					<Switch>
						
						
						<Route exact path="/" component={Homepage} />
						<Route exact path="/login" component={Userdashboard} />

						<Route exact path="/userdash/:userId" component={Userdashboard} />
						<Route exact path="/addproducts" component={Addproduct} />
						<Route exact path="/editproducts/:id" component={Editproduct} />
						<Route exact path="/userorders/:id" component={Userorder} />
						<Route exact path="/bookorder/:id" component={Bookorder} />
						<Route exact path="/profile" component={Profile} />

						<Route exact path="/pr/:id" component={Product} />
						<Route exact path="/srch/:key" component={Search} />
						<Route exact path="/category/:category" component={Category} />
						<Route exact path="/borrow" component={Borrow} />
						<Route exact path="/sell" component={Sell} />
						
					</Switch>
	}
				</Router>
			</div>
		);
	}
}
export default Routes;
