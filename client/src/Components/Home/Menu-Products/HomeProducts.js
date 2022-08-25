import React from "react";
import './HomeProducts.css'
import { getProductsData } from "../../ControlData/ProductsData";
export default function HomeProducts ( {onCart,setCartOn,updateCart}){

    const data=getProductsData().slice(0,4);

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
            updateCart();
    }

    return(
        <div id="products-menu" className="row w-100 ">
            {data.map((each,i)=> <div key={i} className='col-sm-3 mb-3'>
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