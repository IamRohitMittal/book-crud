const db=require('./models/db');
const express = require('express');
const bodyParser= require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/book',(req,res)=>{
    const {name,releaseDate,authorName}=req.body;
    db.book.insert({name:name,releaseDate:releaseDate,authorName:authorName});

})

app.put('/book/:uuid',(req,res)=>{
    let book=db.book.find(b=>b.uuid==req.params.uuid)
})

app.delete('/book/:uuid',(req,res)=>{
    db.book.remove();
})

app.get('/book',(req,res)=>{
    db.book.
})

app.get('/book/:uuid',(req,res)=>{

})
// Create a listener for the port
app.listen(5050, () => {
console.log('Now starting at port: 5050');
});
