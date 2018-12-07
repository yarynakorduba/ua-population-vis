import React from "react"
import "./Legend.css"

const Legend = () => (
  <div className="Legend">
    <h4>Population diagram</h4>
    <div>
      <div style={{ width: 10, height: 10, background: "black", display: "inline-block" }} /> Common population
    </div>
    <div>
      <div style={{ width: 10, height: 10, background: "blue", display: "inline-block" }} /> Men population
    </div>
    <div>
      <div style={{ width: 10, height: 10, background: "red", display: "inline-block" }} /> Women population
    </div>
  </div>
)

export default Legend
