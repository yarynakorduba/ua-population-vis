import React from "react"
import { withParentSize } from "@vx/vx"

const YearRange = ({ onChange, parentWidth: width }) => (
  <>
    <input
      style={{ width: width - 120, marginLeft: 80, marginRight: 40, marginTop: 40 }}
      onChange={({ target }) => onChange(Number(target.value))}
      type="range"
      step={1}
      max={2018}
      min={1989}
    />
    <label style={{ marginLeft: 80 }}>Years</label>
  </>
)

export default withParentSize(YearRange)
