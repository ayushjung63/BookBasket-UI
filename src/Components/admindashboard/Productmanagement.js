import React, { Component } from 'react'
import {getBooks } from '../../apiCall/BookAPI'
import {approveBooks } from '../../apiCall/BookAPI'
import { Button } from '@material-ui/core'
import {deleteBook } from '../../apiCall/BookAPI'
import Dialog from '@material-ui/core/Dialog';
import Logout from "../Logout/Logout.js";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Productmanagement extends Component {

  state={
    open:'',
		books:[]
	}

    componentDidMount() {
        this.getallBooks();
    }



   handleClickOpen = (e) => {
    e.preventDefault();
  this.setState({open:true})
  };
   handleClose = (e) => {
    e.preventDefault();
       this.setState({open:false})
  };

      getallBooks=()=>{
        let self=this;
        getBooks().then(function(res){
            self.setState({books:res.data})
        }).catch((err)=>console.log(err));
    }

    handleLogout=(e)=>{
        e.preventDefault();
        localStorage.clear()
        window.location.href='/'
    }

    checkBook=(type)=>{
        if(type=="AVAILABLE" || type=="BOOKED"){
            return "Pending";
        }
    }
    
    approve=(e,id)=>{
      approveBooks(id).then(function(res){
        console.log(res.data)
        window.location.reload();
      }).catch((err)=>console.log(err));
    }

    handleDelete=(e,id)=>{
        deleteBook(id).then(function(res){
          console.log(res)
          window.location.reload();
        }).catch((err)=>console.log(err));
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
      <li class="nav-item   ">
          <a onClick={()=>window.location.href='/admindash'} class="nav-link">
            <span class="sidebar-icon"><span class="fas fa-chart-pie"></span></span>
            <span>Overview</span>
          </a>
        </li>
        <li class="nav-item  active">
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
        <li class="nav-item  ">
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

                       

                        <div class="mt-5 px-10">
                            <table class="table table-hover md-12">
                                <thead>
                                    <tr>
                                        <th>Title</th>						
                                        <th>Author</th>
                                        <th>Price</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                        <th>Added By</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.books.map((item)=>
                                    <tr>
                                        <td>
                                            <span class="font-weight-normal">{item.title}</span>
                                        </td>
                                        <td><span class="font-weight-normal">{item.author}</span></td>                        
                                        <td><span class="font-weight-normal">{item.price}</span></td>
                                        <td><span class="font-weight-bold">{item.type}</span></td>
                                        <td><span class="font-weight-bold">{item.status}</span></td>
                                         <td><span class="font-weight-bold">{item.addedBy.username}</span></td>
                                        <td>
                                            <div class="btn-group">
                                            {!(item.status==='AVAILABLE')?
                                                <Button variant="contained" color="primary" onClick={(e)=>this.approve(e,item.id)} type="submit" >&nbsp;Approve&nbsp;</Button>
                                                 :<span></span>}
                                                  &nbsp; &nbsp;<Button variant="contained" color="primary" onClick={(e)=>this.handleDelete(e,item.id)} >Delete</Button> 
                                            }
                                            </div>

                                             <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want  to delete <b>{item.title}</b> by <i>{item.author}</i> ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e)=>this.handleDelete(e,item.id)} color="primary">
            Delete
          </Button>
          <Button onClick={(e)=>this.handleClose(e)} color="secondary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      
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
