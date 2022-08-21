import React from "react";
import './MenuHome.css'

export default function MenuHome() 
{
    const data=[{
        
        "imgsrc":"https://www.ikea.com/es/en/images/products/patar-espresso-coffee-beans-organic-utz-certified-100-arabica-beans__1111847_pe870970_s5.jpg",
       'cafename':'Caffee Macchiato',
       'price':15,
        'discription':'Shot of expresso extracted the Italian way' 

    },{
        "imgsrc":"https://www.ikea.com/es/en/images/products/patar-espresso-coffee-beans-organic-utz-certified-100-arabica-beans__1111847_pe870970_s5.jpg",
        'cafename':'Caffee Latte',
        'price':20,
         'discription':'Expresso and steamed milk with foamed' 
     },{
        "imgsrc":"https://www.ikea.com/es/en/images/products/patar-espresso-coffee-beans-organic-utz-certified-100-arabica-beans__1111847_pe870970_s5.jpg",
        'cafename':'Expresso Macchiato',
        'price':25,
         'discription':'Expressoo marked with foamed milk' 
     },{
        "imgsrc":"https://www.ikea.com/es/en/images/products/patar-espresso-coffee-beans-organic-utz-certified-100-arabica-beans__1111847_pe870970_s5.jpg",
        'cafename':'Caffee Americano',
        'price':18,
         'discription':'Expresso topped with hot water' 
     },{
        "imgsrc":"https://www.ikea.com/es/en/images/products/patar-espresso-coffee-beans-organic-utz-certified-100-arabica-beans__1111847_pe870970_s5.jpg",
        'cafename':'Hot Chocolate',
        'price':25,
         'discription':'Real chocolate blended with steamed milk' 
     },{
        "imgsrc":"https://www.ikea.com/es/en/images/products/patar-espresso-coffee-beans-organic-utz-certified-100-arabica-beans__1111847_pe870970_s5.jpg",
        'cafename':'Strawberry Milk',
        'price':15,
         'discription':'Real Strawberry blended with steamed milk' 
     },{
        "imgsrc":"https://www.ikea.com/es/en/images/products/patar-espresso-coffee-beans-organic-utz-certified-100-arabica-beans__1111847_pe870970_s5.jpg",
        'cafename':'Asian Lemon Tea',
        'price':10,
         'discription':'Ask your Barista about our selection of teas' 
     },
     {
        "imgsrc":"https://www.ikea.com/es/en/images/products/patar-espresso-coffee-beans-organic-utz-certified-100-arabica-beans__1111847_pe870970_s5.jpg",
        'cafename':'Black Asian Tea',
        'price':25,
         'discription':'A blend of black tea, spices, honey and milk' 
     }
    ];
    return (
        <div id="coffee-menu-home" className="row" >
            {data.map((each,i)=> <div key={i} className='d-flex w-50 .col-sm-5 .col-md-6 card-block'> 
                <img src={each.imgsrc} className="me-3" width='50' height='50'></img>
                <div className="w-100">
                    <div>
                <p className="d-inline cafename">{each.cafename}</p>
                <p className="d-inline float-end m-0 text-orange">${each.price}</p>
                
                    </div>
             
                            
                <p className="discription">{each.discription}</p>
                </div>
            </div>)}
        </div>
    )
}