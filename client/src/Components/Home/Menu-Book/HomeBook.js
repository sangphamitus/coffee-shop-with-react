import React from "react";
import './HomeBook.css'
export default function HomeBook ()
{
    return (
        <div id="booking-table" className="w-100" >
            <div >

                <div className="row justify-content-center m-0">
                    <input className="col-sm-5 " type='text' placeholder="YOUR NAME" required ></input>
                    <input className="col-sm-5" type='email' placeholder="EMAIL ADDRESS"required ></input>
                </div>
                <div className="row justify-content-center m-0">
                    <input className="col-sm-5 "  type='phone' placeholder="PHONE NUMBER" required></input>
                    <input className="col-sm-5 " type='date' placeholder="MM/DD/YYYY"required ></input>
                    </div>
                <div className="row justify-content-center m-0">
                    <input className="col-sm-5 " type="time" min="06:00am" max="10:00pm" placeholder="6:00am" required ></input>
                    <select className="col-sm-5 m-2" placeholder="02 person" required>
                        <option value='1 person'>01 person</option>
                        <option value='2 person'>02 person</option>
                        <option value='3 person'>03 person</option>
                        <option value='4 person'>04 person</option>
                    </select>
                </div>
            </div>
            <div className="d-flex justify-content-center w-100">
            <textarea  placeholder="YOUR MESSAGE..." >
</textarea>
      
            </div>
         
   
                <div className="d-flex justify-content-center ">
                    <button className="add-to-card-btn">BOOK NOW</button>
                </div>
        </div>
    )
}