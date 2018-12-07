import { Line } from "@vx/shape"
import React from "react"

const LineTooltip = ({tooltipLeft, tooltipTop, yMax}) => (
  <g>
    <Line
      from={{ x: tooltipLeft, y: 0 }}
      to={{ x: tooltipLeft, y: yMax }}
      stroke="rgba(92, 119, 235, 1.000)"
      strokeWidth={2}
      style={{ pointerEvents: "none" }}
      strokeDasharray="2,2"
    />
    <circle
      cx={tooltipLeft}
      cy={tooltipTop}
      r={4}
      fill="black"
      fillOpacity={0.1}
      stroke="blue"
      strokeOpacity={1}
      strokeWidth={2}
      style={{ pointerEvents: 'none' }}
    />
  </g>
)

export default LineTooltip