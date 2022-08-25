import React from "react";
import './BlogHome.css'
import {Link} from 'react-router-dom'
import { getBlogData } from "../../ControlData/BlogData";

export default function BlogHome()
{   
    const data=getBlogData();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return (
        <div id='blog-container' className="w-100">
            <div className="w-100 row d-flex justify-content-center m-0 p-0">
                {data.map((each,i)=> <div key={i} className="col-sm-3 mb-3 blog-card p-0 m-2">
                    <div className="img-field d-flex position-relative">
                  
                        <div className="time-stamp text-center position-absolute p-2 float-start">
                            <p className="header-teko-font ">{ new Date(each.postdate).getDate()}</p>
                            <p className="header-teko-font">{ months[new Date(each.postdate).getMonth()]}</p>
                        </div>
                        <img src={each.img} ></img>

                    </div>
                    <div className="text-field p-3">
                        <h1 className="header-teko-font">{each.posthead}</h1>
                        <p>{each.postcontent.length<=160 ? each.postcontent : `${each.postcontent.substring(0,160)}...`}</p>
                        <Link to='/blog' className="text-orange text-decoration-none">READ MORE ></Link>
                    </div>
                </div>)

                }
            </div>
        </div>
    )
}