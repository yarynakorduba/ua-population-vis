import React from "react"
import { compose, defaultProps, withState } from "recompose"
import YearRange from "./YearRange"
import Diagram from "./Diagram"

import "./Layout.css"

const Layout = ({ year, setYear, Diagram, Range }) => (
  <div className="Layout">
    <h2 style={{marginLeft: 200, marginTop: 50}}>Ukrainian Population Diagram (1989-2018)</h2>
    <div className="Layout__chart-placeholder">
      <Diagram year={year} />
    </div>
    <div className="Layout__range-placeholder">
      <Range onChange={setYear} />
      <h2 className="Layout__header">Selected year: {year}</h2>
    </div>
  </div>
)

export default compose(
  defaultProps({
    Diagram: Diagram,
    Range: YearRange
  }),
  withState("year", "setYear", 1989)
)(Layout)
