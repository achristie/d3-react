/**
 * @class       : scatter
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Thursday Apr 08, 2021 19:54:25 EDT
 * @description : scatter
 */

import * as d3 from "d3";

const margin = { top: 20, bottom: 20, left: 40, right: 20 };
const height = 400 - margin.top - margin.bottom;
const width = 500 - margin.left - margin.right;

export default class scatter {
  constructor(element, data) {
    this.svg = d3
      .select(element)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    this.g = this.svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    this.x = d3.scaleLinear().range([0, width]);

    this.y = d3.scaleLinear().range([height, 0]);

    this.xAxisGroup = this.g
      .append("g")
      .attr("transform", `translate(0, ${height})`);
    this.yAxisGroup = this.g.append("g");

    this.update(data);
  }

  update(data) {
    const xAxis = d3.axisBottom(this.x);
    const yAxis = d3.axisLeft(this.y);

    this.xAxisGroup.call(xAxis);
    this.yAxisGroup.call(yAxis);

    this.x.domain([0, d3.max(data, (d) => +d.age)]);
    this.y.domain([0, d3.max(data, (d) => +d.height)]);
    const circle = this.g.selectAll("circle").data(data, (d) => d.name);

    circle
      .join("circle")
      .attr("cx", (d) => this.x(d.age))
      .attr("cy", (d) => this.y(d.height))
      .attr("r", 5)
      .attr("fill", "red");
  }
}

