import React from "react"
import Chart from "../Chart"
import { compose, defaultProps, withState } from "recompose"
import "./Layout.css"
import YearRange from "../YearRange"

const Layout = ({ year, setYear, Diagram, Range }) => (
  <div className="Layout">
    <div className="Layout__range-placeholder">
      <Range value={year} onChange={setYear} />
    </div>
    <div className="Layout__chart-placeholder">
      <Diagram year={year} />
    </div>
  </div>
)

export default compose(
  defaultProps({
    Diagram: Chart,
    Range: YearRange
  }),
  withState("year", "setYear", 1989)
)(Layout)
