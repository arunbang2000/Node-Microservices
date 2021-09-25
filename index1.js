var fs=require('fs');
const express = require("express");
const app = express();
const cors=require('cors');
app.use(express.static('public'));
app.use(cors());

app.get('/',function(req,response){
    var reply={"Made By":"Arun Bang","Roll Number":"19BBS0006","Type":"Users Microservice"}
	response.send(reply);
})
app.get('/users', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})
app.get('/users/:id', function (req, res) {
    // First retrieve existing user list
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })
app.listen(5000, ()=>{
    console.log("Running on port 5000");
});