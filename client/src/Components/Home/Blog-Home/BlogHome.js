import React from "react";
import './BlogHome.css'
import {Link} from 'react-router-dom'

export default function BlogHome()
{
    const data=[{
        'img':'https://www.ecooe.com/ecooe-life/wp-content/uploads/2016/08/flatwhite-coffee.jpg',
        'postdate':'2019-04-24T03:33:30.000Z',
        'posthead':'GRIND YOUR COFFEE BEFORE BREWING',
        'postcontent':'Non officia excepteur quis ad. Do labore ad consectetur excepteur consectetur laborum sunt nisi qui aliquip sint velit. Eiusmod in ad eu laborum aliquip magna fugiat adipisicing culpa. Labore commodo adipisicing dolore ullamco nostrud enim do anim sunt non. Qui irure et ut pariatur aliquip voluptate ex consectetur adipisicing velit eu incididunt. Deserunt ea duis magna aliquip est enim culpa in dolore veniam qui culpa enim Lorem.'
    },{
        'img':'https://www.baristainstitute.com/sites/default/files/styles/some_share/public/images/roasted%20coffee%20header%20picture.jpg?itok=DTWsa9cf',
        'postdate':'2024-07-24T03:33:30.000Z',
        'posthead':'HOW TO ROAST THE COFFEE BEANS',
        'postcontent':'Non officia excepteur quis ad. Do labore ad consectetur excepteur consectetur laborum sunt nisi qui aliquip sint velit. Eiusmod in ad eu laborum aliquip magna fugiat adipisicing culpa. Labore commodo adipisicing dolore ullamco nostrud enim do anim sunt non. Qui irure et ut pariatur aliquip voluptate ex consectetur adipisicing velit eu incididunt. Deserunt ea duis magna aliquip est enim culpa in dolore veniam qui culpa enim Lorem.'
    },{
        'img':'https://cdn.tgdd.vn/2021/09/CookProduct/Cafe-latte-la-gi-latte-va-cupuchino-co-gi-khac-cac-loai-cach-pha-latte-0-1200x676.jpg',
        'postdate':'2022-07-24T03:33:30.000Z',
        'posthead':'A GUIDE TO MAKING A COFFEE',
        'postcontent':'Non officia excepteur quis ad. Do labore ad consectetur excepteur consectetur laborum sunt nisi qui aliquip sint velit. Eiusmod in ad eu laborum aliquip magna fugiat adipisicing culpa. Labore commodo adipisicing dolore ullamco nostrud enim do anim sunt non. Qui irure et ut pariatur aliquip voluptate ex consectetur adipisicing velit eu incididunt. Deserunt ea duis magna aliquip est enim culpa in dolore veniam qui culpa enim Lorem.'
    }]
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