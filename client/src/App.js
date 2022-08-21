import React,{useState,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Link,Route,BrowserRouter as Router, Routes}  from 'react-router-dom'

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';

import logo from './Image/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping,faXmark ,faBars, faLocationDot , faCalendarDays,faClock,faF,faDove,faImagePortrait } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [menuOn, setMenuOne]= useState(false);
  const [tagOn,setTagOn] =useState('home');
  const [onCart,setOnCart] =useState([]);
  

  useEffect(()=>
  {
    const tagname=window.location.pathname.substring(1);
    console.log(tagname);
  },[window.location])

  const clickHandler=(event)=>{

    const tagname=window.location.pathname.substring(1);
    console.log(tagname);
    if (tagname!=="")
    {
     setTagOn(prevState=> tagname);
    }
    else{
      setTagOn( prevState=>'home');
    }
    console.log(tagOn);
  
  }

 
  return (
    <Router>
    <div id='navbar' className='navbar mt-4 d-flex justify-content-center text-center position-fixed start-0 end-0 ml-auto mr-auto w-100'>
        <ul id="ul-l" className='d-flex py-2 text-align-center'>
          <li className='d-inline p-4'><Link id='home' to="/" className={window.location.pathname.substring(1)===''?'active':''} onClick={e=>clickHandler(e)}>HOME</Link> </li>
          <li className='d-inline p-4'><Link id='about' to="/about" className={window.location.pathname.substring(1)==='about'?'active':''} onClick={e=>clickHandler(e)}>ABOUT</Link></li>
          <li className='d-inline p-4'><Link id='menu' to="/menu" className={window.location.pathname.substring(1)==='menu'?'active':''} onClick={e=>clickHandler(e)}>MENU</Link></li>
          <li className='d-inline p-4'><Link id='gallery' to="/gallery" className={window.location.pathname.substring(1)==='gallery'?'active':''} onClick={e=>clickHandler(e)}>GALLERY</Link></li>
      </ul>
          <img className='rounded-circle' src={logo} alt="rebuild logo" height="100" width="100"/>
      <ul id="ul-r" className='d-flex ps-0 py-2 text-align-center'>
          <li className='d-inline p-4'><Link id='blog' to="/blog" className={window.location.pathname.substring(1)==='blog'?'active':''} onClick={e=>clickHandler(e)}>BLOG</Link></li>
          <li className='d-inline p-4'><Link id='shop' to="/shop" className={window.location.pathname.substring(1)==='shop'?'active':''} onClick={e=>clickHandler(e)}>SHOP</Link></li>
          <li className='d-inline p-4'><Link id='contact' to="/contact" className={window.location.pathname.substring(1)==='contact'?'active':''} onClick={e=>clickHandler(e)}>CONTACT</Link></li>
          <li className='d-inline py-4'> <FontAwesomeIcon icon={faMagnifyingGlass} size="xl"/></li>
          <li className='d-inline p-4 pe-5'> <FontAwesomeIcon icon={faBagShopping} size="xl"/></li>
        </ul>
    </div>
    <div id="navbar-overlay" className='fixed-top  start-0 end-0 ml-auto mr-auto'>
        <div id="navbar-overlay-bar" className=' d-flex justify-content-between w-100 '>
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
        <Link id='home' to="/" className={window.location.pathname.substring(1)==='home'?'active':''} onClick={e=>clickHandler(e)}><li id="home" className='ps-4 p-3'>HOME </li></Link>
          <Link id='about' to="/about" className={window.location.pathname.substring(1)==='about'?'active':''} onClick={e=>clickHandler(e)}><li id="about" className='ps-4 p-3'>ABOUT</li></Link>
          <Link id='menu' to="/menu" className={window.location.pathname.substring(1)==='menu'?'active':''} onClick={e=>clickHandler(e)}><li id="menu" className='ps-4 p-3'>MENU</li></Link>
          <Link id='gallery' to="/gallery" className={window.location.pathname.substring(1)==='gallery'?'active':''} onClick={e=>clickHandler(e)}><li id="gallery" className='ps-4 p-3'>GALLERY</li></Link>
          <Link id='blog' to="/blog" className={window.location.pathname.substring(1)==='blog'?'active':''} onClick={e=>clickHandler(e)}><li id="blog" className='ps-4 p-3'>BLOG</li></Link>
          <Link id='shop' to="/shop" className={window.location.pathname.substring(1)==='shop'?'active':''} onClick={e=>clickHandler(e)}><li id="shop" className='ps-4 p-3'>SHOP</li></Link>
          <Link id='contact' to="/contact" className={window.location.pathname.substring(1)==='contact'?'active':''} onClick={e=>clickHandler(e)}><li id="contact" className='ps-4 p-3'>CONTACT</li></Link>
     
        </ul>
        </div>):null}
       
      
    </div>
       
                <Routes>
                    <Route exact path='/' component={<Home/>} element={<Home/>}></Route>
                    <Route path='/about' component={<About/>} element={<About/>}></Route>
                    <Route path='/menu' component={<Menu/>} element={<Menu/>}></Route>
                
                
                </Routes>





    <section id='footer' className='d-flex justify-content-center w-100'>
      <div className='w-70 mt-5'>
      <div id="flag-info" className='pt-4 pb-3'>
        <div className='row d-flex justify-content-center'>
            <div className='info-flag col-sm-3 text-center'>
              <div className='d-flex mr-auto ml-auto justify-content-center'>
                <div className='flag-top p-3'>
                      <FontAwesomeIcon icon={faLocationDot}/>
                  </div>
              </div>
                <p>Address in HCMUS, Ho Chi Minh city</p>
              </div>
              <div className='info-flag col-sm-3  text-center'>
              <div className='d-flex mr-auto ml-auto justify-content-center'>
                <div className='flag-top p-3'>
                      <FontAwesomeIcon icon={faCalendarDays}/>
                  </div>
              </div>
                <p className='m-0'>BOOK APPOINTMENT</p>
                <p>+0 123-456-789</p>
              </div>
              <div className='info-flag col-sm-3  text-center'>
              <div className='d-flex mr-auto ml-auto justify-content-center'>
                <div className='flag-top p-3'>
                      <FontAwesomeIcon icon={faClock}/>
                  </div>
              </div>
                <p className='m-0'>MON - SAT : 7.00AM - 8.00PM</p>
                <p>SUNDAY : <span className='text-orange'>CLOSED</span></p>
              </div>

        </div>
       
      </div>
    <div id="contact-field" className='mt-5' >
      <div className='d-flex justify-content-center row'>
      <div className='info-flag col-md-3 text-start m-3'>
                <p>2022 rebuild cafe web</p>
                <p>source from: <a href='https://themeforest.net/item/joe-coffee-a-psd-template-for-cafes-coffee-shops-and-bars/screenshots/22803066?irgwc=1&clickid=Tqn0veRUnxyLUMFwUx0Mo3QnUkDUCIzWLXps080&iradid=275988&irpid=357605&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_357605&utm_medium=affiliate&utm_source=impact_radius&index=1'>Go to Source</a></p>
              </div>
              <div className='info-flag col-md-3 text-center m-3'>
                <img src={logo} height="80" width="80" ></img>
              </div>
              <div className='info-flag col-md-3  text-center m-3'>
                <div className='d-flex justify-content-center'>
                  <div className='row d-flex'> 
                      <div className='flag-bottom p-3 col'>
                      <FontAwesomeIcon icon={faF} />
                  </div>
                  <div className='flag-bottom p-3 col'>
                      <FontAwesomeIcon icon={faDove}/>
                  </div>
                  <div className='flag-bottom p-3 col'>
                      <FontAwesomeIcon icon={faImagePortrait}/>
                  </div>
                      
                  </div>
                </div>
              </div>
      </div>
      </div>
      </div>
      
    </section>
    </Router>
   
  );
}

export default App;
