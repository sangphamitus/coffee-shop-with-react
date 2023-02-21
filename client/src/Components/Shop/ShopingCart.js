import React,{useEffect, useState} from "react";
import './Shop.css'


export default function ShopingCart({data,addToCard})
{
  

    return (
        <div className="d-flex w-70 justify-content-center row ">
        {data.map((each,i)=> <div key={i} className='col m-3'>
        <div className="d-flex justify-content-center">
            <img img src={each.img} height='200' width='190'></img>
        </div>
       
        <p className="text-center mt-3 mb-0">{each.namebag}</p>
        <p className="text-orange text-center">${each.price.toFixed(2)}</p>
        <div className="d-flex justify-content-center ">

            <button className="add-to-card-btn" onClick={e=>{
                addToCard({'img':each.img,
                'productsname':each.namebag,
                'price':each.price.toFixed(2),
                'quantities':1} );
                
            }}>ADD TO CART</button>
        </div>

    </div>)}
        </div>
    )
}