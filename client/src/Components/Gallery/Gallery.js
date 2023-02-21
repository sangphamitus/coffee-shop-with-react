import React,{useState} from 'react'

import './Gallery.css'
import pic1 from '../../Image/Gallery/cfs1.jpg'
import pic2 from '../../Image/Gallery/cfs2.png'
import pic3 from '../../Image/Gallery/cfs3.jpg'
import pic4 from '../../Image/Gallery/cfs4.jpg'
import pic5 from '../../Image/Gallery/cfs5.png'
import pic6 from '../../Image/Gallery/cfs6.jpg'
import pic7 from '../../Image/Gallery/cfs7.jpg'
import pic8 from '../../Image/Gallery/cfs8.jpg'
import pic9 from '../../Image/Gallery/cfs9.jpg'
import pic10 from '../../Image/Gallery/cfs10.jpg'
import pic11 from '../../Image/Gallery/cfs11.jpg'
import pic12 from '../../Image/Gallery/cfs12.jpg'
import pic13 from '../../Image/Gallery/cfs13.jpg'
import pic14 from '../../Image/Gallery/cfs14.jpg'
import pic15 from '../../Image/Gallery/cfs15.jpg'
import pic16 from '../../Image/Gallery/cfs16.jpg'



export default function  Gallery() 
{
    const data =[{
        'picture':pic1,
        'category': 'interior'
      },{
        'picture':pic2,
        'category': 'coffee products'
      },{
        'picture':pic3,
        'category': 'coffee products'
      },{
        'picture':pic4,
        'category': 'coffee products'
      },{
        'picture':pic5,
        'category': 'coffee products'
      },{
        'picture':pic6,
        'category': 'interior'
      },{
        'picture':pic7,
        'category': 'coffee products'
      },{
        'picture':pic8,
        'category': 'interior'
      },{
        'picture':pic9,
        'category': 'coffee products'
      },{
        'picture':pic10,
        'category': 'interior'
      },{
        'picture':pic11,
        'category': 'interior'
      },{
        'picture':pic12,
        'category': 'interior'
      },{
        'picture':pic13,
        'category': 'coffee products beans organic'
      },{
        'picture':pic14,
        'category': 'coffee products beans organic'
      },{
        'picture':pic15,
        'category': 'coffee products beans organic'
      },{
        'picture':pic16,
        'category': 'coffee products beans organic'
      }]
    


    const filterContext=(event)=> {
        const  galleryItems= document.querySelectorAll(".gar-col");
   
        const filterContainer = document.querySelector(".active-filter");

        filterContainer.className='button-filter'

     // activate new 'filter-item'
   	    event.target.className='button-filter active-filter'

    	const filterValue = event.target.getAttribute("id");

    	galleryItems.forEach((item) =>{

            if(item.className.includes(filterValue) || filterValue === 'all'){
                item.classList.remove("hidden");
                item.classList.add("show");
            }

        else{
            item.classList.remove("show");
            item.classList.add("hidden");
        }

   	 });

   }

  
    return(
    <div>
        <section id="gallery-banner" >   
               <div id="banner-content" className=" d-flex justify-content-center ">         
                   <div  className="position-absolute content">
                       <h1 className="text-center header-teko-font text-white">GALLERY GRID</h1>
                    </div>       
                         
               </div>
       </section>
       <section id="photo-gallery" className='w-100 p-3'>
            <div  className=" d-flex justify-content-center w-100 ">
                    <div id="gallery-filter" className='d-flex justify-content-center text-center w-100'>
                        <button id="all" className='button-filter active-filter' onClick={e=>filterContext(e)}>ALL</button>
                        <button id="interior" className='button-filter' onClick={e=>filterContext(e)}>INTERIOR</button>
                        <button id="coffee" className='button-filter' onClick={e=>filterContext(e)}>COFFEE</button>
                        <button id="products" className='button-filter' onClick={e=>filterContext(e)}>PRODUCTS</button>
                        <button id="beans" className='button-filter' onClick={e=>filterContext(e)}>BEANS</button>
                        <button id="organic" className='button-filter' onClick={e=>filterContext(e)}>ORGANIC</button>
                    </div>
            </div>
            <div id="gallery-shows" className='justify-content-center w-100 '>
                <div className='w-70 ms-auto me-auto gar-row'>
                    {data.map((each,i)=><div id={'picture'+i} key={i} className={`gar-col ${each.category} show`}>
                            <img src={each.picture}></img>
                        </div>)}
                </div>
          
                   
            </div>
       </section>
       </div>   
    )
}