import axios from 'axios';

export function getOrders(){
	return new Promise(function (resolve,reject) {
		axios.get('http://localhost:8085/api/order/allorder').then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

export function getMyBookOrder(id){
    return new Promise(function (resolve,reject) {
        axios.get(`http://localhost:8085/order/mybookorder/${id}`).then((res)=>
            resolve(res)).catch((err)=>reject(err))
    })
}

export function cancelOrder(id){
    return new Promise(function (resolve,reject) {
        axios.get(`http://localhost:8085/api/order/cancel/${id}`).then((res)=>
            resolve(res)).catch((err)=>reject(err))
    })
}

export function deleteOrder(id){
    return new Promise(function (resolve,reject) {
        axios.get(`http://localhost:8085/order/delete/${id}`).then((res)=>
            resolve(res)).catch((err)=>reject(err))
    })
}

export function countOrders(){
    return new Promise(function (resolve,reject) {
        axios.get('http://localhost:8085/order/count').then((res)=>
            resolve(res)).catch((err)=>reject(err))
    })
}

export function getParticularUserOrder(id){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:8085/api/order/${id}`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

export function orderBook(book,user,retryTimes) {
	console.log("add data .....");
    var data = {
        "book":{"id":book},
        "user":{"id":user},
    }
    return new Promise(function (resolve, reject){
    	axios.post('http://localhost:8085/api/order/addorder', data).then(function(res){
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

