/**
 * @class       : D3Chart
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Monday Apr 05, 2021 15:10:18 EDT
 * @description : D3Chart
 */

import * as d3 from "d3";
const margin = { top: 20, left: 80, bottom: 80, right: 10 };
const height = 400 - margin.top - margin.bottom;
const width = 500 - margin.left - margin.right;

export default class D3Chart {
  constructor(element) {
    const svg = d3
      .select(element)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    d3.json("./api/test").then((data) => {
      const rect = g.selectAll("rect").data(data);

      const x = d3
        .scaleBand()
        .paddingInner(0.2)
        .domain(data.map((d) => d.name))
        .range([0, width]);
      const y = d3
        .scaleLinear()
        .domain([0, 1.05 * d3.max(data, (d) => d.height)])
        .range([height, 0]);

      rect
        .join("rect")
        .attr("fill", "cyan")
        .attr("x", (d, i) => x(d.name))
        .attr("y", (d) => y(d.height))
        .attr("width", x.bandwidth())
        .attr("height", (d) => height - y(d.height));

      const xAxisGroup = g
        .append("g")
        .attr("transform", `translate(0,${height})`);
      const yAxisGroup = g.append("g");
      const xAxis = d3.axisBottom(x);
      const yAxis = d3.axisLeft(y);
      xAxisGroup.call(xAxis);
      yAxisGroup.call(yAxis);

      svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", height + 60)
        .attr("text-anchor", "middle")
        .text("People");

      svg
        .append("text")
        .attr("x", 10)
        .attr("y", height / 2)
        .text("Heights (cm)");
    });
  }
}

