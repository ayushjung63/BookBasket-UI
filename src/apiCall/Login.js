import React, { Component } from 'react';
import axios from 'axios';




export function addData(username,password,retryTimes) {
	console.log("add data .....");
    var data = {
        "username": username,
        "password": password,
    }
    return new Promise(function (resolve, reject){
    	axios.post('http://localhost:8085/api/user/login', data).then(function(res){
    		console.log("getting response .....");
    		console.log(res)
    		resolve(res.data)
    	}).catch(function(err){
    		console.log("error")
    		console.log(err)
    		reject(err)
    	});
    })
}
export function registerUser(username,password,address,contact,email,retryTimes) {
        console.log("add data .....");
        var data = {
            "username": username,
            "password": password,
            "address":address,
            "contact":contact,
            "email":email
        }
        return new Promise(function (resolve, reject){
            axios.post('http://localhost:8085/api/user/adduser', data).then(function(res){
                console.log("getting response .....");
                console.log(res)
                resolve(res.data)
            }).catch(function(err){
                console.log("error")
                console.log(err)
                reject(err)
            });
        })
}

export function adminLogin(username,password,retryTimes) {
	console.log("logging in .....");
    var data = {
        "user": username,
        "pw": password,
    }
    return new Promise(function (resolve, reject){
    	axios.post('http://localhost:8085/api/admin/login', data).then(function(res){
    		console.log("getting response .....");
    		console.log(res)
    		resolve(res.data)
    	}).catch(function(err){
    		console.log("error")
    		console.log(err)
    		reject(err)
    	});
    })
}







