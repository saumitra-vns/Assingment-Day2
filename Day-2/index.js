const express = require("express")

const app = express();




app.get("/home", function (req, res){

    res.send("Hello")
})

app.get("/books", function (req, res){

    res.send({"Book-1" : "Atomic Habbit",
    "Book-2" : "Rich DAD",
    "Book-3" : "Poor DAD",
    "Book-4" : "Harry Potter",
})
})



app.listen(5000, () =>{

 
} )