import axios from 'axios';

export function getBooks(){
	return new Promise(function (resolve,reject) {
		axios.get('http://localhost:8085/api/book/allbooks').then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

export function availableBooks(){
	return new Promise(function (resolve,reject) {
		axios.get('http://localhost:8085/available').then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

export function otherBooks(id){
	var data={
		"id":id
	}
	return new Promise(function (resolve,reject) {
		axios.post('http://localhost:8085/others',data).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

export function searchBooks(keyword){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:8085/api/book/search/${keyword}`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

export function countBooks(){
	return new Promise(function (resolve,reject) {
		axios.get('http://localhost:8085/count').then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}


export function getBookById(id){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:8085/api/book/${id}`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}


export function getUserBook(id){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:8085/api/book/user/${id}`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

export function approveBooks(id){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:8085/api/book/approve/${id}`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

export function deleteBook(id){
	return new Promise(function (resolve,reject) {
		axios.delete(`http://localhost:8085/api/book/delete/${id}`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}


export function getBooksByCategory(category){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:8085/api/book/category/${category}`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

export function getBooksByType(type){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:8085/api/book/type/${type}`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

export function addBook(title,author,price,category,description,delivery,img,type,addedBy) {
	var data = {
		"title":title,
		"author":author,
		"price":price,
		"category":category,
		"type":type,
		"description":description,
		"delivery":delivery,
		"image":img,
		"addedBy":{"id":addedBy}
	}
	console.log(data)
	return new Promise(function (resolve, reject){
		axios.post('http://localhost:8085/api/book/add', data).then(function(res){
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

export function editBook(book,userId) {
	var data ={
		"title":book.title,
		"description":book.description,
		"author":book.author,
		"type":book.type,
		"price":book.price,
		"category":book.category,
		"delivery":book.delivery
	}
	console.log(data)
	return new Promise(function (resolve, reject){
		axios.put(`http://localhost:8085/api/book/edit/${userId}`, data).then(function(res){
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