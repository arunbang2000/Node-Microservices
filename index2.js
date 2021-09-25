var fs=require('fs');
const express = require("express");
const app = express();
const cors=require('cors');
app.use(express.static('public'));
app.use(cors());

app.get('/',function(req,response){
    var reply={"Made By":"Arun Bang","Roll Number":"19BBS0006","Type":"Cars Microservice"}
	response.send(reply);
})
app.get('/cars', function(req, res){
    fs.readFile(__dirname + "/" + "cars.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})
app.get('/cars/:id', function (req, res) {
    // First retrieve existing cars list
    fs.readFile( __dirname + "/" + "cars.json", 'utf8', function (err, data) {
       var cars = JSON.parse( data );
       var car = cars["user" + req.params.id] 
       console.log( car );
       res.end( JSON.stringify(car));
    });
 })
app.listen(5001, ()=>{
    console.log("Running on port 5001");
});