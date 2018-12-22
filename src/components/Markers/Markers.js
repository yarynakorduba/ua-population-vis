import React from "react"
import { Marker } from "@vx/vx"

const Markers = ({ xScaleYears, xScale }) => (
  <>
    <Marker
      from={{ x: xScaleYears(1990) + xScale(58), y: 0 }}
      to={{ x: xScaleYears(1990) + +xScale(58), y: 320 }}
      stroke={"#424549"}
      strokeDasharray={"4 2 4"}
      strokeWidth={1}
      label={"Start of Famine-Genocide"}
      labelStroke={"none"}
      labelDx={6}
      labelDy={15}
    />
    <Marker
      from={{ x: xScaleYears(1990) + xScale(76), y: 0 }}
      to={{ x: xScaleYears(1990) + +xScale(76), y: 320 }}
      stroke={"#990000"}
      strokeDasharray={"4 2 4"}
      strokeWidth={1}
      label={""}
      labelStroke={"none"}
      labelDx={6}
      labelDy={15}
    />
    <Marker
      from={{ x: xScaleYears(1990) + xScale(72), y: 0 }}
      to={{ x: xScaleYears(1990) + +xScale(72), y: 320 }}
      stroke={"#990000"}
      strokeDasharray={"4 2 4"}
      strokeWidth={1}
      label={"World War I"}
      labelStroke={"none"}
      labelDx={6}
      labelDy={15}
    />
    <Marker
      from={{ x: xScaleYears(1990) + xScale(51), y: 0 }}
      to={{ x: xScaleYears(1990) + +xScale(51), y: 320 }}
      stroke={"#990000"}
      strokeDasharray={"4 2 4"}
      strokeWidth={1}
      label={""}
      labelStroke={"none"}
      labelDx={6}
      labelDy={15}
    />
    <Marker
      from={{ x: xScaleYears(1990) + xScale(45), y: 0 }}
      to={{ x: xScaleYears(1990) + +xScale(45), y: 320 }}
      stroke={"#990000"}
      strokeDasharray={"4 2 4"}
      strokeWidth={1}
      label={"World War II"}
      labelStroke={"none"}
      labelDx={21}
      labelDy={15}
    />
    <Marker
      from={{ x: xScaleYears(1991), y: 0 }}
      to={{ x: xScaleYears(1991), y: 320 }}
      stroke={"#424549"}
      strokeDasharray={"4 2 4"}
      strokeWidth={1}
      label={"Ukrainian Independence"}
      labelStroke={"none"}
      labelDx={6}
      labelDy={15}
    />
    <Marker
      from={{ x: xScaleYears(2015), y: 0 }}
      to={{ x: xScaleYears(2015), y: 320 }}
      stroke={"#424549"}
      strokeDasharray={"4 2 4"}
      strokeWidth={1}
      label={"Annexation of Crimea"}
      labelStroke={"none"}
      labelDx={6}
      labelDy={15}
    />
  </>
)

export default Markers
