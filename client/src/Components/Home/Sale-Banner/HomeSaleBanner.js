import React from "react";
import './HomeSaleBanner.css'
import coffeebag from './../../../Image/coffee-packaging-bags-trans.png'
import {Link} from 'react-router-dom'


export default function HomeSaleBanner()
{
    return (
        <div id='HomeSaleBanner' className="d-flex justify-content-center p-3 ">
            <div className="header-teko-font bg-black text-white ">
                <div id="content-fils-capsure"className="d-flex border-orange-dash m-4 p-5 ">
                    <div id='content-fils' className="justify-content-center p-3">
                         <h1 >DISCOVER REBUILD COFFEE FALVOURS</h1>
                         <h2> SALE <span className="text-orange">25%</span> OFF ON ALL COFFEE FALVOURS</h2>
                         <Link to='/shop'><button className="shop-button">SHOP NOW</button> </Link>
                    </div>
                    <img src={coffeebag} width="300" height="260"></img>
                </div>
       
            </div>
         
        </div>
    )
}