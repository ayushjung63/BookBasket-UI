import React, { Component } from 'react'
import { getMyBookOrder } from '../../apiCall/OrderAPI'
import {deleteBook } from '../../apiCall/BookAPI'
import { Button } from '@material-ui/core'
import Logout from "../Logout/Logout.js";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Bookorder extends Component {

  constructor(props){
        super(props)
        this.state={
            open:'',
            user:JSON.parse(localStorage.getItem('userinfo')) || null,
            userId:this.props.match.params.userId,
            books:[]
            }
    }

    componentDidMount() {
       this.getAllUserBook();
    }


    getAllUserBook=()=>{
      let self=this;
      getMyBookOrder(this.state.user.id).then(function(res){
            console.log(res.data)
            self.setState({books:res.data})
        }).catch((err)=>console.log(err));
    }
    handleLogout=(event)=>{
        event.preventDefault();
        localStorage.clear()
        window.location.href='/'
    }

    handleEdit=(e,id)=>{
      console.log(id)
      e.preventDefault();
      window.location.href=`/editproducts/${id}`;
    }


    render() {
      const {userId}=this.state;
     const imgStyle={
      width:'50px'
     }
        return (
            <div>
                <nav class="navbar navbar-dark navbar-theme-primary px-4 col-12 d-md-none">
     }
      }
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
     <li class="nav-item   ">
          <a onClick={()=>window.location.href='/profile'} class="nav-link">
            <span class="sidebar-icon"><span class="fa fa-user-circle"></span></span>
            <span>{this.state.user.username}</span>
          </a>
        </li>
        <li class="nav-item    ">
          <a onClick={()=>window.location.href=`/userdash/${this.state.user.id}` } class="nav-link">
            <span class="sidebar-icon"><span  class="fa fa-book"></span></span>
            <span>Your Products</span>
          </a>
        </li>
         <li class="nav-item  active">
          <a onClick={()=>window.location.href='/bookorder'} class="nav-link">
              <span class="sidebar-icon"><span class="fa fa-cart-plus"></span></span>
              <span>Book Orders</span>
          </a>
        </li>
        <li class="nav-item  ">
          <a onClick={()=>window.location.href='/addproducts'} class="nav-link">
              <span class="sidebar-icon"><span class="fa fa-plus"></span></span>
              <span>Add Products</span>
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

          


                        <div class= " mt-5">

                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                       <th>Book Title</th>
                                       <th>Price</th>
                                       <th>Type</th>
                                       <th>Boooked By</th>
                                       <th>Contact</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.books.map((item)=>
                                    <tr>
                                        <td>
                                            <span class="font-weight-normal">{item.book.title}</span>
                                        </td>
                                        <td><span class="font-weight-normal">{item.book.price} </span></td>                        
                                        <td><span class="font-weight-normal">{item.book.type}</span></td>
                                         <td><span class="font-weight-bold text-warning">{item.user.username}</span></td>
                                        <td><span class="font-weight-bold">{item.user.contact}</span></td>
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
