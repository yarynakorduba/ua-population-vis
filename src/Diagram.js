import React from "react"
import { AxisBottom, AxisLeft } from "@vx/axis"
import { withParentSize, Bar } from "@vx/vx"
import { scaleLinear, csv, max, format, curveMonotoneX } from "d3"
import { Group } from "@vx/vx"
import { localPoint } from "@vx/vx"
import { bisector } from "d3-array"
import { withTooltip, Tooltip } from "@vx/vx"

import { branch, compose, defaultProps, renderComponent, withHandlers, withProps, withState } from "recompose"

import { AreaClosed, LinePath } from "@vx/shape"
import LineTooltip from "./LineTooltip"

const MenArea = ({ xScale, ...props }) => (
  <AreaClosed
    {...props}
    y={({ men }) => props.yScale(men)}
    stroke={"#2980b9"}
    strokeWidth={1}
    fill={"url(#menGradient)"}
    curve={curveMonotoneX}
  />
)

const WomenArea = ({ xScale, ...props }) => (
  <AreaClosed
    {...props}
    y={({ women }) => props.yScale(women)}
    stroke={"#2980b9"}
    strokeWidth={1}
    fill={"url(#womenGradient)"}
    curve={curveMonotoneX}
  />
)
const CommonArea = ({ xScale, ...props }) => (
  <AreaClosed
    {...props}
    y={({ women, men }) => props.yScale(women + men)}
    stroke={"#2c3e50"}
    strokeWidth={2}
    fill={"white"}
    curve={curveMonotoneX}
  />
)

const bisectDate = bisector(d => d.age).left

const Chart = ({
  parentWidth: width,
  parentHeight: height,
  margin,
  data,
  xScale,
  yScale,
  tooltipLeft,
  tooltipTop,
  handleTooltip,
  showTooltip,
  hideTooltip,
  tooltipData
}) => {
  const yMax = height - margin.top - margin.bottom
  return (
    <div>
      <svg width={width} height={height}>
        <defs>
          <linearGradient id="menGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3498db" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#fff" stopOpacity={0.05} />
          </linearGradient>
          <linearGradient id="womenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e74c3c" stopOpacity={1} />
            <stop offset="100%" stopColor="#fff" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <Group>
          <AxisBottom
            scale={xScale}
            top={yMax + margin.top}
            left={margin.left}
            axisClassName="axis-class"
            labelClassName="axis-label-class"
            tickClassName="tick-label-class"
            label="Age"
            stroke="#333333"
            tickStroke="#333333"
          />
          <AxisLeft
            scale={yScale}
            top={margin.top}
            left={margin.left}
            label="Population"
            labelProps={{ fontSize: 12, fill: "black" }}
            tickFormat={format("~s")}
          />
          <Group
            top={margin.top}
            left={margin.left}
          >
            <CommonArea xScale={xScale} data={data} yScale={yScale} x={({ age }) => xScale(age)} />
            <WomenArea xScale={xScale} data={data} yScale={yScale} x={({ age }) => xScale(age)} />
            <MenArea xScale={xScale} data={data} yScale={yScale} x={({ age }) => xScale(age)} />
            <Bar
              x={0}
              y={0}
              width={width}
              height={height}
              fill="transparent"
              rx={14}
              data={data}
              onMouseMove={event => handleTooltip({ event, data, xScale, yScale, showTooltip })}
              onTouchMove={event => handleTooltip({ event, data, xScale, yScale, showTooltip })}
              onMouseLeave={() => hideTooltip()}
            />
            <LineTooltip
              yMax={yMax}
              tooltipLeft={tooltipLeft}
              tooltipTop={tooltipTop}
              top={margin.top}
              left={margin.left}
            />
          </Group>
        </Group>
      </svg>
      {tooltipData && (
        <>
          <Tooltip
            top={yMax-75}
            left={tooltipLeft+75}
          ><div style={{width: 10, height: 10, background: "black",display: "inline-block" }}/>
            {` common: ${tooltipData.men + tooltipData.women}`}
          </Tooltip>
          <Tooltip
            top={yMax-25}
            left={tooltipLeft+75}
          ><div style={{width: 10, height: 10, background: "blue",display: "inline-block" }}/>
            {` men: ${tooltipData.men}`}
          </Tooltip>
          <Tooltip
            top={yMax-50}
            left={tooltipLeft+75}

          ><div style={{width: 10, height: 10, background: "red",display: "inline-block" }}/>
            {` women: ${tooltipData.women}`}
          </Tooltip>
        </>
      )}
    </div>
  )
}

const enhance = compose(
  defaultProps({
    margin: { top: 40, bottom: 40, left: 80, right: 40 },
    year: 1989
  }),
  withState("data", "setData"),
  withParentSize,
  withProps(async ({ data, setData }) => {
    if (!data) {
      const data = (await csv("population_by_age_sex_year.csv", ({ age, men, women, year }) => ({
        age: Number(age),
        men: Number(men),
        women: Number(women),
        year: Number(year)
      }))).filter(({ age }) => age >= 0)
      setData(data)
    }
  }),
  branch(({ data }) => !data, renderComponent(() => "Loading...")),
  withTooltip,
  withProps(({ data, parentHeight: height, parentWidth: width, margin }) => ({
    yScale: scaleLinear()
      .range([height - margin.top - margin.bottom, 0])
      .domain([0, max(data.map(({ men, women }) => men + women))])
  })),
  withProps(({ data, year }) => ({ data: data.filter(data => data.year === year) })),
  withProps(({ data, parentWidth: width, margin }) => ({
    xScale: scaleLinear()
      .range([0, width - margin.left - margin.right])
      .domain([0, 79])
  })),
  withHandlers({
    handleTooltip: () => ({ event, data, xScale, yScale, showTooltip }) => {
      const { x } = localPoint(event)
      const x0 = xScale.invert(x)
      const index = bisectDate(data, x0, 1)
      const d0 = data[index - 1]
      const d1 = data[index]
      let d = d0
      if (d1 && d1.age) {
        d = x0 - d0.age > d1.age - x0 ? d1 : d0
      }
      const a = showTooltip({
        tooltipData: d,
        tooltipLeft: x,
        tooltipTop: yScale(d.men + d.women)
      })
      return a
    }
  })
)

export default enhance(Chart)
