import React from "react"
import { Group, withParentSize, AxisBottom, AxisLeft, GridRows, GridColumns } from "@vx/vx"
import { scaleLinear, csv, max, format } from "d3"

import { branch, compose, defaultProps, renderComponent, withProps, withState } from "recompose"

import Tooltip from "../Tooltip"
import "./Chart.css"
import { CommonArea, MenArea, WomenArea } from "./Areas"

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
  <div className="Chart">
    <svg width={width} height={height}>
      <Group top={margin.top} left={margin.left}>
        <GridRows scale={yScale} width={width - margin.left - margin.right} />
        <GridColumns scale={xScale} height={height - margin.top - margin.bottom} />

        <AxisBottom scale={xScale} top={height - margin.bottom - margin.top} label="Age" />
        <AxisLeft scale={yScale} label="Population" tickFormat={format("~s")} />

        <CommonArea data={data} yScale={yScale} x={({ age }) => xScale(age)} />
        <WomenArea data={data} yScale={yScale} x={({ age }) => xScale(age)} />
        <MenArea data={data} yScale={yScale} x={({ age }) => xScale(age)} />
      </Group>
    </svg>

    <Tooltip width={width} height={height} margin={margin} xScale={xScale} data={data} year={year} />
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
