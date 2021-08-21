import React, { Component } from 'react'
import {getBooks } from '../../apiCall/BookAPI'
import {approveBooks } from '../../apiCall/BookAPI'
import { Button, ButtonBase, Grid, Paper, Typography } from '@material-ui/core'
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
        window.location.reload()
      }).catch((err)=>console.log(err));
  }

    
    render() {
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
         marginTop:"20px",
         marginBottom:"20px",
         backgroundColor:"#5B4B48",
         color:"white",
         height:"50px"
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
                    <div>
                       <Typography gutterBottom variant="body1" style={header}>
                           Book Management
                        </Typography>
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
                 Title:{item.title}
                </Typography>
                <Typography variant="body2" gutterBottom  align="left">
                  Author:{item.author}
                </Typography>
                <Typography variant="body2" gutterBottom  align="left">
                  Type:{item.type}
                </Typography>
                <Typography variant="body2" gutterBottom  align="left" >
                  Delivery:{item.delivery}
                </Typography>
                {(item.status=="AVAILABLE")?
                <Typography variant="body2" gutterBottom style={{color:"green",fontWeight:600}} align="left" >
                  Status:{item.status}
                </Typography>:
                <Typography variant="body2" gutterBottom style={{color:"#F25B0A",fontWeight:600}} align="left" >
                Status:{item.status}
              </Typography>
                }
                
              </Grid>
            </Grid>

           < Grid item xs sm container direction="column" spacing={2}>
          
                
            <Typography gutterBottom variant="subtitle1">
                  Added By:{item.addedBy.username}
                </Typography>
                <Typography gutterBottom variant="subtitle1"  >
                 Contact:{item.addedBy.contact}
                </Typography>
                <Typography gutterBottom variant="subtitle1"  >
                 Address:{item.addedBy.address}
                </Typography>
                <Typography style={{cursor:"pointer",color:"green"}} variant="body" color="textSecondary"  >
                {(item.status=="ADMINPENDING")?
                <Button variant="contained" color="primary" onClick={(e)=>this.approve(e,item.id)}>Approve</Button>
                :<span></span>
                }
                &nbsp;<Button variant="contained" color="secondary" onClick={(e)=>this.handleDelete(e,item.id)}>Delete</Button>
                </Typography>
          </Grid>

          </Grid>
        </Grid>
      </Paper>
       )}
                      </div>

                        
                    </main>
                </div>
            </div>
        </div>
            </div>
        )
    }
}
