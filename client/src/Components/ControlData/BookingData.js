import React from "react";
import axios from "axios";
export async function Booking(data,callback) 
{
    console.log(process.env.REACT_APP_ENDPOINT+'/booking/add-booking');
    axios.post(process.env.REACT_APP_ENDPOINT+'/booking/add-booking',
    {
        ...data
    }).then(res=> {
        if(res.data.status==='success')
        {
            console.log('Booking done');
            callback();
        }
    });


}