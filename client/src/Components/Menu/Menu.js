import React from "react";
import './Menu.css'

import MenuHome from "../Home/Menu-Home/MenuHome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'


export default function Menu() 
{
    return  (
        <div>
        <section id="menu-banner" >   
               <div id="banner-content" className=" d-flex justify-content-center ">         
                   <div  className="position-absolute content">
                       <h1 className="text-center header-teko-font text-white">OUR MENU</h1>
                    </div>       
                         
               </div>
       </section>
       <section id="our-menu">
                <div  className=" d-flex justify-content-center h-100">
                    <div  className="content fw-bolder">
                            <h1 className="text-center header-teko-font">COFFEE MENU</h1>
                            <div className="d-flex position-relative text-center justify-content-center mb-3" >
                                <FontAwesomeIcon icon={faMugHot} size="xl"/>
                                
                            </div>
                            <div  className="w-100 d-flex" >
                            <MenuHome/>
                                
                            </div>
                           
                     </div>  
                </div>
            </section>
       </div>
    )

}