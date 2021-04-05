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
      .attr("height", 500);

    svg
      .append("rect")
      .attr("fill", "cyan")
      .attr("x", 50)
      .attr("y", 50)
      .attr("width", 100)
      .attr("height", 400);
  }
}

