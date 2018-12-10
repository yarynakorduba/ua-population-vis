import React from "react"
import { Group, withParentSize, AxisBottom, AxisLeft, GridRows, GridColumns, AxisTop, AxisRight } from "@vx/vx"
import { scaleLinear, csv, max, format, sum } from "d3"

import { branch, compose, defaultProps, renderComponent, withProps, withState } from "recompose"

import Tooltip, {
  SVGContext,
  MenTooltipHTML,
  WomenTooltipHTML,
  TotalTooltipHTML,
  MenTooltipSVG,
  WomenTooltipSVG,
  TotalTooltipSVG,
  AgeTooltipHTML,
  BirthdayTooltipHTML
} from "../Tooltip/Tooltip"
import "./Chart.css"
import { CommonArea, MenArea, WomenArea } from "./Areas"

const Chart = ({
  parentWidth: width,
  parentHeight: height,
  margin,
  data,

  xScale,
  xScaleYears,

  yScale,

  year,
  totalYearValue
}) => (
  <div className="Chart">
    <div className="Chart__total-year-value">Total amount for {year}: {totalYearValue}</div>
    <Tooltip width={width} height={height} margin={margin} xScale={xScale} yScale={yScale} data={data} year={year}>
      <svg width={width} height={height}>
        <Group top={margin.top} left={margin.left}>
          <GridRows scale={yScale} width={width - margin.left - margin.right} />
          <GridColumns numTicks={20} scale={xScale} height={height - margin.top - margin.bottom} />

          <AxisTop numTicks={20} scale={xScaleYears} top={0} tickFormat={format("")} />
          <AxisBottom numTicks={20} scale={xScale} top={height - margin.bottom - margin.top} label="Age" />
          <AxisLeft scale={yScale} label="Population" tickFormat={format("~s")} />
          <AxisRight
            left={width - margin.left - margin.right}
            scale={yScale}
            label="Population"
            tickFormat={format("~s")}
          />

          <CommonArea data={data} yScale={yScale} x={({ age }) => xScale(age)} />
          <WomenArea data={data} yScale={yScale} x={({ age }) => xScale(age)} />
          <MenArea data={data} yScale={yScale} x={({ age }) => xScale(age)} />

          <SVGContext />
          <MenTooltipSVG />
          <WomenTooltipSVG />
          <TotalTooltipSVG />
        </Group>
      </svg>

      <AgeTooltipHTML />
      <BirthdayTooltipHTML />

      <MenTooltipHTML />
      <WomenTooltipHTML />
      <TotalTooltipHTML />
    </Tooltip>
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
      .domain([0, max(data.map(({ men, women }) => men + women)) + 100000])
  })),
  withProps(({ data, year }) => ({ data: data.filter(data => data.year === year) })),
  withProps(({ data, parentWidth: width, margin, year }) => ({
    xScale: scaleLinear()
      .range([0, width - margin.left - margin.right])
      .domain([0, 79]),

    xScaleYears: scaleLinear()
      .range([0, width - margin.left - margin.right])
      .domain([year, year - 79]),
    totalYearValue: sum(data, d => d.men + d.women)
  }))
)

export default enhance(Chart)