import { Line } from "@vx/shape"
import React from "react"

const LineTooltip = ({tooltipLeft, tooltipTop, tooltipTopMen, topWomen, yMax,top, left}) => console.log(tooltipTopMen) || (
  <g style={{marginTop: top, marginLeft: left}}>
    <Line
      from={{ x: tooltipLeft, y: 0 }}
      to={{ x: tooltipLeft, y: yMax }}
      stroke="rgba(92, 119, 235, 1.000)"
      strokeWidth={2}
      style={{ pointerEvents: "none" }}
      strokeDasharray="2,2"
    />
  </g>
)

export default LineTooltip