import React from "react";
import axios from "axios";
export function getMenuData(callBack)
{
    
    
    console.log(process.env.REACT_APP_ENDPOINT+'/menu/get-all');
    axios.post(process.env.REACT_APP_ENDPOINT+'/menu/get-all')
        .then(res=>
        {
            let dataReturn=res.data.data;
          
                callBack(dataReturn);
          
            
            
        }).catch(e=>console.log(e));
}