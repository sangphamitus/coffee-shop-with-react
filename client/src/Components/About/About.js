import React from "react";
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import logo from './../../Image/logo.jpg'
import HomeFeedback from "../Home/Menu-Feedback/HomeFeedback";
export default function About()
{
    return (
        <div>
             <section id="about-banner" >   
                    <div id="banner-content" className=" d-flex justify-content-center ">         
                        <div  className="position-absolute content">
                            <h1 className="text-center header-teko-font text-white">ABOUT US</h1>
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
            <section id="about-content-words" >   
                    <div id="banner-content" className=" d-flex justify-content-center ">     
                        <div  className="content fw-light">
                            <div className="w-100 d-flex justify-content-center">
                                <img src={logo} alt="rebuild logo" height="100" width="100"/>
                            </div>

                            <p className="text-center header-teko-font text-white m-3">
                                " GOOD IDEAS START WITH BRAINSTORMING <br></br>GREAT IDEAS START WITH COFFEE "</p>
                            <p className="text-center header-teko-font fs-2">- REBUILD -</p>
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
        </div>
    )
}