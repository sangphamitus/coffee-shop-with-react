import React,{useState} from "react";
import "./Home.css"
import { DashboardStatistic } from "../GetData/Dashboard";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS,Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement } from "chart.js";
ChartJS.register(
    Title,Tooltip,LineElement,
    Legend,CategoryScale,LinearScale,PointElement
)

export default function Home()
{
    const dataStatic=DashboardStatistic();

    const dayInMonth=new Date(new Date(dataStatic[0].date).getFullYear(),new Date(dataStatic[0].date).getMonth()+1,0).getDate();
    const dataDisplay={
    labels:Array.from({length: dayInMonth}, (_, index) => index + 1),
    datasets:[{
        data:dataStatic.map((each)=>(Number(each.income)).toFixed(2)),
        label: "Income",
        borderColor:"#6828d7",
        fill:false,
        tension:0.5
        
    },{
        data:dataStatic.map((each)=>each.view),
        label: "Views",
        borderColor:"#fbab35",
        fill:false,
        tension:0.5
    }],
    options:{   
        responsive: true,
        maintainAspectRatio: false,
       
        plugins: {
            title: {
                display: true,
                text: "Income and Views",
                align:"start"
            },
            legend: {
                display: true,
                position: 'top',
                align:'end',
                labels: {
                    usePointStyle: true,
                    fontColor: '#333',
                    
                }
              
            }
        }
        
    } }

    console.log(dataDisplay);
        return (
        <div>
              <div className="float-end top-0">
                    <select>
                        <option>1</option>
                    </select>
                </div>
            <div className="tag-title" >
                <h1 className="m-0">Dashboard</h1>
                <p>{new Date().toDateString()}</p>
              
            </div>
            <div id="view-point" className="d-flex">
                <div className="row w-100">
                    <div id='statistic' className="p-3 col-sm-2 me-2" >
                        <Line data={{ labels: dataDisplay.labels,  datasets: dataDisplay.datasets }}  options={dataDisplay.options} />
                    </div>
                    <div id="total-sale" className="p-3 col ms-2">
                        <h1>Helllo</h1>
                    </div>
                </div>
                
            </div>
        </div>
    )
}