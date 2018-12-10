import React from "react"
import { compose, withProps } from "recompose"
import { zipWith, filter, tail } from "ramda"
import { scaleBand, scaleLinear } from "d3"
import { Group, Bar } from "@vx/vx"
const MenAreaDeath = compose(
  withProps(({ data, year, width, margin }) => {
    const dataForCurrentYear = compose(tail, filter(({ year: y }) => y === year))(data)
    const dataForPrevYear = compose(filter(({ year: y }) => y === year - 1))(data)
    const deathData = zipWith(
      (prev, current) => (prev.men + prev.women) * 100 / (current.men + current.women),
      dataForPrevYear,
      dataForCurrentYear
    )

    return {
      data: deathData,
      xScale: scaleBand()
        .domain(deathData)
        .range([0, width - margin.left - margin.right])
        .paddingInner(0),
      yScale: scaleLinear()
        .range([0, 0.8])
        .domain([96, 119])
    }
  })
)(({ data, height, xScale, yScale, margin }) => (
  <Group>
    {data.map((death, index) => (
      <Bar
        fill={`rgba(70, 68, 68, ${yScale(death)})`}
        x={xScale(death)}
        key={index}
        height={height - margin.top - margin.bottom}
        width={xScale.bandwidth()}
      />
    ))}
  </Group>
))

export default MenAreaDeath
