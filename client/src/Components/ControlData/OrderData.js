import React from "react";
import axios from "axios";
export function OrderHandle({request,callback})
{
    console.log(process.env.REACT_APP_ENDPOINT+'/order/add-order');
    axios.post(process.env.REACT_APP_ENDPOINT+'/order/add-order',
    {
        ...request
    }).then(res=> {
        if(res.data.status==='success')
        {
          
            callback('Booking Success, thank for your buying, to see more products.'); 
        }
    }).catch(res=>callback('Booking fail, sorry for this error'));
}