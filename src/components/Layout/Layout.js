import React from "react"
import Chart from "../Chart"
import { compose, defaultProps, withState } from "recompose"
import "./Layout.css"
import YearRange from "../YearRange"
import Legend from "../Legend"

const Layout = ({ year, setYear, Diagram, Range, Legend }) => (
  <div className="Layout">
    <h3 className="Layout__header">Ukrainian population changes through 1989-2018</h3>
    <div className="Layout__range-placeholder">
      <Range value={year} onChange={setYear} />
    </div>
    <div className="Layout__chart-placeholder">
      <Diagram year={year} />
    </div>
    <div className="Layout__legend-placeholder">
      <Legend />
    </div>
  </div>
)

export default compose(
  defaultProps({
    Diagram: Chart,
    Range: YearRange,
    Legend: Legend
  }),
  withState("year", "setYear", 1989)
)(Layout)
