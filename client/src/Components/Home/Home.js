import React from "react";
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'


export default function Home()
{
    return (
        <div>
             <section id="header-banner" >   
                    <div id="banner-content" className="position-relative d-flex justify-content-center h-100">         
                        <div  className="position-absolute content">
                            <h1 className="text-center">REBUILD COFFEE <br></br> IN TOWN</h1>
                         </div>       
                              
                    </div>
            </section>
            <section id="our-story">
                <div  className="position-relative d-flex justify-content-center h-100">
                    <div  className="position-absolute content fw-bolder">
                            <h1 className="text-center">OUR STORY</h1>
                            <div className="d-flex position-relative text-center justify-content-center" >
                                <FontAwesomeIcon icon={faMugHot} size="xl"/>
                               
                            </div>
                            <div id="cont" className="d-flex position-relative text-center justify-content-center w-50" >
                                <p className="fw-normal">Mollit reprehenderit voluptate qui ea adipisicing amet cupidatat nostrud excepteur laboris eu adipisicing. Elit deserunt cillum consectetur anim dolore ullamco ex excepteur dolor mollit. Commodo sunt laborum pariatur nisi esse magna.
                                </p>
                            </div>
                     </div>  
                     
                </div>
            </section>
        </div>
       
    )
}