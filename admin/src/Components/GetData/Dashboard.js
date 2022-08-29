import React from "react";


export function DashboardStatistic()
{
    const data=[{
        'date':new Date(2022,8,1,10,10,10).toUTCString(),
        'view':100,
        'income':1000
    },{
        'date':new Date(2022,8,2,10,10,10).toUTCString(),
        'view':90,
        'income':800
    },{
        'date':new Date(2022,8,3,10,10,10).toUTCString(),
        'view':120,
        'income':1200
    },{
        'date':new Date(2022,8,4,10,10,10).toUTCString(),
        'view':110,
        'income':1100
    }]

    return data;
}
