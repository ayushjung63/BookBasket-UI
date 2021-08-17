import React, { Component } from 'react'
import { Button, ButtonBase, Grid, Paper, Typography } from '@material-ui/core'
import { getParticularUserOrder } from '../../apiCall/OrderAPI';
import { cancelOrder } from '../../apiCall/OrderAPI';
import './dash.css';
import Logout from "../Logout/Logout.js";
import CancelIcon from '@material-ui/icons/Cancel';
import WarningIcon from '@material-ui/icons/Warning';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Userorder extends Component {

  state={
        open:'',
		    order:[],
        user:JSON.parse(localStorage.getItem('userinfo')),
        id:'',
	}

    componentDidMount() {
        this.state.id=this.state.user.id;
        this.getallOrder();
      
        console.log(this.state.id)
    }

    handleClickOpen = (e) => {
    e.preventDefault();
   this.setState({open:true})
  };
   handleClose = (e) => {
    e.preventDefault();
       this.setState({open:false})
  };


    getallOrder=()=>{
        let self=this;
        getParticularUserOrder(this.state.id).then(function(res){
            console.log(res.data)
            self.setState({order:res.data})
        }).catch((err)=>console.log(err));
    }

    handleLogout=(event)=>{
        event.preventDefault();
        localStorage.clear()
        window.location.href='/'
    }

    cancelOrders=(e,id)=>{
         cancelOrder(id).then(function(res){
          window.location.reload()
        }).catch((err)=>console.log(err));
    }


    render() {
         const {id}=this.state;
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
          marginLeft:"120px",
          height:"100vh"
        }
        return (
            <div>

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
        <li class="nav-item active">
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






{(this.state.order==[] ||this.state.order=='')?
              <div>
              <Typography gutterBottom variant="subtitle1" style={error}>
                <WarningIcon style={{fontSize:"40px"}} /> NO DATA FOUND
              </Typography>
              </div>
                :


                
                    <main class="content">
                
                       <div>
                       <Typography gutterBottom variant="body1" style={header}>
                           Orders Placed
                        </Typography>
                       </div>


                        
                           
                    <div>
                      {this.state.order.map((item)=>
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
                  Ordered From:{item.book.addedBy.username}
                </Typography>
                <Typography gutterBottom variant="subtitle1"  >
                 Contact:{item.book.addedBy.contact}
                </Typography>
                <Typography gutterBottom variant="subtitle1"  >
                 Address:{item.book.addedBy.address}
                </Typography>
                <Typography onClick={(e)=>this.cancelOrders(e,item.id)} style={{cursor:"pointer",color:"red"}} variant="body2" color="textSecondary"  >
                        <CancelIcon/>Cancel
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
