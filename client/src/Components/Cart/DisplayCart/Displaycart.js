import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan}from '@fortawesome/free-solid-svg-icons'
import '../Cart.css'
export default function Displaycart({onCart,minusQuantity,plusQuantity,removeProducts,checkHandle})
{
    return (
        <div id="cart-content-view-time">
            {onCart.map((each,i )=><div id={'cart-in-'+each.productsname.replaceAll(/\s/g,'')} className='row p-2 border-bottom text-center'>
                            <div className='col-1 align-item-center'><input type="checkbox" className='products-check' onChange={e=>checkHandle(e,{'productsname':each.productsname,
                                                                                    'price':each.price,
                                                                                    'quantities':each.quantities})}></input></div>
                            <div className='col-md-4 d-flex '><img src={each.img} ></img> <p className='productsname '>{each.productsname}</p></div>
                                
                                <div className='col-sm-2 text-center'>{each.price}</div>
                                <div className='col-sm-2 text-center'>
                                        <div  className='d-flex justify-content-center inp'>
                                            <button onClick={e=>minusQuantity({'productsname':each.productsname,
                                                                                    'price':each.price,
                                                                                    'quantities':each.quantities})}>-</button>
                                            <div id={'quantities'+each.productsname.replaceAll(/\s/g,'')} className='text-center p-2' >{each.quantities} </div>
                                            <button onClick={e=>plusQuantity({'productsname':each.productsname,
                                                                                    'price':each.price,
                                                                                    'quantities':each.quantities})}>+</button>
                                        </div>
                                   
                                    </div>
                                <div id={'money'+each.productsname.replaceAll(/\s/g,'')}  className='col-sm-2 text-red text-center'>{(each.price*each.quantities).toFixed(2)}</div>
                           
                                <div onClick={e=>removeProducts(e,each.productsname)} className='delete-btn col-1'><FontAwesomeIcon icon={faTrashCan}/></div>
                                
                                
                            </div>)}
        </div>
    )
}