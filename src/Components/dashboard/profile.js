import React, { Component } from "react";
import { getBooks } from "../../apiCall/BookAPI";
import InputLabel from "@material-ui/core/InputLabel";
import { Button, Card, CardContent, CardMedia, IconButton, Typography } from "@material-ui/core";
import Logout from "../Logout/Logout.js";
import './dash.css'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem("userinfo")) || null,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <nav
                id="sidebarMenu"
                class="sidebar d-md-block bg-primary text-white collapse"
                data-simplebar
              >
                <div class="sidebar-inner px-4 pt-3">
                  <ul class="nav flex-column">
                    <li>
                      <Button
                        className="dash"
                        variant="contained"
                        color="primary"
                        onClick={() => (window.location.href = "/")}
                      >
                        {" "}
                        <i
                          class="fa fa-arrow-circle-left"
                          aria-hidden="true"
                        ></i>
                        &nbsp;Return to Home
                      </Button>
                    </li>
                    <li class="nav-item active  ">
                      <a
                        onClick={() => (window.location.href = "/profile")}
                        class="nav-link"
                        style={{textAlign:"left"}}
                      >
                        <span class="sidebar-icon">
                          <span class="fa fa-user-circle"></span>
                        </span>
                        <span>{this.state.user.username}</span>
                      </a>
                    </li>
                    <li class="nav-item    ">
                      <a
                        onClick={() =>
                          (window.location.href = `/userdash/${this.state.user.id}`)
                        }
                        class="nav-link"
                        style={{textAlign:"left"}}
                      >
                        <span class="sidebar-icon">
                          <span class="fa fa-book"></span>
                        </span>
                        <span>Your Books</span>
                      </a>
                    </li>
                    <li class="nav-item ">
                      <a
                        onClick={() =>
                          (window.location.href = `/bookorder/${this.state.user.id}`)
                        }
                        class="nav-link"
                        style={{textAlign:"left"}}
                      >
                        <span class="sidebar-icon">
                          <span class="fa fa-cart-plus"></span>
                        </span>
                        <span>Book Orders</span>
                      </a>
                    </li>
                    <li class="nav-item  ">
                      <a
                        onClick={() => (window.location.href = "/addproducts")}
                        class="nav-link"
                        style={{textAlign:"left"}}
                      >
                        <span class="sidebar-icon">
                          <span class="fa fa-plus"></span>
                        </span>
                        <span>Add Book</span>
                      </a>
                    </li>
                    <li class="nav-item ">
                      <a
                        onClick={()=>window.location.href=`/userorders/${this.state.user.id}`}
                        class="nav-link"
                        style={{textAlign:"left"}}
                      >
                        <span class="sidebar-icon">
                          <span class="fa fa-cart-plus"></span>
                        </span>
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
                  <main className="profile-main">
                      <h2 className="title">My Profile</h2>
                      <hr/>
                    <div className="profile">
                        <div className="details">
                           <h4>{this.state.user.username} </h4>
                           <p> Address:{this.state.user.address} </p>
                           <p> Contact:{this.state.user.contact} </p>
                           <p> Email:{this.state.user.email} </p>
                           <p> 
                               <Button variant="contained" disabled >Change Password</Button><br/>
                               <span style={{color:"red"}}>Password Change feature will be available soon.</span>
                           </p>
                        </div>
                        <div className="profile-img">
                            <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" />
                        </div>
                    </div>
                  </main>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
