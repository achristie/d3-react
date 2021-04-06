/**
 * @class       : D3Chart
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Monday Apr 05, 2021 15:10:18 EDT
 * @description : D3Chart
 */

import * as d3 from "d3";

export default class D3Chart {
  constructor(element) {
    const svg = d3
      .select(element)
      .append("svg")
      .attr("width", 500)
      .attr("height", 400);

    d3.json("./api/test").then((data) => {
      console.log(data);
      const rect = svg.selectAll("rect").data(data);

      const x = d3
        .scaleBand()
        .paddingInner(0.2)
        .domain(data.map((d) => d.name))
        .range([0, 500]);
      const y = d3
        .scaleLinear()
        .domain([0, 1.05 * d3.max(data, (d) => d.height)])
        .range([400, 0]);

      rect
        .join("rect")
        .attr("fill", "cyan")
        .attr("x", (d, i) => x(d.name))
        .attr("y", (d) => y(d.height))
        .attr("width", x.bandwidth())
        .attr("height", (d) => 400 - y(d.height));
    });
  }
}

