import React from "react";
import "./Home.css"
import { DashboardStatistic } from "../GetData/Dashboard";

export default function Home()
{
    const dataStatic=DashboardStatistic();
 



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
                <div id='statistic' className="p-3">
                    

                </div>
            </div>
        </div>
    )
}