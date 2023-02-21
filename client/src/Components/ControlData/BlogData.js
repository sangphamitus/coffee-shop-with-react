import React from "react";
import axios from "axios";
export function getBlogData(callBack,from,to)
{
    
    // const data=[{

    //     'img':'https://www.ecooe.com/ecooe-life/wp-content/uploads/2016/08/flatwhite-coffee.jpg',
    //     'postdate':'2019-04-24T03:33:30.000Z',
    //     'posthead':'GRIND YOUR COFFEE BEFORE BREWING',
    //     'postcontent':'Non officia excepteur quis ad. Do labore ad consectetur excepteur consectetur laborum sunt nisi qui aliquip sint velit. Eiusmod in ad eu laborum aliquip magna fugiat adipisicing culpa. Labore commodo adipisicing dolore ullamco nostrud enim do anim sunt non. Qui irure et ut pariatur aliquip voluptate ex consectetur adipisicing velit eu incididunt. Deserunt ea duis magna aliquip est enim culpa in dolore veniam qui culpa enim Lorem.'
    //     ,'idpost':'sadfdaskdfh'
    // },{
    //     'img':'https://www.baristainstitute.com/sites/default/files/styles/some_share/public/images/roasted%20coffee%20header%20picture.jpg?itok=DTWsa9cf',
    //     'postdate':'2024-07-24T03:33:30.000Z',
    //     'posthead':'HOW TO ROAST THE COFFEE BEANS',
    //     'postcontent':'Non officia excepteur quis ad. Do labore ad consectetur excepteur consectetur laborum sunt nisi qui aliquip sint velit. Eiusmod in ad eu laborum aliquip magna fugiat adipisicing culpa. Labore commodo adipisicing dolore ullamco nostrud enim do anim sunt non. Qui irure et ut pariatur aliquip voluptate ex consectetur adipisicing velit eu incididunt. Deserunt ea duis magna aliquip est enim culpa in dolore veniam qui culpa enim Lorem.'
    //     ,'idpost':'sadfdaskdfh'
    // },{
    //     'img':'https://cdn.tgdd.vn/2021/09/CookProduct/Cafe-latte-la-gi-latte-va-cupuchino-co-gi-khac-cac-loai-cach-pha-latte-0-1200x676.jpg',
    //     'postdate':'2022-07-24T03:33:30.000Z',
    //     'posthead':'A GUIDE TO MAKING A COFFEE',
    //     'postcontent':'Non officia excepteur quis ad. Do labore ad consectetur excepteur consectetur laborum sunt nisi qui aliquip sint velit. Eiusmod in ad eu laborum aliquip magna fugiat adipisicing culpa. Labore commodo adipisicing dolore ullamco nostrud enim do anim sunt non. Qui irure et ut pariatur aliquip voluptate ex consectetur adipisicing velit eu incididunt. Deserunt ea duis magna aliquip est enim culpa in dolore veniam qui culpa enim Lorem.'
    //     ,'idpost':'sadfdaskdfh'
    // }]
    // return data;
    if(from===to && from===-1)
    {
        console.log(process.env.REACT_APP_ENDPOINT+'/blog/get-all');
        axios.post(process.env.REACT_APP_ENDPOINT+'/blog/get-all')
            .then(res=>
            {
                let dataReturn=res.data.data;
               
              
                    callBack(dataReturn);
               
                
                
            }).catch(e=>console.log(e));
    }
    else{
        console.log(process.env.REACT_APP_ENDPOINT+'/blog/get-from-to');
        axios.post(process.env.REACT_APP_ENDPOINT+'/blog/get-from-to',{
            'from':from,
            'to':to
        })
            .then(res=>
            {
                let dataReturn=res.data.data;
               
              
               callBack(   dataReturn);
             
                
                
            }).catch(e=>console.log(e));
    }
    
}
export function getNumberBlog(callBack){
    console.log(process.env.REACT_APP_ENDPOINT+'/blog/get-number-blog');
    axios.post(process.env.REACT_APP_ENDPOINT+'/blog/get-number-blog')
        .then(res=>
        {
            let dataReturn=res.data.data;
           
          
                callBack(dataReturn);
           
            
            
        }).catch(e=>console.log(e));
}