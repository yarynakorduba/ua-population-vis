import React from "react"
import { AxisBottom, AxisLeft } from "@vx/axis"
import { withParentSize } from "@vx/vx"
import { scaleLinear, csv, max, format, curveMonotoneX } from "d3"
import { Group } from "@vx/vx"

import { branch, compose, defaultProps, renderComponent, withProps, withState } from "recompose"

import { AreaClosed } from "@vx/shape"
import TooltipData from "./TooltipData"
import "./Diagram.css"

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

  hideTooltip,
  tooltipData,
  tooltipOpen,
  year
}) => (
  <div className="Diagram">
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
          top={height - margin.bottom}
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
        <Group top={margin.top} left={margin.left}>
          <CommonArea xScale={xScale} data={data} yScale={yScale} x={({ age }) => xScale(age)} />
          <WomenArea xScale={xScale} data={data} yScale={yScale} x={({ age }) => xScale(age)} />
          <MenArea xScale={xScale} data={data} yScale={yScale} x={({ age }) => xScale(age)} />
        </Group>
      </Group>
    </svg>

    <TooltipData width={width} height={height} margin={margin} xScale={xScale} data={data} year={year} />
  </div>
)

const enhance = compose(
  defaultProps({
    margin: { top: 40, bottom: 40, left: 80, right: 40 },
    year: 1989
  }),
  withState("data", "setData"),
  withParentSize,
  withProps(async ({ data, setData }) => {
    if (!data) {
      const initial_data = await csv("population_by_age_sex_year.csv", ({ age, men, women, year }) => ({
        age: Number(age),
        men: Number(men),
        women: Number(women),
        year: Number(year)
      }))
      const data = initial_data.filter(({ age }) => age >= 0)
      setData(data)
    }
  }),
  branch(({ data }) => !data, renderComponent(() => "Loading...")),

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
  }))
)

export default enhance(Chart)
