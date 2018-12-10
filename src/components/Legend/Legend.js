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
    <div className="Legend__row">
      <div className="Legend__indicator Legend__indicator_death-rate" />
      Death/Emigration rate in comparison to the previous year
    </div>
  </div>
)

export default Legend
