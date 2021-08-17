import React, { Component } from "react";
import { addBook } from "../../apiCall/BookAPI";
import {
  Button,
  TextField,
  Grid,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import axios from "axios";
import "./addproduct.css";
import Logout from "../Logout/Logout.js";

export default class Addproduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem("userinfo")) || null,
      userId: "",
      title: "",
      author: "",
      category: "College Book",
      price: "",
      type: "Borrow",
      description: "",
      delivery: "AVAILABLE",
      addedBy: "",
      img: "",
      image_file: null,
      image_preview: "",
    };
  }

  componentDidMount() {
    console.log(this.state.category);
    console.log(this.state.user.id);
  }
  handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    window.location.href = "/";
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.delivery);
  };

  custom_file_upload_url = "http://localhost:8085/api/upload";

  handleImagePreview = (e) => {
    let image_as_base64 = URL.createObjectURL(e.target.files[0]);
    let image_as_files = e.target.files[0];

    this.setState({
      image_preview: image_as_base64,
      image_file: image_as_files,
    });

    this.handleSubmitFile(image_as_files);
  };

  // Image/File Submit Handler
  handleSubmitFile = (image) => {
    if (image) {
      let formData = new FormData();
      formData.append("myfile", image);
      // the image field name should be similar to your api endpoint field name
      // in my case here the field name is customFile

      axios
        .post(this.custom_file_upload_url, formData, {
          headers: {
            Authorization:
              "YOUR_API_AUTHORIZATION_KEY_SHOULD_GOES_HERE_IF_HAVE",
            "Content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("Success" + res.data);
          this.setState({ img: res.data });
          console.log(this.state.img);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    var date = Date.now();
    addBook(
      this.state.title,
      this.state.author,
      this.state.price,
      this.state.category,
      this.state.description,
      this.state.delivery,
      this.state.img,
      this.state.type,
      this.state.user.id,
      3
    )
      .then((res) => {
        console.log(this.state.img);
        window.location.href = `/userdash/${this.state.user.id}`;
      })
      .catch((err) => {
        if (err.response.status === 404) {
          this.setState({
            title: "",
            author: "",
            price: "",
            type: "",
            description: "",
            delivery: 0,
            addedBy: "",
            img: "",
          });
        }
      });
  };

  render() {
    const myStyle = {
      width: "115%",
      fontFamily: "Arial",
      height: "40px",
    };

    return (
      <div>
        <nav class="navbar navbar-dark navbar-theme-primary px-4 col-12 d-md-none">
          <a class="navbar-brand mr-lg-5" href="../../index.html">
            <img
              class="navbar-brand-dark"
              src="../../assets/img/brand/light.svg"
              alt="Volt logo"
            />{" "}
            <img
              class="navbar-brand-light"
              src="../../assets/img/brand/dark.svg"
              alt="Volt logo"
            />
          </a>
          <div class="d-flex align-items-center">
            <button
              class="navbar-toggler d-md-none collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>

        <div class="container-fluid bg-soft">
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
                    <li class="nav-item   ">
                      <a
                        onClick={() => (window.location.href = "/profile")}
                        class="nav-link"
                      >
                        <span class="sidebar-icon">
                          <span class="fa fa-user-circle"></span>
                        </span>
                        <span>{this.state.user.username}</span>
                      </a>
                    </li>
                    <li class="nav-item   ">
                      <a
                        onClick={() =>
                          (window.location.href = `/userdash/${this.state.user.id}`)
                        }
                        class="nav-link"
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
                      >
                        <span class="sidebar-icon">
                          <span class="fa fa-cart-plus"></span>
                        </span>
                        <span>Book Orders</span>
                      </a>
                    </li>
                    <li class="nav-item active ">
                      <a
                        onClick={() => (window.location.href = "/addproducts")}
                        class="nav-link"
                      >
                        <span class="sidebar-icon">
                          <span class="fa fa-plus"></span>
                        </span>
                        <span>Add Book</span>
                      </a>
                    </li>
                    <li class="nav-item ">
                      <a
                        onClick={() => (window.location.href = "/userorders")}
                        class="nav-link"
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
                <nav class="navbar navbar-top navbar-expand navbar-dashboard navbar-dark pl-0 pr-2 pb-0">
                  <div class="container-fluid px-0">
                    <div
                      class="d-flex justify-content-between w-100"
                      id="navbarSupportedContent"
                    >
                      <div class="d-flex"></div>

                      <ul class="navbar-nav align-items-center">
                        <li class="nav-item dropdown">
                          <a
                            class="nav-link pt-1 px-0"
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <div class="media d-flex align-items-center">
                              <div class="media-body ml-2 text-dark align-items-center d-none d-lg-block"></div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>

                <div class="">
                  <main>
                    <div className="productHeader">
                      <h3 class="h3">Add Book</h3>
                      <hr />
                    </div>
                    <div class="add-product">
                      <form
                        class=""
                        onSubmit={(event) => this.handleSubmit(event)}
                      >
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <div class="form-group ">
                              <p className="formInfo">
                                Book Title
                                <br />
                                <input
                                  type="text"
                                  class="formData"
                                  placeholder="Book Title"
                                  name="title"
                                  autofocus
                                  required
                                  onChange={(e) => this.handleChange(e)}
                                />
                              </p>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <div class="form-group">
                              <p className="formInfo">
                                Book Author
                                <br />
                                <input
                                  type="text"
                                  placeholder="Book Author"
                                  class="formData"
                                  name="author"
                                  required
                                  onChange={(e) => this.handleChange(e)}
                                />
                              </p>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <p className="formInfo" style={{ margin: 0 }}>
                              Book Category
                              <select
                                style={myStyle}
                                onChange={(e) => this.handleChange(e)}
                                name="category"
                                class="formSelect"
                              >
                                <option>Select Book Category</option>
                                <option value="College Books">
                                  College Books
                                </option>
                                <option value="School Books">
                                  School Books
                                </option>
                                <option value="Action and Adventure">
                                  Action and Adventure
                                </option>
                                <option value="Classics">Classics</option>
                                <option value="Comic">Comic</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Historical Fiction">
                                  Historical Fiction
                                </option>
                                <option value="Horror">Horror</option>
                                <option value="Romance">Romance</option>
                                <option value="Science Fiction (Sci-Fi)">
                                  Science Fiction (Sci-Fi)
                                </option>
                                <option value="Short Stories">
                                  Short Stories
                                </option>
                                <option value="Biographies and Autobiographies">
                                  Biographies and Autobiographies
                                </option>
                                <option value="Poetry">Poetry</option>
                              </select>
                            </p>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <div class="form-group">
                              <div class="form-group mb-4">
                                <p className="formInfo">
                                  {" "}
                                  Book Type
                                  <br />
                                  <select
                                    id="p1"
                                    class="formSelect"
                                    style={myStyle}
                                    onChange={(e) => this.handleChange(e)}
                                    name="type"
                                  >
                                    <option>Select Book Type</option>
                                    <option selected value="Borrow">
                                      Borrow{" "}
                                    </option>
                                    <option value="Sell">Sell </option>
                                  </select>
                                </p>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <div class="form-group">
                              <p className="formInfo">
                                Book Price
                                <br />
                                <input
                                  type="text"
                                  placeholder="Book Price"
                                  class="formData"
                                  name="price"
                                  required
                                  onChange={(e) => this.handleChange(e)}
                                />
                              </p>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <div class="form-group">
                              <p className="formInfo">
                                Book Description
                                <br />
                                <textarea
                                  style={{width:"115%"}}
                                  onChange={(e) => this.handleChange(e)}
                                  type="textarea"
                                  placeholder="Book Description"
                                  class="formData"
                                  name="description"
                                  required
                                />
                              </p>
                            </div>
                          </Grid>
                        </Grid>

                        <div class="form-group">
                          <div class="form-group mb-4">
                            <p className="formInfo">
                              {" "}
                              Delivery
                              <br />
                              <select
                                id="p1"
                                class="formSelect"
                                style={myStyle}
                                onChange={(e) => this.handleChange(e)}
                                name="delivery"
                              >
                                <option>Select Delivery</option>
                                <option selected value="AVAILABLE">
                                  {" "}
                                  AVAILABLE
                                </option>
                                <option value="NOT_AVAILABLE">
                                  NOT_AVAILABLE
                                </option>
                              </select>
                            </p>
                          </div>
                        </div>

                        <div class="form-group">
                          <div class="form-group mb-4">
                            <p className="formInfo">
                              Upload file
                              <input
                                 style={{width:"115%"}}
                                type="file"
                                name="img"
                                onChange={(e) => this.handleImagePreview(e)}
                              />
                              {/*  <input style={{width:'100px'}} type="button" onClick={()=>this.handleSubmitFile()} value="upload"/>*/}
                            </p>
                          </div>
                        </div>

                        <p className="formInfo">
                          <button type="submit" class="formBtn">
                            Add Book
                          </button>
                        </p>
                      </form>
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
