import React from "react";
import axios from "axios";
export async function Contacting(data,callback) 
{
    console.log(process.env.REACT_APP_ENDPOINT+'/contact/add-contact');
    axios.post(process.env.REACT_APP_ENDPOINT+'/contact/add-contact',
    {
        ...data
    }).then(res=> {
        if(res.data.status==='success')
        {
            console.log('Contacting done');
            callback();
        }
    });


}