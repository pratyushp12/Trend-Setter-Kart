const express = require('express');
const products = require('./data/products');
const app = express();
const product = require('./data/products');

app.get("/",(req,res)=>{
    res.send("Api Running");
})

app.get("/api/products",(req,res)=>{
    res.json(product);
})

app.get("/api/products/:id",(req,res)=>{
   const product = products.find((product) => product._id === req.params.id)
   res.json(product);
})

app.listen(5000,console.log("Listening on Port 5000"));