import React, { Component } from 'react'
import { getUserBook } from '../../apiCall/BookAPI'
import {deleteBook } from '../../apiCall/BookAPI'
import { Button, ButtonBase, Grid, Typography,Paper } from '@material-ui/core'
import Logout from "../Logout/Logout.js";
import WarningIcon from '@material-ui/icons/Warning';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
export default class Userorder extends Component {

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
      console.log(this.props.match.params.userId)
       this.getAllUserBook();
    }

    handleClickOpen = (e) => {
        e.preventDefault();
       this.setState({open:true})
      };
   handleClose = (e) => {
    e.preventDefault();
       this.setState({open:false})
  };


    handleDelete=(e,id)=>{
        deleteBook(id).then(function(res){
          console.log(res)
          window.location.reload()
        }).catch((err)=>console.log(err));
    }


    getAllUserBook=()=>{
      let self=this;
      getUserBook(this.state.userId).then(function(res){
            self.setState({books:res.data})
            console.log(res.data)
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
       <li>
        <Button className="dash"  variant="contained" color="primary" onClick={()=>window.location.href='/'}> <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>&nbsp;Return to Home</Button>
        </li>
     <li class="nav-item   ">
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








                {(this.state.books==[] ||this.state.books=='')?
              <div>
              <Typography gutterBottom variant="subtitle1" style={error}>
                <WarningIcon style={{fontSize:"40px"}} /> NO DATA FOUND
              </Typography>
              </div>
                    :
                    <main class="content">
                    <div>
                    <Typography gutterBottom variant="subtitle1" style={header}>
                      My Books
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
                <Typography variant="body2" color="textSecondary"  align="left">
                 {item.description}
                </Typography>
                
              </Grid>
            </Grid>

           < Grid item xs sm container direction="column" spacing={2}>
           <Typography variant="body1" gutterBottom  >
                  Category:{item.category}
                </Typography>
                <Typography variant="body2" gutterBottom  >
                  Delivery:{item.delivery}
                </Typography>
                      {(item.status=="BOOKED")?
                <Typography variant="body2" gutterBottom style={{color:"#F25B0A",fontWeight:600}} >
                  Status:{item.status}
                </Typography>:
                <Typography variant="body2" gutterBottom style={{color:"green",fontWeight:600}} >
                Status:{item.status}
              </Typography>
                }

                <Typography gutterBottom variant="subtitle1"  >
                 Price:{item.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" >
                 <EditIcon style={{cursor:"pointer",color:"blue"}} onClick={(e)=>this.handleEdit(e,item.id)}  /> &nbsp;&nbsp;
                <DeleteForeverIcon style={{cursor:"pointer",color:"red"}} onClick={(e)=>this.handleDelete(e,item.id)} />
                </Typography>
          </Grid>

          </Grid>
        </Grid>
      </Paper>
       )}
                      </div>


                      {/* <Dialog
                                                open={this.state.open}
                                                onClose={this.handleClose}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                              >
                                                <DialogContent>
                                                  <DialogContentText id="alert-dialog-description">
                                                    Are you sure you want  to delete?
                                                  </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                  <Button onClick={(e)=>this.handleDelete(e,item.id)} color="primary">
                                                   {item.id}
                                                </Button>
                                                  <Button onClick={(e)=>this.handleClose(e)} color="secondary" autoFocus>
                                                    Cancel
                                                  </Button>
                                                </DialogActions>
                                          </Dialog>  */}
                        
                    </main>
    }
                </div>
            </div>
        </div>
            </div>
        )
    }
}
