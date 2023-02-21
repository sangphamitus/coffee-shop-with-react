import React, { useState, useEffect } from 'react'
import './MenuHome.css'

import { getMenuData } from '../../ControlData/MenuData'

export default function MenuHome() {
  const [data, setData] = useState([])
  useEffect(() => {
    getMenuData(setData)
  }, [window.location])
  return (
    <div id="coffee-menu-home" className="row">
      {data &&
        data.map((each, i) => (
          <div key={i} className="d-flex w-50 .col-sm-5 .col-md-6 card-block">
            <img
              src={each.imgsrc}
              className="me-3"
              width="50"
              height="50"
            ></img>
            <div className="w-100">
              <div>
                <p className="d-inline cafename">{each.cafename}</p>
                <p className="d-inline float-end m-0 text-orange">
                  ${each.price}
                </p>
              </div>

              <p className="discription">{each.discription}</p>
            </div>
          </div>
        ))}
    </div>
  )
}
