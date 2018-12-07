import React from "react"
import { AreaClosed } from "@vx/vx"
import { curveMonotoneX } from "d3"

export const MenArea = props => (
  <AreaClosed {...props} className="Chart__men-area" y={({ men }) => props.yScale(men)} curve={curveMonotoneX} />
)

export const WomenArea = props => (
  <AreaClosed {...props} className="Chart__women-area" y={({ women }) => props.yScale(women)} curve={curveMonotoneX} />
)

export const CommonArea = props => (
  <AreaClosed
    {...props}
    className="Chart__common-area"
    y={({ women, men }) => props.yScale(women + men)}
    curve={curveMonotoneX}
  />
)
