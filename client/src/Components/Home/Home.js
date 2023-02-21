import React from "react";
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'

import MenuHome from "./Menu-Home/MenuHome";
import HomeProducts from "./Menu-Products/HomeProducts";
import  HomeBook  from "./Menu-Book/HomeBook";
import HomeFeedback from "./Menu-Feedback/HomeFeedback";
import HomeSaleBanner from "./Sale-Banner/HomeSaleBanner";
import BlogHome from "./Blog-Home/BlogHome";
import cfs1 from "./../../Image/cfs1.jpg";
import cfs2 from "./../../Image/cfs2.png";
import cfs3 from "../../Image/cfs3.jpg";
import cfs4 from "../../Image/cfs4.jpg";
import cfs5 from "../../Image/cfs5.png";
import cfs6 from "../../Image/cfs6.jpg";


export default function Home({onCart,setCartOn,updateCart} )
{
    return (
        <div>
             <section id="header-banner" >   
                    <div id="banner-content" className=" d-flex justify-content-center ">         
                        <div  className="position-absolute content">
                            <h1 className="text-center header-teko-font">REBUILD COFFEE <br></br> IN TOWN</h1>
                         </div>       
                              
                    </div>
            </section>
            <section id="our-story">
                <div  className=" d-flex justify-content-center h-100">
                    <div  className="content fw-bolder">
                            <h1 className="text-center header-teko-font">OUR STORY</h1>
                            <div className="d-flex text-center justify-content-center" >
                                <FontAwesomeIcon icon={faMugHot} size="xl"/>
                               
                            </div>
                            <div id="cont" className="d-flex position-relative text-center justify-content-center w-100" >
                                <p className="fw-normal">Sunt tempor duis irure velit est sunt nisi eu mollit. Nostrud in consequat voluptate laboris. Ut aute adipisicing excepteur id et sit. Aute sint cupidatat qui quis ex nisi aliqua fugiat. Non dolor velit occaecat ipsum enim nostrud labore est sint pariatur proident.Mollit reprehenderit voluptate qui ea adipisicing amet cupidatat nostrud excepteur laboris eu adipisicing. Elit deserunt cillum consectetur anim dolore ullamco ex excepteur dolor mollit. Commodo sunt laborum pariatur nisi esse magna.
                                </p>
                            </div>
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

            <section id="our-products">
                <div  className=" d-flex justify-content-center h-100">
                    <div  className="content fw-bolder">
                            <h1 className="text-center header-teko-font">OUR PRODUCTS</h1>
                            <div className="text-center justify-content-center mb-3" >
                                <FontAwesomeIcon icon={faMugHot} size="xl"/>
                                <div className="d-flex justify-content-center p-3">
                                <p>Ipsum incididunt excepteur irure cillum nulla. Ullamco ipsum amet duis fugiat. Magna aliquip quis incididunt irure occaecat irure.</p>
          
                                </div>
                             </div>
                           
                            <div  className="w-100 d-flex" >
                                <HomeProducts onCart={onCart} setCartOn={setCartOn} updateCart={updateCart}/>
                            </div>
                           
                     </div>  
                </div>
            </section>
            
            <section id="book-your-table">
                <div  className=" d-flex justify-content-center h-100">
                    <div  className="content fw-bolder">
                            <h1 className="text-center header-teko-font">BOOK YOUR TABLE</h1>
                            <div className="text-center justify-content-center mb-3" >
                                <FontAwesomeIcon icon={faMugHot} size="xl"/>
                                <div className="d-flex justify-content-center p-3">
                                <p>Ipsum incididunt excepteur irure cillum nulla. Ullamco ipsum amet duis fugiat. Magna aliquip quis incididunt irure occaecat irure.</p>
          
                                </div>
                             </div>
                           
                            <div  className="w-100 d-flex justify-content-center" >
                                <HomeBook/>
                            </div>
                           
                     </div>  
                </div>
            </section>
            <section id="customer-feedback">
                <div  className=" d-flex justify-content-center h-100">
                    <div  className="content fw-bolder">
                            <h1 className="text-center header-teko-font">OUR HAPPY VISITORS</h1>
                            <div className="text-center justify-content-center mb-3" >
                                <FontAwesomeIcon icon={faMugHot} size="xl"/>
                                <div className="d-flex justify-content-center p-3">
                                <p>Ipsum incididunt excepteur irure cillum nulla. Ullamco ipsum amet duis fugiat. Magna aliquip quis incididunt irure occaecat irure.</p>
          
                                </div>
                             </div>
                           
                            <div  className="w-100 d-flex justify-content-center" >
                                <HomeFeedback/>
                            </div>
                           
                     </div>  
                </div>
            </section>
            <section id="sale-banner">
                
                    <HomeSaleBanner/>
              
                
            </section>
            <section id="our-blog">
                <div  className=" d-flex justify-content-center h-100">
                    <div  className="content fw-bolder">
                            <h1 className="text-center header-teko-font">OUR BLOG</h1>
                            <div className="text-center justify-content-center mb-3" >
                                <FontAwesomeIcon icon={faMugHot} size="xl"/>
                                <div className="d-flex justify-content-center p-3">
                                <p>Ipsum incididunt excepteur irure cillum nulla. Ullamco ipsum amet duis fugiat. Magna aliquip quis incididunt irure occaecat irure.</p>
          
                                </div>
                             </div>
                           
                            <div  className="w-100 d-flex" >
                                <BlogHome/>
                            </div>
                           
                     </div>  
                </div>
            </section>
            <section id="img-view-end">
                <div  className=" d-flex justify-content-center w-100">
                    <img src={cfs1}></img>
                    <img src={cfs2}></img>
                     <img src={cfs3}></img>
                      <img src={cfs4}></img>
                      <img src={cfs5}></img>
             
                </div>
            </section>
        </div>
       
    )
}