export fuction uploadImage(img){
    var data = {
        'url':img
    }
    return new Promise(function (resolve, reject){
        axios.post('http://localhost:8085/api/upload', data).then(function(res){
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