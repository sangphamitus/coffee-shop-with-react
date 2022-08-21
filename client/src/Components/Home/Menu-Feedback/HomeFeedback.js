import React,{useState} from "react";
import './HomeFeedback.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function HomeFeedback() 
{
    const data =[
        {
            'feedback':'Ullamco eu consequat pariatur sint duis ex ullamco in fugiat exercitation qui.',
            'customer':'CHARLES JUAREZ'
        },{
            'feedback':'Aute sunt proident ex commodo dolore anim minim. Nisi cupidatat ullamco sunt officia consequat aliqua non ipsum nulla excepteur id. Irure commodo culpa nostrud amet.',
            'customer':'RAICHEL SMITH'
        },
        {
            'feedback':'Aute sunt proident ex commodo dolore anim minim. Nisi cupidatat ullamco sunt officia consequat aliqua non ipsum nulla excepteur id. Irure commodo culpa nostrud amet.',
            'customer':'JOHN CARTER'
        },
        {
            'feedback':'Aute sunt proident ex commodo dolore anim minim. Nisi cupidatat ullamco sunt officia consequat aliqua non ipsum nulla excepteur id. Irure commodo culpa nostrud amet.',
            'customer':'KAYLE MADAM'
        }
    ]
    const [dispFeedback,setDisplayFeedback]=useState([0,1]);
    

    const arrowLeft=(event)=>
    {
       
        event.preventDefault();
        let newdata;
        if (dispFeedback[0]===0)
        {
           newdata=data.length-1;
        }
        else{
           newdata=dispFeedback[0]-1;
        }
        let replace =dispFeedback;
   
        replace.unshift(newdata);
        const number=replace.pop();
        
        document.querySelector('#feedbacknum'+number).className="feedback-card hidden";
        setDisplayFeedback(prevState=>replace)
        dispFeedback.forEach(element=>{
            document.querySelector('#feedbacknum'+element).className="feedback-card";
        })
    
    }
    const arrowRight=(event)=>
    {
       
        event.preventDefault();
        let newdata;
        if (dispFeedback[1]===data.length-1)
        {
           newdata=0;
        }
        else{
           newdata=dispFeedback[1]+1;
        }
        let replace =dispFeedback;
   
        replace.push(newdata);
        const number=replace.shift();
        
        document.querySelector('#feedbacknum'+number).className="feedback-card hidden";
        setDisplayFeedback(prevState=>replace)
        dispFeedback.forEach(element=>{
            document.querySelector('#feedbacknum'+element).className="feedback-card";
        })
    
    }

    return (
        <div id="side-customer-feedback" className="d-flex align-items-center justify-content-center w-100">
            <button className="m-3 p-2" onClick={e=>arrowLeft(e)}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>
            <div className="row d-flex">
            {data.map((each,i)=> <div id={`feedbacknum${i}`} className={dispFeedback.indexOf(i)===-1?'col feedback-card hidden':'feedback-card'}>
                    <p className="customer-feed-line">{each.feedback}</p>
                    <p className="customer-feed-author">-{each.customer}</p>
                                 
            </div>
            
            )}
            </div>
            <button className="m-3 p-2" onClick={e=>arrowRight(e)}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </div>
    )
}