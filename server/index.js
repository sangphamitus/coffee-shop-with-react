const express=require('express');
const http=require('http');

const PORT =process.env.PORT||5000;

const app=express();
const server = http.createServer(app);




server.listen(PORT,( )=>{
    console.log('Server run successfully!');   
})