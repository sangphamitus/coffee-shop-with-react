

import './App.css';

import {Routes,Route} from 'react-router-dom'

import  React,{useState} from 'react'

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Storage from './Components/Storage/Storage';
import Order from './Components/Order/Order';
import Feedback from './Components/Feedback/Feedback';
function App() {

  const [menuOpen,setMenuOpen]= useState(false);

  return (
    <div className='d-flex'>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        
        <div id='main-view' className={menuOpen?'avoid-click':''}>
          <Routes>
              <Route path='/storage' element={<Storage/>} component={<Storage/>}></Route>
              <Route exact path='/home' element={<Home/>} component={<Home/>}></Route>
              <Route path='/order' element={<Order/>} component={<Order/>}></Route>
              <Route path='/feedback' element={<Feedback/>} component={<Feedback/>}></Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
