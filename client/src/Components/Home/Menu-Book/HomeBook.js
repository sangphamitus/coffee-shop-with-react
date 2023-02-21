import React,{useState} from "react";
import './HomeBook.css'
import { Booking } from "../../ControlData/BookingData";
export default function HomeBook ()
{
    const [popUp,setPopUp]= useState(false);
    const buttonBookHandle=(e)=>
    {
        e.preventDefault();
        const day=new Date(document.getElementById('book-date').value +' '+ document.getElementById('book-time').value);

        const data={
            name:document.getElementById('book-name').value,
            address:document.getElementById('book-address').value,
            date:day.toUTCString(),
            person:document.getElementById('book-person').value,
            message:document.getElementById('book-message').value
        }
        Booking(data,clearInput);
    }
    const clearInput =() => {
        setPopUp(prevState=>true);
        setTimeout(()=> setPopUp(prevState=>false),1500);
    }  
    return (
        <div id="booking-table" className="w-100" >
            <div >

                <div className="row justify-content-center m-0">
                    <input className="col-sm-5"  type='text' id="book-name" placeholder="YOUR NAME" required ></input>
                    <input className="col-sm-5"  type='email' id="book-address" placeholder="EMAIL ADDRESS"required ></input>
                </div>
                <div className="row justify-content-center m-0">
                    <input className="col-sm-5 "   type='phone' id="book-phone" placeholder="PHONE NUMBER" required></input>
                    <input className="col-sm-5 "  type='date' id="book-date" placeholder="MM/DD/YYYY"required ></input>
                    </div>
                <div className="row justify-content-center m-0">
                    <input className="col-sm-5 "  type="time" min="06:00am" max="10:00pm"  id="book-time" placeholder="6:00am" required ></input>
                    <select className="col-sm-5 m-2"  id="book-person" placeholder="02 person" required>
                        <option value='1 person'>01 person</option>
                        <option value='2 person'>02 person</option>
                        <option value='3 person'>03 person</option>
                        <option value='4 person'>04 person</option>
                    </select>
                </div>
            </div>
            <div className="d-flex justify-content-center w-100">
            <textarea id="book-message"  placeholder="YOUR MESSAGE..." >
</textarea>
      
            </div>
         
   
                <div className="d-flex justify-content-center ">
                    <button className="add-to-card-btn" onClick={e=>buttonBookHandle(e)}>BOOK NOW</button>
                </div>
                <div id="pop-up"  className={popUp?'shows':'hidden'}>
                <div className="d-flex justify-content-center"> 
                    <p>Booking success</p>
                </div>
            </div>
        </div>
    )
}