import React from "react";

import axios from "axios";



// const data=[{
//     "img":"https://m.media-amazon.com/images/I/81Ll6-5ufML._SX425_.jpg",
//     "namebag":"AMERICAN COFFEE",
//     "price":25.00
// },{
//     "img":"https://m.media-amazon.com/images/I/81Ll6-5ufML._SX425_.jpg",
//     "namebag":"COST RICA LIGHT",
//     "price":35.00
// },{
//     "img":"https://m.media-amazon.com/images/I/81Ll6-5ufML._SX425_.jpg",
//     "namebag":"JAMAICAN MOUNTAIN",
//     "price":15.00
// },{
//     "img":"https://m.media-amazon.com/images/I/81Ll6-5ufML._SX425_.jpg",
//     "namebag":"ETHOPIAN FANCY",
//     "price":25.00
// },{
//     "img":"https://m.media-amazon.com/images/I/81Ll6-5ufML._SX425_.jpg",
//     "namebag":"ORGANIC COFFEE",
//     "price":25.00
// },{
//     "img":"https://m.media-amazon.com/images/I/81Ll6-5ufML._SX425_.jpg",
//     "namebag":"TROPICAL ORGANIC COFFEE",
//     "price":35.00
// }]
export function getProductsData(callBack,n)
{
    
    console.log(process.env.REACT_APP_ENDPOINT+'/products/get-all');
    axios.post(process.env.REACT_APP_ENDPOINT+'/products/get-all')
        .then(res=>
        {
            let dataReturn=res.data.data;
           
            if(n===' ')
            {
                callBack(dataReturn);
            }else{
                
                callBack(   dataReturn.slice(dataReturn.length-n,dataReturn.length));
            }
            
            
        }).catch(e=>console.log(e));
 
  
}