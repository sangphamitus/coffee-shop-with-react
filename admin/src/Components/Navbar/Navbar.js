import React from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faX,faHouse,faWarehouse,faBox,faCommentDots } from '@fortawesome/free-solid-svg-icons'

import  logo from './../../img/logo.png'
export default function Navbar({menuOpen,setMenuOpen})
{
    
    return (
        <div>
            <div id="side-bar" className='p-2' onMouseEnter={e=>{setMenuOpen(prevState=>true);console.log(menuOpen)}}
                                            onMouseLeave={e=>{setMenuOpen(prevState=>false);console.log(menuOpen)}}>
                
           
            <div className='pt-4' >
         
              <ul id="menu-side" className='list-unstyled justify-content-center mt-2 w-100'>
                  <li>
                     <Link to="/home"> 
                        <div className={window.location.pathname==='/home'?'row active':'row'} >
                          <div className='col '><FontAwesomeIcon icon={faHouse}  size='1x'/>
                            </div>
                          <div className={menuOpen?'col title':'hidden'}><p className='text-start'>Dashboard</p></div>
                        </div>
                      </Link>
                  </li>
                  <li >
                     <Link to="/storage"> 
                        <div className={window.location.pathname==='/storage'?'row active':'row'} >
                          <div className='col '><FontAwesomeIcon icon={faWarehouse}  size='1x'/>
                            </div>
                          <div className={menuOpen?'col title':'hidden'}><p className='text-start'>Storage</p></div>
                        </div>
                      </Link>
                  </li>
                  <li >
                     <Link to="/order"> 
                        <div className={window.location.pathname==='/order'?'row active':'row'} >
                          <div className='col '><FontAwesomeIcon icon={faBox}  size='1x'/>
                            </div>
                          <div className={menuOpen?'col title':'hidden'}><p className='text-start'>Order</p></div>
                        </div>
                      </Link>
                  </li>
                  <li >
                     <Link to="/feedback"> 
                        <div className={window.location.pathname==='/feedback'?'row active':'row'} >
                          <div className='col '><FontAwesomeIcon icon={faCommentDots}  size='1x'/>
                            </div>
                          <div className={menuOpen?'col title':'hidden'}><p className='text-start'>Feedback</p></div>
                        </div>
                      </Link>
                  </li>
                </ul>
              </div>
           
        </div>
      
        <div id='side-menu'>
          {menuOpen?
          (
            
              <div id='black-overlay'></div>
           
      
          ):(null)}
            
        </div>
        </div>
    )
}