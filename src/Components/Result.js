import React, { Component } from 'react';
import {getCountries} from '../apiCall/Login.js';

export class Result extends Component {

	state={
		countries:[]
	}

	componentDidMount() {
		this.getAllCountries()
		//getCountries().then(function(res){
		//	console.log(res);
		//	
		//})
	}

	getAllCountries=()=>{
		let self=this;
		getCountries().then(function (res){
			self.setState({countries:res.data})
		}).catch((err)=>console.log(err))
	}

	render() {
		return (
			<div>
					{this.state.countries.map((item)=><div>{item.name}</div>)}
			</div>
		);
	}
}
export default Result;
