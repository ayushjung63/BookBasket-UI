import React, { Component } from 'react'
import {getBookById } from '../../apiCall/BookAPI'
import {editBook } from '../../apiCall/BookAPI'
import { Button } from '@material-ui/core'
import Logout from "../Logout/Logout.js";

export default class EditProduct extends Component {

  
   constructor(props){
        super(props)
        this.state={
            book:[],
            id:this.props.match.params.id,
            user:JSON.parse(localStorage.getItem('userinfo')) || null,
            userId:''
            }
    }

    componentDidMount() {
        this.getBook();
    }

    getBook = () => {
    let self=this;
    getBookById(self.state.id).then(function (res) {
        self.setState({ book: res.data });
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  };
    handleLogout=(event)=>{
        event.preventDefault();
        localStorage.clear()
        window.location.href='/'
   } 

    handleChange=(event)=>{
		this.state.book[event.target.name]=event.target.value;
        this.setState({book:this.state.book})
	}

	handleSubmit=(event,id)=>{
		event.preventDefault();
        editBook(this.state.book,this.state.book.id).then((res)=>{
            window.location.href=`/userdash/${this.state.user.id}`
        }).catch((err)=>{
            if(err.response.status===404){
                this.setState({
                title:'',
                author:'',
                price:'',
                type:'',
                description:''
              });
            }
        }
        )    
		
	}

    render() {
        let book=this.state.book;

        const myStyle = {
            width:'100%',
            fontFamily: "Arial",
            height:"40px"
    };

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









                
                    <main class="content">

                       


                        <div class=""> 
                                                            <main>

                                                         

                               <div className="productHeader">
                                                        <h3 class="h3">Edit Book</h3>
                                                        <hr/>
                                                     </div>
                                                      <div class="add-product">
                                                    <form  class="" onSubmit={(event)=>this.handleSubmit(event)}>
                                                        <div class="form-group ">
                                                            <p className="formInfo">Book Title<br/>
                                                            <input type="text" class="formData" value={book.title} placeholder="Book Title" name="title" autofocus required onChange={(e)=>this.handleChange(e)} />
                                                          </p>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="form-group mb-4">
                                                               <p className="formInfo">Book Author<br/>
          
                                                                    <input type="text" value={book.author} placeholder="Book Author" class="formData" name="author" required  onChange={(e)=>this.handleChange(e)}/>
                                                              </p>
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <div class="form-group mb-4">
                                                                <p className="formInfo">Book Category
                                                               
                                                                <select  style={myStyle}onChange={(e)=>this.handleChange(e)} name="category" class="formSelect">
                                                                  <option>{book.category}</option>
                                                                  <option value="College Books">College Books</option>
                                                                  <option value="School Books">School Books</option>
                                                                  <option value="Action and Adventure">Action and Adventure</option>
                                                                  <option value="Classics">Classics</option>
                                                                  <option value="Comic">Comic</option>
                                                                  <option value="Fantasy">Fantasy</option>
                                                                  <option value="Historical Fiction">Historical Fiction</option>
                                                                  <option value="Horror">Horror</option>
                                                                  <option value="Romance">Romance</option>
                                                                  <option value="Science Fiction (Sci-Fi)">Science Fiction (Sci-Fi)</option>
                                                                  <option value="Short Stories">Short Stories</option>
                                                                  <option value="Biographies and Autobiographies">Biographies and Autobiographies</option>
                                                                  <option value="Poetry">Poetry</option>
                                                                </select>
                                                             </p>
                                                            </div>
                                                        </div>


                                                        <div class="form-group">
                                                            <div class="form-group mb-4">
                                                               <p className="formInfo">Book Price
                                                               <br />
                                                                    <input type="text" value={book.price} placeholder="Book Price" class="formData" name="price" required onChange={(e)=>this.handleChange(e)}/>
                                                                </p>
                                                            </div>
                                                        </div>


                                                        <div class="form-group">
                                                            <div class="form-group mb-4">
                                                                <p className="formInfo"> Book Type<br/>
                                                                    <select id="p1" class="formSelect" style={myStyle} onChange={(e)=>this.handleChange(e)} name="type"  >
                                                                    <option value={book.type}>{book.type}</option>
                                                                   <option   value="Borrow" >Borrow </option>
                                                                   <option  value="Sell"  >Sell </option>
                                                                </select>
                                                                </p>
                                                               
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <div class="form-group mb-4">
                                                                <p className="formInfo">Book Description<br/>
                                                              
                                                                    <input value={book.description} onChange={(e)=>this.handleChange(e)} type="textarea" placeholder="Book Description" class="formData"  name="description" required />
                                                                </p>
                                                            </div>
                                                        </div>
                                                         <div class="form-group">
                                                            <div class="form-group mb-4">
                                                                <p className="formInfo"> Delivery<br/>
                                                                    <select id="p1" class="formSelect" style={myStyle} onChange={(e)=>this.handleChange(e)} name="delivery"  >
                                                                    <option>{book.delivery}</option>
                                                                   <option  selected value="AVAILABLE" > AVAILABLE</option>
                                                                   <option  value="NOT_AVAILABLE"  >NOT_AVAILABLE</option>
                                                                </select>
                                                                </p>
                                                               
                                                            </div>
                                                        </div> 

                                                         {/* <div class="form-group">
                                                            <div class="form-group mb-4">
                                                                <p className="formInfo">Upload file
                                                               
                                                                  <input 
                                                                      type="file" name='img'
                                                                      onChange={(e)=>this.handleImagePreview(e)}
                                                                  />
                                                                <input style={{width:'100px'}} type="button" onClick={()=>this.handleSubmitFile()} value="upload"/>
                                                                 </p> 
                                                            </div>
                                                        </div> */}

                                                          <p className='formInfo'>

                                                        <button type="submit" class="formBtn">Edit Book</button>
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
        )
    }
}
