import React from "react";
import './BookingDone.css'
export default function BookingDone({message})
{
    return (<div id='result-booking' className="d-flex justify-content-center m-3">
        <p className="header-teko-font">{message}</p>
        
    </div>)
}