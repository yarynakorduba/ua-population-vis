import React from "react"

import "./Legend.css"

const Legend = () => (
  <div>
    <div className="Legend__row">
      <div className="Legend__indicator Legend__indicator_common" />
      Common population
    </div>
    <div className="Legend__row">
      <div className="Legend__indicator Legend__indicator_men" />
      Men population
    </div>
    <div className="Legend__row">
      <div className="Legend__indicator Legend__indicator_women" />
      Women population
    </div>
  </div>
)

export default Legend
