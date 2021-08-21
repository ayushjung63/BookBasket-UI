import React, { Component } from 'react'
import { getMyBookOrder } from '../../apiCall/OrderAPI'
import {deleteBook } from '../../apiCall/BookAPI'
import Logout from "../Logout/Logout.js";
import { Button, ButtonBase, Grid, Paper, Typography } from '@material-ui/core'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import WarningIcon from '@material-ui/icons/Warning';
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
     
     const imgContainerStyle={
      width: 128,
      height: 128,
     }
     const imgStyle={
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
     }
     const paperStyle={
      padding:'10px',
      marginTop:"20px",
      marginBottom:'10px'
     }
     const header={
      padding:"10px"
     }
     const error={
      fontSize:"40px",
      marginTop:"200px",
      height:"100vh",
      marginLeft:"120px"
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

        <div class="container-fluid">
            <div class="row">
                <div class="col-12">

                    <nav id="sidebarMenu" class="sidebar d-md-block bg-primary text-white collapse" data-simplebar>
    <div class="sidebar-inner px-4 pt-3">
     
      <ul class="nav flex-column">
       <li>
        <Button className="dash"  variant="contained" color="primary" onClick={()=>window.location.href='/'}> <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>&nbsp;Return to Home</Button>
        </li>
     <li class="nav-item   ">
          <a onClick={()=>window.location.href='/profile'} class="nav-link " style={{textAlign:"left"}}>
            <span class="sidebar-icon"><span class="fa fa-user-circle"></span></span>
            <span>{this.state.user.username}</span>
          </a>
        </li>
        <li class="nav-item   ">
          <a onClick={()=>window.location.href=`/userdash/${this.state.user.id}` } class="nav-link" style={{textAlign:"left"}}>
            <span class="sidebar-icon"><span  class="fa fa-book"></span></span>
            <span>Your Books</span>
          </a>
        </li>
        <li class="nav-item active ">
          <a onClick={()=>window.location.href=`/bookorder/${this.state.user.id}`} class="nav-link" style={{textAlign:"left"}}>
              <span class="sidebar-icon"><span class="fa fa-cart-plus"></span></span>
              <span>Book Orders</span>
          </a>
        </li>
        <li class="nav-item  ">
          <a onClick={()=>window.location.href='/addproducts'} class="nav-link" style={{textAlign:"left"}}>
              <span class="sidebar-icon"><span class="fa fa-plus"></span></span>
              <span>Add Book</span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href=`/userorders/${this.state.user.id}`} class="nav-link" style={{textAlign:"left"}}>
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

{(this.state.books==[] ||this.state.books=='')?
              <div>
              <Typography gutterBottom variant="subtitle1" style={error}>
                <WarningIcon style={{fontSize:"40px"}} /> NO DATA FOUND
              </Typography>
              </div>
                :

                
                    <main class="content">
                      <div>
                       <h2 style={header}>
                           Book Order Request
                        </h2>
                       </div>
          


                    <div>
                      {this.state.books.map((item)=>
                      <Paper style={paperStyle} >
        <Grid container >
          <Grid item>
            <ButtonBase style={imgContainerStyle}>
              <img alt="complex" src={item.image} style={imgStyle} />
            </ButtonBase>
          </Grid>
          <Grid item sm container>
            <Grid item xs container direction="column" >
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" align="left">
                 Title:{item.book.title}
                </Typography>
                <Typography variant="body2" gutterBottom  align="left">
                  Author:{item.book.author}
                </Typography>
                <Typography variant="body2" gutterBottom  align="left">
                  Type:{item.book.type}
                </Typography>
                <Typography variant="body2" gutterBottom  align="left" >
                  Delivery:{item.book.delivery}
                </Typography>
                
              </Grid>
            </Grid>

           < Grid item xs sm container direction="column" spacing={2}>
          
                
            <Typography gutterBottom variant="subtitle1">
                  Ordered By:{item.user.username}
                </Typography>
                <Typography gutterBottom variant="subtitle1"  >
                 Contact:{item.user.contact}
                </Typography>
                <Typography gutterBottom variant="subtitle1"  >
                 Address:{item.user.address}
                </Typography>
                <Typography style={{cursor:"pointer",color:"green"}} variant="body" color="textSecondary"  >
                <ContactPhoneIcon />Contact
                </Typography>
          </Grid>

          </Grid>
        </Grid>
      </Paper>
       )}
                      </div>
                    </main>
    }
                </div>
            </div>
        </div>
            </div>
        )
    }
}
