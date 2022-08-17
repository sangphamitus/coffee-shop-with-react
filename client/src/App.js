import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Route,BrowserRouter as Router, Routes}  from 'react-router-dom'
import Home from './Components/Home/Home';
import logo from './Image/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping,faXmark ,faBars } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [menuOn, setMenuOne]= useState(false);

  return (
    <div>
    <div id='navbar' className='navbar mt-4 d-flex justify-content-center text-center position-fixed start-0 end-0 ml-auto mr-auto w-100'>
        <ul id="ul-l" className='d-flex py-2 text-align-center'>
          <li className='d-inline p-4'>HOME</li>
          <li className='d-inline p-4'>ABOUT</li>
          <li className='d-inline p-4'>MENU</li>
          <li className='d-inline p-4'>GALLERY</li>
      </ul>
          <img className='rounded-circle' src={logo} alt="rebuild logo" height="100" width="100"/>
      <ul id="ul-r" className='d-flex ps-0 py-2 text-align-center'>
          <li className='d-inline p-4'>BLOG</li>
          <li className='d-inline p-4'>SHOP</li>
          <li className='d-inline p-4'>CONTACT</li>
          <li className='d-inline py-4'> <FontAwesomeIcon icon={faMagnifyingGlass} size="xl"/></li>
          <li className='d-inline p-4 pe-5'> <FontAwesomeIcon icon={faBagShopping} size="xl"/></li>
        </ul>
    </div>
    <div id="navbar-overlay" className='position-absolute start-0 end-0 ml-auto mr-auto w-100'>
        <div id="navbar-overlay-bar" className='d-flex justify-content-between w-100'>
          <div className='d-flex justify-content-center p-2'>
             <img className='rounded-circle' src={logo} alt="rebuild logo" height="40" width="40"/>

          </div>
          <div className='pe-0'>
          <ul className='d-flex p-0 pe-3'>
            <li className='p-3'> <FontAwesomeIcon icon={faMagnifyingGlass} size="xl"/></li>
            <li className='p-3'> <FontAwesomeIcon icon={faBagShopping} size="xl"/> </li>
            <li id="menuOff" className={menuOn?'p-3':'p-3 hidden'} onClick={event=>{event.preventDefault();setMenuOne(prevState=>!prevState)}}> <FontAwesomeIcon icon={faXmark} size="xl"/> </li>
            <li id="menuOn" className={menuOn?'p-3 hidden':'p-3'} onClick={event=>{event.preventDefault();setMenuOne(prevState=>!prevState)}}> <FontAwesomeIcon icon={faBars} size="xl"/> </li>
          </ul>
        </div>
        </div>
        {menuOn?( <div id="menuOnOff" className='d-inline w-100'>
          <div className='border border-bottom border-light border-1 '> </div>
        <ul className='ps-0'>
          <li className='p-3 ps-4'>HOME</li>
          <li className='p-3 ps-4'>ABOUT</li>
          <li className='p-3 ps-4'>MENU</li>
          <li className='p-3 ps-4'>GALLERY</li>
          <li className='p-3 ps-4'>BLOG</li>
          <li className='p-3 ps-4'>SHOP</li>
          <li className='p-3 ps-4'>CONTACT</li>
       
        </ul>
        </div>):null}
       
      
    </div>
       <Router>
                <Routes>
                    <Route exact path='/' component={<Home/>} element={<Home/>}></Route>
                </Routes>
        </Router>
    </div>
   
  );
}

export default App;
