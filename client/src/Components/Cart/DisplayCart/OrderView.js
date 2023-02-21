import React from "react";
import './OrderView.css'
export default function OrderView({toOrder,sumUp})
{
    
    return(
        <div >
         

                <div className="d-flex justify-content-center" >
                    
                    <table id="letter-border">
                        <tr className="text-center">
                            <th>Products</th>
                            <th>Quantities</th>
                            <th>Price</th>
                       
                        </tr>
                        {toOrder.map((each,i)=><tr className="text-center" key={i}>
                                    <td>{each.product}</td>
                                    <td >{each.quantities}</td>
                                    <td>{each.price}</td>
                                    
                            </tr>)}
                        <tr className="text-center"> 
                            <td></td>
                            <td>{toOrder.reduce((prevValue,currentValue)=>prevValue+currentValue.quantities,0)}</td>
                            <td><b style={{color:"red"}}>{(new Number(sumUp)*1.1).toFixed(2)}</b><sup>(*)</sup></td>
                        
                        </tr>
                        <tr className="define-vat">
                            <td colSpan={3}><p className="m-0">(*) calculated VAT <span style={{color:"red"}}>10%</span></p></td>
                       
                        </tr>
                       <tr className="text-center">
                            <th colSpan={3}>Information</th>
                       </tr>
                        <tr id="info-tag" > 
                            <td colSpan={3}> 
                       
                            <div >
                                    <div >
                                        <div className="row justify-content-center m-0">
                                            <label>Your name:</label>
                                            <input className="col"  type='text' id="order-name" placeholder="YOUR NAME*" required ></input>
                                        
                                        </div>
                                        <div className="row justify-content-center m-0">
                                        <label>Phone number:</label>
                                            <input className="col "   type='phone' id="order-phone" placeholder="PHONE NUMBER*" required></input>
                                        
                                        </div>
                                        <div className="row justify-content-center m-0">
                                        <label>Address:</label>
                                            <input className="col "   type='address' id="order-address" placeholder="ADDRESS*" required></input>
                                            
                                        </div>
                                        <div className="row justify-content-center m-0">
                                            <label>Message:</label>
                                                
                                            <textarea id="order-message" className="bg-white col"  placeholder="YOUR MESSAGE..." >
                                                </textarea>

                                        </div>
                                    </div>
                       
                             </div>
                             <p id="error-typing" className="m-0"></p>
                    </td>
                        </tr>
                    </table> 
              
             
              
            </div>
         
            
          
        </div>
    )
}