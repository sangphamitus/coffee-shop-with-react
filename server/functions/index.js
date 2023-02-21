const functions = require("firebase-functions");
const express = require('express');
var cors = require('cors');
const dotenv=require('dotenv')

dotenv.config();

const productRouter=require("./router/product.router")
const menuRouter=require("./router/menu.router")
const blogRouter=require("./router/blog.router")
const bookingRouter=require("./router/booking.router")
const contactRouter=require("./router/contact.router")
const orderRouter=require("./router/order.router")
const accountRouter=require("./router/account.router")

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const app =express();
app.use(cors());
app.get("/",(req,res)=> res.status(200).send("Hello client"));
app.use('/products',productRouter)
app.use('/menu',menuRouter);
app.use('/blog',blogRouter)
app.use('/booking',bookingRouter);
app.use('/contact',contactRouter);
app.use('/order',orderRouter);
app.use('/account',accountRouter);
exports.app=functions.https.onRequest(app); 
