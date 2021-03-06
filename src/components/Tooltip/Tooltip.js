import React from "react"
import { Tooltip, withTooltip, localPoint, Bar, Group, Line } from "@vx/vx"
import { withHandlers, compose, fromRenderProps, branch, renderNothing, withProps } from "recompose"
import "./Tooltip.css"
import { format } from "d3"

const numberFormat = format("~s")

const { Consumer, Provider } = React.createContext({})

export default withTooltip(({ children, ...props }) => <Provider value={props}>{children}</Provider>)

export const SVGContext = compose(
  fromRenderProps(Consumer, props => props),
  withHandlers({
    handleTooltip: ({ margin, xScale, data, year, showTooltip }) => event => {
      const { x } = localPoint(event)
      const selectedAge = Math.round(xScale.invert(x - margin.left))
      const tooltipData = data.find(({ year: y, age }) => y === year && age === selectedAge)
      showTooltip({
        tooltipData,
        tooltipLeft: xScale(selectedAge)
      })
    }
  })
)(({ width, height, margin, hideTooltip, handleTooltip, tooltipOpen, tooltipLeft }) => (
  <Group>
    <Bar
      x={0}
      y={0}
      width={width - margin.left - margin.top}
      height={height - margin.top - margin.bottom}
      fill={"transparent"}
      onMouseMove={handleTooltip}
      onMouseLeave={hideTooltip}
    />
    {tooltipOpen && (
      <>
        <Line
          from={{ x: tooltipLeft, y: 0 }}
          to={{ x: tooltipLeft, y: height - margin.top - margin.bottom }}
          stroke="black"
          strokeWidth={1}
          style={{ pointerEvents: "none" }}
          strokeDasharray="2,2"
        />
      </>
    )}
  </Group>
))

export const tooltipContext = compose(
  fromRenderProps(Consumer, props => props),
  branch(({ tooltipOpen }) => !tooltipOpen, renderNothing)
)

const menTooltip = compose(
  tooltipContext,
  withProps(({ yScale, tooltipData: { men } }) => ({ top: yScale(men) }))
)
const womenTooltip = compose(
  tooltipContext,
  withProps(({ yScale, tooltipData: { women } }) => ({ top: yScale(women) }))
)
const commonTooltip = compose(
  tooltipContext,
  withProps(({ yScale, tooltipData: { women, men } }) => ({ top: yScale(women + men) }))
)

export const MenTooltipSVG = menTooltip(({ top, tooltipLeft, margin, width }) => (
  <>
    <circle
      cy={top - 1}
      cx={tooltipLeft}
      r={4}
      fill="rgba(41, 128, 185, 1.000)"
      stroke="white"
      strokeWidth={2}
      style={{ pointerEvents: "none" }}
    />
    <Line
      from={{ x: 0, y: top }}
      to={{ x: width - margin.left - margin.right, y: top }}
      stroke="black"
      strokeWidth={1}
      style={{ pointerEvents: "none" }}
      strokeDasharray="2,2"
    />
  </>
))
export const MenTooltipHTML = menTooltip(({ tooltipData: { men }, margin, tooltipLeft, top }) => (
  <Tooltip top={top + 26} left={tooltipLeft - 5}>
    {numberFormat(men)}
  </Tooltip>
))

export const WomenTooltipHTML = womenTooltip(({ tooltipData: { women }, margin, tooltipLeft, top }) => (
  <Tooltip top={top + 26} left={tooltipLeft + 90}>
    {numberFormat(women)}
  </Tooltip>
))
export const WomenTooltipSVG = womenTooltip(({ top, tooltipLeft, margin, width }) => (
  <>
    <circle
      cy={top - 1}
      cx={tooltipLeft}
      r={4}
      fill="rgba(231, 76, 60, 1.000)"
      stroke="white"
      strokeWidth={2}
      style={{ pointerEvents: "none" }}
    />
    <Line
      from={{ x: 0, y: top }}
      to={{ x: width - margin.left - margin.right, y: top }}
      stroke="black"
      strokeWidth={1}
      style={{ pointerEvents: "none" }}
      strokeDasharray="2,2"
    />
  </>
))

export const TotalTooltipSVG = commonTooltip(({ top, tooltipLeft, margin, width }) => (
  <>
    <circle
      cy={top - 1}
      cx={tooltipLeft}
      r={4}
      fill="rgba(0, 0, 0, 1.000)"
      stroke="white"
      strokeWidth={2}
      style={{ pointerEvents: "none" }}
    />
    <Line
      from={{ x: 0, y: top }}
      to={{ x: width - margin.left - margin.right, y: top }}
      stroke="black"
      strokeWidth={1}
      style={{ pointerEvents: "none" }}
      strokeDasharray="2,2"
    />
  </>
))
export const TotalTooltipHTML = commonTooltip(({ tooltipData: { women, men }, top, margin, tooltipLeft }) => (
  <Tooltip top={top + margin.top - 35} left={tooltipLeft + margin.left - 30}>
    {numberFormat(men + women)}
  </Tooltip>
))

export const AgeTooltipHTML = tooltipContext(({ tooltipData, height, margin, tooltipLeft }) => (
  <Tooltip top={height - margin.bottom} left={tooltipLeft + margin.left - 13}>
    {tooltipData.age}
  </Tooltip>
))

export const BirthdayTooltipHTML = tooltipContext(({ tooltipData, height, margin, tooltipLeft, year }) => (
  <Tooltip top={margin.top - 20} left={tooltipLeft + margin.left - 23}>
    {year - tooltipData.age}
  </Tooltip>
))
