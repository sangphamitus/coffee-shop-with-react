import React from "react";
import './HomeProducts.css'

export default function HomeProducts (){

    const data=[{
        "img":"https://m.media-amazon.com/images/I/81Ll6-5ufML._SX425_.jpg",
        "namebag":"AMERICAN COFFEE",
        "price":25.00
    },{
        "img":"https://m.media-amazon.com/images/I/81Ll6-5ufML._SX425_.jpg",
        "namebag":"COST RICA LIGHT",
        "price":35.00
    },{
        "img":"https://m.media-amazon.com/images/I/81Ll6-5ufML._SX425_.jpg",
        "namebag":"JAMAICAN MOUNTAIN",
        "price":15.00
    },{
        "img":"https://m.media-amazon.com/images/I/81Ll6-5ufML._SX425_.jpg",
        "namebag":"ETHOPIAN FANCY",
        "price":25.00
    }]

    return(
        <div id="products-menu" className="row w-100 ">
            {data.map((each,i)=> <div key={i} className='col-sm-3 mb-3'>
                <div className="d-flex justify-content-center">
                    <img img src={each.img} height='200' width='190'></img>
                </div>
               
                <p className="text-center mt-3 mb-0">{each.namebag}</p>
                <p className="text-orange text-center">${each.price.toFixed(2)}</p>
                <div className="d-flex justify-content-center ">
                    <button className="add-to-card-btn">ADD TO CART</button>
                </div>

            </div>)}
        </div>
    )
}