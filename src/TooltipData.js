import React from "react"
import { Tooltip, withTooltip, localPoint } from "@vx/vx"
import { withHandlers, compose } from "recompose"

import "./Tooltip.css"

const TooltipContainer = ({
  handleTooltip,
  hideTooltip,
  width,
  height,
  tooltipData,
  margin,
  tooltipLeft,
  tooltipOpen,
  yMax
}) => (
  <div
    className="Tooltip"
    onMouseMove={handleTooltip}
    onMouseLeave={hideTooltip}
    style={{
      width: width - margin.left - margin.right,
      height: height - margin.top - margin.bottom,
      left: margin.left,
      bottom: margin.bottom
    }}
  >
    {tooltipOpen && (
      <>
        <div className="Tooltip__line" style={{ left: tooltipLeft + 75 }} />
        <div
          className="Tooltip__container"
          style={{
            top: yMax - 75,
            left: tooltipLeft + 75
          }}
        >
          <div>
            <div style={{ width: 10, height: 10, background: "black", display: "inline-block" }} />
            {` common: ${tooltipData.men + tooltipData.women}`}
          </div>
          <div>
            <div style={{ width: 10, height: 10, background: "blue", display: "inline-block" }} />
            {` men: ${tooltipData.men}`}
          </div>
          <div>
            <div style={{ width: 10, height: 10, background: "red", display: "inline-block" }} />
            {` women: ${tooltipData.women}`}
          </div>
        </div>
      </>
    )}
  </div>
)

export default compose(
  withTooltip, // emit showTooltip
  withHandlers({
    handleTooltip: ({ margin, xScale, data, year, showTooltip }) => ({ target, clientX }) => {
      const x = clientX - target.getBoundingClientRect().left
      const selectedAge = Math.round(xScale.invert(x))
      const tooltipData = data.find(({ year: y, age }) => y === year && age === selectedAge)

      showTooltip({
        tooltipData,
        tooltipLeft: x - margin.left
      })
    }
  })
)(TooltipContainer)
