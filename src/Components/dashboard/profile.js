import React, { Component } from 'react'
import { getBooks } from '../../apiCall/BookAPI'
import InputLabel from '@material-ui/core/InputLabel';
import { Button, Container, FormLabel, Input, MenuItem, Select } from '@material-ui/core'
import Logout from "../Logout/Logout.js";

export default class Profile extends Component {

    constructor(props){
        super(props)
        this.state={
            user:JSON.parse(localStorage.getItem('userinfo')) || null
            }
    }
    
  

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-dark navbar-theme-primary px-4 col-12 d-md-none">
    <a class="navbar-brand mr-lg-5" href="../../index.html">
        <img class="navbar-brand-dark" src="../../assets/img/brand/light.svg" alt="Volt logo" /> <img class="navbar-brand-light" src="../../assets/img/brand/dark.svg" alt="Volt logo" />
    </a>
    <div class="d-flex align-items-center">
        <button class="navbar-toggler d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</nav>

        <div class="container-fluid bg-soft">
            <div class="row">
                <div class="col-12">

                    <nav id="sidebarMenu" class="sidebar d-md-block bg-primary text-white collapse" data-simplebar>
    <div class="sidebar-inner px-4 pt-3"> 
      <ul class="nav flex-column">
       <li>
        <Button className="dash"  variant="contained" color="primary" onClick={()=>window.location.href='/'}> <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>&nbsp;Return to Home</Button>
        </li>
     <li class="nav-item active  ">
          <a onClick={()=>window.location.href='/profile'} class="nav-link">
            <span class="sidebar-icon"><span class="fa fa-user-circle"></span></span>
            <span>{this.state.user.username}</span>
          </a>
        </li>
        <li class="nav-item  active  ">
          <a onClick={()=>window.location.href=`/userdash/${this.state.user.id}` } class="nav-link">
            <span class="sidebar-icon"><span  class="fa fa-book"></span></span>
            <span>Your Books</span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href=`/bookorder/${this.state.user.id}`} class="nav-link">
              <span class="sidebar-icon"><span class="fa fa-cart-plus"></span></span>
              <span>Book Orders</span>
          </a>
        </li>
        <li class="nav-item  ">
          <a onClick={()=>window.location.href='/addproducts'} class="nav-link">
              <span class="sidebar-icon"><span class="fa fa-plus"></span></span>
              <span>Add Book</span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href='/userorders'} class="nav-link">
              <span class="sidebar-icon"><span class="fa fa-cart-plus"></span></span>
              <span>Your Orders</span>
          </a>
        </li>
         <li>
           <Logout />
        </li>
        </ul>
    </div>
</nav>









                
                    <main class="content">

                       


                        <div class=""> 
                                                            <main>

                                <section class="vh-lg-100 d-flex align-items-center">
                                    <div class="container">
                                        <div class="row justify-content-center form-bg-image" >
                                            <div class="col-12 d-flex align-items-center justify-content-center">
                                                <div class="signin-inner  bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                                    <div class="text-center text-md-center">
                                                        <h1 class="h3">Profile</h1>
                                                    </div>
                                                   
                                                    <form action="#" class="">
                                                   
                                                        <div class="form-group ">
                                                            <label for="email">Username</label>
                                                            <div class="input-group">
                                                                <input type="text" value={this.state.user.username} class="form-control" readOnly />
                                                            </div>  
                                                        </div>
                                                    
                                                        <div class="form-group">
                                                            <div class="form-group mb-4">
                                                                <label for="password">Email</label>
                                                                <div class="input-group">
                                                                    <input type="text" value={this.state.user.email}   class="form-control" readOnly />
                                                                </div>  
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <div class="form-group mb-4">
                                                                <label for="password">Contact</label>
                                                                <div class="input-group">
                                                                    <input type="text"  value={this.state.user.contact}  class="form-control" readOnly />
                                                                </div>  
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <div class="form-group mb-4">
                                                                <label for="password">Address</label>
                                                                <div class="input-group">
                                                                    <input type="text"  class="form-control" value={this.state.user.address}   readOnly />
                                                                </div>  
                                                            </div>
                                                        </div>
                                                        <button type="submit" class="btn btn-block btn-primary">Edit Profile</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </section>
                                </main>
                                   
                        </div>
                        
                    </main>
                </div>
            </div>
        </div>
            </div>
        )
    }
}
