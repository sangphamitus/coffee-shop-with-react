import React,{useState} from 'react'
import './Cart.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faTrashCan}from '@fortawesome/free-solid-svg-icons'
import ContentEditable from 'react-contenteditable'

import Displaycart from './DisplayCart/Displaycart.js'

export default function Cart({onCart,setCartOn,updateCart}) 
{

    const [toMoney,setToMoney]=useState([]);
    const [sumUp,setSumUp]=useState(0);

    const calcSumUp=()=> {
        let sum=0;
        onCart.forEach(each=> {
            const elem= document.getElementById('cart-in-'+each.productsname.replaceAll(/\s/g,''));
            if(elem)
            {
                const check= elem.getElementsByTagName('input')[0] 
                if(check.checked===true)
                {
                    const price=document.getElementById('money'+each.productsname.replaceAll(/\s/g,'')).innerText;
                    sum+=Number(price);
                }
            
            }
         
        })
        setSumUp(prevState=>sum);
        
    }   
    
    const addToCard=(dataIns)=>{
        var  tempCart=onCart;
        let price=0;
        const elem=tempCart.find(product=> product.productsname ===dataIns.productsname);
        if(elem)
        {
            price=tempCart.find(product=> product.productsname===dataIns.productsname).price;
            tempCart.find(product=> product.productsname===dataIns.productsname).quantities=dataIns.quantities
        }
        else{
            tempCart.push(dataIns);
        }
       
        setCartOn(prevState=>tempCart);
        document.getElementById('money'+dataIns.productsname.replaceAll(/\s/g,'')).innerText=(dataIns.quantities*price).toFixed(2);
       
        updateCart();
        calcSumUp();
    }
   
    const minusQuantity=(dataIns)=> {
        if(dataIns.quantities>=2)
        {
            dataIns.quantities-=1;
            document.getElementById('quantities'+dataIns.productsname.replaceAll(/\s/g,'')).innerText=dataIns.quantities;
            addToCard(dataIns); 
            
        }
    
    }
    const plusQuantity=(dataIns)=> {
       
            dataIns.quantities+=1;
            document.getElementById('quantities'+dataIns.productsname.replaceAll(/\s/g,'')).innerText=dataIns.quantities;
            addToCard(dataIns); 
          }
    const removeProducts=(e,dataDel)=>{
        const data=onCart;
   
 
        data.splice(data.indexOf(data.find(product=>product.productsname===dataDel)),1);
        setCartOn(prevState=>data);
        

        updateCart();
        calcSumUp();
       
        
    }

    const removeAll=(e)=>{
        var data=onCart;
        data.forEach(product=>{
            document.getElementById('cart-in-'+product.productsname.replaceAll(/\s/g,'')).remove()
            
        })
        data=[];

        setCartOn(prevState=>data);
        updateCart();
        document.getElementById('cart-quantities').innerText=0;
        document.getElementById('cart-quantities-overlay').innerText=0;
        setSumUp(0);
        
    }

    const checkInputAll=(e)=>{
       const product= document.querySelectorAll(".products-check")
        if(e.target.checked===true){
            product.forEach(each=>each.checked=true);
        }
        else
        {
            product.forEach(each=>each.checked=false);
        }
        calcSumUp();
     
    }
    
    const checkHandle=(e,checked)=> {
      
   
        calcSumUp();
        
    }
 

    return (
        <div id="cart-container">
            <section id="cart-banner" >   
                <div id="banner-content" className=" d-flex justify-content-center ">         
                    <div  className="position-absolute content">
                        <h1 className="text-center header-teko-font text-white">CART</h1>
                        </div>       
                            
                </div>
            </section>
            <div id="product-cart-page" className='w-100' >
                <div className='d-flex justify-content-center w-100 ms-auto me-auto' >
                    <div id="shopping-cart" className='row m-2 '>
                        <div className='w-100 bg-white bdr-10 mb-2 mt-2'>
                            <div id="function-bar"className='row p-2 text-center'>
                                <div className='col-1'><input type="checkbox" id="all-products"  onChange={e=>checkInputAll(e)}></input></div>
                                <div className='col-md-4'>Product</div>
                                <div className='col-sm-2'>Price</div>
                                <div className='col-sm-2'>Quantity</div>
                                <div className='col-sm-2'>Money</div>
                                <div onClick={e=>removeAll()} className='col-1 delete-btn' alt="remove all"><FontAwesomeIcon icon={faTrashCan}/></div>
                            </div>
                        </div>
                        <div className='bg-white w-100 bdr-10'>
                            {onCart.length!==0?
                            (<Displaycart onCart={onCart} minusQuantity={minusQuantity} plusQuantity={plusQuantity} removeProducts={removeProducts} checkHandle={checkHandle}
                                 />
                            ):(<div >
                                <h1 className='header-teko-font'>Don't have anything in cart?</h1>
                                <div className='w-100 d-flex justify-content-center'>
                                <button className='btn-to-shop'><Link to="/shop" className='text-decoration-none'>Go to Shop</Link></button>
                              
                                </div>
                                 </div>
                                )
                            }   
                        </div>
                    </div>
                    <div id="cart-calc" className='m-2'>
                        <div id="discount-content" className='w-100 mt-2 mb-2 bdr-10 p-1'>
                            <p>Discount</p>
                        </div>
                        <div id='sum-calc' className='w-100 bg-white bdr-10 text-end p-1'>
                            <p className='text-start  title'>Before VAT:</p>
                            <p>{sumUp.toFixed(2)}</p>
                            <div className='line'></div>
                            <p className='text-start  title'>After VAT:(10%)</p>
                            <p className='sumup'>{(sumUp*1.1).toFixed(2)}</p>
                           
                        </div>
                        <div className='d-flex justify-content-center m-2'>
                            {sumUp!==0?
                            (<button  className='header-teko-font order-btn'>ORDER</button>)
                            :(null)
                            }
                            
                        </div>
                       
                    </div>
                </div>
                <div className=''>

                </div>
            </div>
        </div>
    )
}