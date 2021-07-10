import React, { Component } from 'react'
import { getBooks } from '../../apiCall/BookAPI'

export default class AllBooks extends Component {

    state={
		books:[]
	}

    componentDidMount() {
        this.getallBooks();
    }

    getallBooks=()=>{
        let self=this;
        getBooks().then(function(res){
            self.setState({books:res.data})
        }).catch((err)=>console.log(err));
    }


    render() {
        return (
            <div>
                <div>
                {this.state.books.map((item)=><div>
                    <p>{item.title}</p>
                    <p>{item.author}</p>
                    <i>{item.price}</i>
                    </div>)}
                </div>
            </div>
        )
    }
}
