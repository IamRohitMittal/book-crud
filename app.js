const db=require('./models/db');
const express = require('express');
const bodyParser= require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/book',(req,res)=>{
    const {name,releaseDate,authorName}=req.body;
    db.book.create({
		name : name,
		releaseDate : releaseDate,
		authorName : authorName
	}, function(err, objBook) {
		if (err)
			res.send(err);
 
		// get and return all the employees after newly created employe record
		db.book.find(function(err, books) {
			if (err)
				res.send(err)
			res.json(books);
		});
	});

})

app.put('/book/:uuid',(req,res)=>{
    let book=db.book.findByIdAndUpdate(b=>b.uuid==req.params.uuid)
})

app.delete('/book/:uuid',(req,res)=>{
    db.book.remove();
})

app.get('/book',(req,res)=>{
    db.book.find(function(err, books) {
		// if there is an error retrieving, send the error otherwise send data
		if (err)
			res.send(err)
		res.json(books); // return all employees in JSON format
	});
})

app.get('/book/:uuid',(req,res)=>{
    let uuid = req.params.uuid;
	db.books.findById(id, function(err, book) {
		if (err)
			res.send(err)
 
		res.json(book);
	});
})
// Create a listener for the port
app.listen(5050, () => {
console.log('Now starting at port: 5050');
});
