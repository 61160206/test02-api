const express = require('express')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const app = express()

app.use(express.json())
let books = []

const url = 'mongodb+srv://superadmin:#Naphat061998@cluster0.n1gbl.mongodb.net/buflix?retryWrites=true&w=majority'
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true})
let db, booksCollection


app.get('/books', (req, res) => {
    

   
    res.status(200).json(books)
})


app.get('/books/:id', (req, res) =>{
    
    let id = req.params.id
   
     let book = {} 

    
    res.status(200).json(book)

})


app.post('/books', (req, res) => { 

    //input
    let newtitle = req.body.title 
    let newprice = req.body.price 
    let newunit = req.body.unit 
    let newisbn = req.body.isbn 
    let newimageurl = req.body.imageurl 

    let newBook = {
        title: newtitle, 
        price: newprice,
        unit: newunit,
        isbn: newisbn,
        imageurl: newimageurl,
    }
    let bookID = 0

    //process

   books.push(newBook) 
   bookID = books.length - 1 

    //output

    res.status(201).json(bookID)
})



const port = 3000
app.listen(port, () => console.log(`Server started at ${port}`))