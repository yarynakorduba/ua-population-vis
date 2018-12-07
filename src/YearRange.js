import React from "react"
import { withParentSize } from "@vx/vx"

const YearRange = ({ onChange, parentWidth: width }) => (
  <>
    <input
      style={{ width: width - 600, marginLeft: 200, marginRight: 400, marginTop: 40 }}
      onChange={({ target }) => onChange(Number(target.value))}
      type="range"
      step={1}
      max={2018}
      min={1989}
    />
  </>
)

export default withParentSize(YearRange)
