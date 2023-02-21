import React,{useState} from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping,faXmark ,faBars, faLocationDot , faCalendarDays,faClock,faF,faDove,faImagePortrait, faMugHot} from '@fortawesome/free-solid-svg-icons'
import { Contacting } from '../ControlData/ContactData'

export default function Contact() 
{ 
    const [popUp,setPopUp]= useState(false);
    const ContactHandle=(e)=>
    {
        e.preventDefault();
     
        const data={
            name:document.getElementById('contact-name').value,
            email:document.getElementById('contact-email').value,
            phone:document.getElementById('contact-phone').value,
            subject:document.getElementById('contact-subject').value,
            message:document.getElementById('contact-message').value
        }
        console.log(data);
        Contacting(data,clearInput);
    }
    const clearInput =() => {
        setPopUp(prevState=>true);
        setTimeout(()=> setPopUp(prevState=>false),1500);
    }  

    return (
       <div id="contact-container">
            <section id="contact-banner" >   
                <div id="banner-content" className=" d-flex justify-content-center ">         
                    <div  className="position-absolute content">
                        <h1 className="text-center header-teko-font text-white">CONTACT US</h1>
                        </div>       
                            
                </div>
            </section>
            <section id="contact-form">
                <div id="contact-info" className='d-flex justify-content-center'>
                     <div className='row d-flex justify-content-center'>
            <div className='info-flag col-sm-4 text-center'>
              <div className='d-flex mr-auto ml-auto justify-content-center'>
                <div className='flag-top p-3'>
                      <FontAwesomeIcon icon={faLocationDot}/>
                  </div>
              </div>
              <p className='m-0 kdl'>LOCATION</p>
                <p className="dex">Address in HCMUS, Ho Chi Minh city</p>
              </div>
              <div className='info-flag col-sm-4  text-center'>
              <div className='d-flex mr-auto ml-auto justify-content-center'>
                <div className='flag-top p-3'>
                      <FontAwesomeIcon icon={faCalendarDays}/>
                  </div>
              </div>
                <p className='m-0 kdl'>CALL US</p>
                <p className="dex">+0 123-456-789</p>
              </div>
              <div className='info-flag col-sm-4  text-center'>
              <div className='d-flex mr-auto ml-auto justify-content-center'>
                <div className='flag-top p-3'>
                      <FontAwesomeIcon icon={faClock}/>
                  </div>
              </div>
                <p className='m-0 kdl'>EMAIL US</p>
                <p className="dex">rebuild@example.com</p>
              </div>

                    </div>        
                </div>
                <div id="drop-a-line" className='d-flex justify-content-center'>
                    <div className='w-70'>
                        <div  className=" d-flex justify-content-center ">
                            <div  className="content fw-bolder">
                                <h1 className="text-center header-teko-font">DROP US A LINE</h1>
                                    <div className="d-flex position-relative text-center justify-content-center mb-3" >
                                        <FontAwesomeIcon icon={faMugHot} size="xl"/>
                                        
                                    </div>
                            </div>   
                        </div>  

                            <div className="row justify-content-center m-2">
                                <input className="col-sm-5 " type='text' id="contact-name" placeholder="YOUR NAME*" required ></input>
                                <input className="col-sm-5" type='email' id="contact-email" placeholder="EMAIL ADDRESS*"required ></input>
                            </div>
                            <div className="row justify-content-center m-2">
                                <input className="col-sm-5 "  type='phone' id="contact-phone" placeholder="PHONE NUMBER"></input>
                                <input className="col-sm-5 " type='text' id="contact-subject" placeholder="SUBJECT*"required ></input>
                            </div>
    
                            <div className="d-flex justify-content-center w-100 ">
                                <textarea placeholder="YOUR MESSAGE..." id="contact-message"  > </textarea>
                            </div> 
                            <div className="d-flex justify-content-center w-100 ">
                                <button id="submit-button" onClick={e=>ContactHandle(e)}>SUBMIT</button>
                            </div> 
                            <div id="pop-up z-index-50"  className={popUp?'shows':'hidden'}>
                                <div className="d-flex justify-content-center"> 
                                    <p>Adding Contact success</p>
                                </div>
            </div>
                            
                    </div>        
               
                </div>
            </section>

                <div className="map">
                    <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=227%20nguyen%20van%20cu&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
               
        </div>
    )
}