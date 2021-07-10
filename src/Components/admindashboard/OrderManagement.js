import React, { Component } from 'react'
import { getOrders } from '../../apiCall/OrderAPI';
import { Button } from '@material-ui/core'
import Logout from "../Logout/Logout.js";
import { cancelOrder } from '../../apiCall/OrderAPI';
import { deleteOrder } from '../../apiCall/OrderAPI';
import {approveBooks } from '../../apiCall/BookAPI'

export default class OrderManagement extends Component {
  
  state={
		orders:[],
    users:[],
    books:[],
    orderId:''
	}

    componentDidMount() {
        this.getallOrders();
    }

    getallOrders=()=>{
        let self=this;
           getOrders().then(function(res){
             console.log(res.data)
             self.setState({orders:res.data})
            self.setState({books:self.state.books})
        }).catch((err)=>console.log(err));
    }

    approve=(id)=>{
      approveBooks(id).then(function(res){
        console.log(res.data)
        window.location.reload();
      }).catch((err)=>console.log(err));
    }

   cancelOrders=(e,id)=>{
         cancelOrder(id).then(function(res){
          window.location.reload()
        }).catch((err)=>console.log(err));
    }

    deleteOrder=(e,id,bookId)=>{
         deleteOrder(id).then(function(res){
          window.location.reload()
        }).catch((err)=>console.log(err));
         this.approve(bookId)
    }
    handleLogout=(e)=>{
        e.preventDefault();
        localStorage.clear()
        window.location.href='/'
    }
  
  render() {
    // const {books}=this.state;
        return (
            <div>
              {console.log(this.state.books)}
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
      <div class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
        <div class="d-flex align-items-center">
         
         
        </div>
        <div class="collapse-close d-md-none">
            <a href="#sidebarMenu" class="fas fa-times" data-toggle="collapse"
                data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true"
                aria-label="Toggle navigation"></a>
        </div>
      </div>
      <ul class="nav flex-column">
        <li class="nav-item   ">
          <a onClick={()=>window.location.href='/admindash'} class="nav-link">
            <span class="sidebar-icon"><span class="fas fa-chart-pie"></span></span>
            <span>Overview</span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href='/products'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-hand-holding-usd"></span></span>
              <span>Books </span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href='/users'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-cog"></span></span>
              <span>Users</span>
          </a>
        </li>
        <li class="nav-item active ">
          <a onClick={()=>window.location.href='/orders'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-cog"></span></span>
              <span>Order</span>
          </a>
        </li>
         <li>
       <Logout />
        </li>
        </ul>
    </div>
</nav>









                
                    <main class="content">

                       


                        <div class="mt-5 px-4">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Book</th>			
                                        <th>Added By</th>			
                                        <th>Ordered By</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.orders.map((item)=>
                                    <tr>
                                        <td>
                                            <span class="font-weight-normal">{item.book.title}</span>
                                        </td>
                                        <td><span class="font-weight-normal">{item.book.addedBy.username}</span></td> 
                                        <td><span class="font-weight-normal">{item.user.username}</span></td>                        
                                       
                                        <td><span class="font-weight-bold text-warning">{item.status}</span></td>
                                        <td>
                                        <div class="btn-group">
                                                <Button variant="contained" color="primary" onClick={(e)=>this.cancelOrders(e,item.id)}>Cancel</Button>&nbsp;
                                                 <Button variant="contained" color="primary" onClick={(e)=>this.deleteOrder(e,item.id,item.book.id)}>Delete</Button>
                                            </div>
                                        </td>
                                    </tr>
                           
                                )}        
                                </tbody>
                            </table>
                           
                        </div>
                        
                    </main>
                </div>
            </div>
        </div>
            </div>
        )
    }
}
