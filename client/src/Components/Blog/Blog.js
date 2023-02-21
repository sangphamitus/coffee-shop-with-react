import React,{useState,useEffect} from 'react'
import './Blog.css'

import {Link} from 'react-router-dom'
import { getBlogData,getNumberBlog } from '../ControlData/BlogData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faChevronRight,faChevronLeft} from '@fortawesome/free-solid-svg-icons'


export default function Blog()
{
    const postPerPage=3;
    const [sideData,setSideData]=useState([]);
    const [data,setData]=useState([]);
    const [ numberPage,setNumberPage]=useState(0);
    useEffect(()=>
    {
        getNumberBlog(setNumberPage);
        getBlogData(setData,0,3 );
        getBlogData(setSideData,0,3 );
             
    },[window.location])
    const [queryPage,setQueryPage]=useState(0);
    const [page,setPage]=useState('blog-page-1');   
    const blogButton=() =>{
        let result=[];
        for (let i=1;i<numberPage / postPerPage +1;i++ )
        {
            result=[...result,{'id':`blog-page-${i}`,
                                'content':i}]
         
        }  
        return result;
    }
    const changeBlogPage=(e)=>{
        const buttonContainer = document.querySelector(".blog-page-active");

        buttonContainer.className="";
        setPage(prevState=> e.target.getAttribute("id"));
        e.target.className='blog-page-active';
        getBlogData(setData,e.target.getAttribute("downValue"),e.target.getAttribute('upValue'));
        console.log(`${e.target.getAttribute("downValue")} - ${e.target.getAttribute('upValue')}`)
    }

    const prevButton =(e)=>{
        const buttonContainer = document.querySelector(".blog-page-active");
        let current=buttonContainer.getAttribute("upValue")/postPerPage;
        if(current!==1)
        {   
            buttonContainer.className="";
       
            current-=1;
            setPage(prevState=>'blog-page-'+current);
            const newButton=document.querySelector('#blog-page-'+current)
            newButton.className='blog-page-active';
            
        }
        const newButton=document.querySelector('#blog-page-'+current)
        getBlogData(setData,newButton.getAttribute("downValue"),newButton.getAttribute('upValue'));
        console.log(`${newButton.getAttribute("downValue")} - ${newButton.getAttribute('upValue')}`)
    }
    const nextButton =(e)=>{
        const buttonContainer = document.querySelector(".blog-page-active");
        let current=buttonContainer.getAttribute("upValue")/postPerPage;
        if(current<numberPage/postPerPage )
        {   
            buttonContainer.className="";
       
            current+=1;
            setPage(prevState=>'blog-page-'+current);
            const newButton=document.querySelector('#blog-page-'+current)
            newButton.className='blog-page-active';
            
        }
        const newButton=document.querySelector('#blog-page-'+current)
        getBlogData(setData,newButton.getAttribute("downValue"),newButton.getAttribute('upValue'));
        console.log(`${newButton.getAttribute("downValue")} - ${newButton.getAttribute('upValue')}`)
    }

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return(
        <div id="blog-container">
            <section id="blog-banner" >   
                <div id="banner-content" className=" d-flex justify-content-center ">         
                    <div  className="position-absolute content">
                        <h1 className="text-center header-teko-font text-white">OUR BLOG</h1>
                        </div>       
                            
                </div>
            </section>
            <section id='blog-display' className='d-flex justify-content-center w-100'>
                <div className='d-flex justify-content-center w-70'>
                    <div id="content-place">
                    {data.map((each,i)=> <div key={i} className="mb-3 blog-card p-0 m-2">
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
                        <Link to={'/blog/pid='+each.idpost} className="text-orange text-decoration-none">READ MORE ></Link>
                    </div>

                </div>)
                

                }
                <div id='change-page-button' className='d-flex justify-content-center m-3'>
                    <button onClick={e=>prevButton(e)}><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></button>
                   
                    {
                      blogButton().map((each,i)=><button id={each.id} 
                      className={each.id===page ? 'blog-page-active ':''} 
                      onClick={e=>changeBlogPage(e)}
                      downValue={(each.content-1)*postPerPage}
                      upValue={(each.content)*postPerPage}>{each.content}</button>)
                    }
                
                    <button onClick={e=>nextButton(e)}><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></button>
                </div>
                    </div>

                    <div id="function-place">
                        <div className='d-flex mt-3 mb-4'> 
                            <input placeholder='Search...'></input>
                            <button><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></button>
                        </div>    
                        <div id='blog-categories'>
                            <p className='header-teko-font'>CATEGORIES</p>
                            <ul>
                                <li>Coffee Beans</li>
                                <li>Double Expresso</li>
                                <li>American Coffee</li>
                                <li>Black Tea</li>
                                <li>Cold Coffee</li>
                                <li>Chocolate</li>

                            </ul>
                        </div>
                        <div id='recent-posts'>
                            <p className='header-teko-font'>RECENT POSTS</p>
                            {sideData.map((each,i)=>
                              <Link to={'/blog/pid='+each.idpost} className="text-black text-decoration-none side">
                                <div className='d-flex mt-2' key={i} >
                                <img src={each.img} ></img>
                                <div className='ms-2'>
                                    <p className='posthead'>{each.posthead}</p>
                                    <p className='time'>{ `${new Date(each.postdate).getDate()} ${months[new Date(each.postdate).getMonth()]} ${new Date(each.postdate).getFullYear()}`}</p>
                                </div>
                             
                            </div></Link>)}
                        </div>
                    
                    </div>
                </div>
            </section>
       </div>
    )
}