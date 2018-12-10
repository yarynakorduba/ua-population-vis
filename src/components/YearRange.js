import React from "react"

const YearRange = ({ onChange, value }) => (
  <div style={{ textAlign: "center" }}>
    <h4>{value}</h4>
    {"1990  "}
    <input onChange={({ target }) => onChange(Number(target.value))} type="range" step={1} max={2018} min={1990} />
    {"  2018"}
  </div>
)

export default YearRange
