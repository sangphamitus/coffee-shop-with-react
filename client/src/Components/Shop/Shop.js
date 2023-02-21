import React,{useEffect, useState} from "react";
import './Shop.css'

import {getProductsData} from '../ControlData/ProductsData'

import ShopingCart from "./ShopingCart";

export default   function Shop({onCart,setCartOn,updateCart})
{
    const [popUp,setPopUp]= useState(false);
    const [data,setData]=useState([]);
    useEffect(()=>
    {
        getProductsData(setData,' ')
    },[window.location])
   

 
    const addToCard=(dataIns)=>{
        var  tempCart=onCart;
        const elem=tempCart.find(product=> product.productsname ===dataIns.productsname);
        if(elem)
        {
            tempCart.find(product=> product.productsname===dataIns.productsname).quantities+=dataIns.quantities
        }
        else{
            tempCart.push(dataIns);
        }
        setCartOn(prevState=>tempCart);
        setPopUp(prevState=>true);
        setTimeout(()=> setPopUp(prevState=>false),1500);
        updateCart();
}
    return (
        <div id="shop-container">
            <section id="shop-banner" >   
                <div id="banner-content" className=" d-flex justify-content-center ">         
                    <div  className="position-absolute content">
                        <h1 className="text-center header-teko-font text-white">SHOP</h1>
                        </div>       
                            
                </div>
            </section>
            <section id="shop-view"className="d-flex justify-content-center">
              <ShopingCart data={data} addToCard={addToCard}/>
           
            </section>
            <div id="pop-up"  className={popUp?'shows':'hidden'}>
                <div className="d-flex justify-content-center"> 
                    <p>Added product to cart</p>
                </div>
            </div>
        </div>
    )
}