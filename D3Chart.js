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
    this.svg = d3
      .select(element)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    this.g = this.svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    this.svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height + 60)
      .attr("text-anchor", "middle")
      .text("People");

    this.svg
      .append("text")
      .attr("x", 10)
      .attr("y", height / 2)
      .text("Heights (cm)");
    this.xAxisGroup = this.g
      .append("g")
      .attr("transform", `translate(0,${height})`);
    this.yAxisGroup = this.g.append("g");

    d3.json("./api/test").then((data) => {
      this.data = data;
      let gender = ["male", "female"];
      let count = 1;
      this.update(gender[0]);
      d3.interval(() => {
        this.update(gender[count % 2]);
        count++;
      }, 2000);
    });
  }

  update(gender) {
    const data = this.data.filter((d) => d.gender == gender);
    const t = d3.transition(800);
    const x = d3
      .scaleBand()
      .paddingInner(0.2)
      .domain(data.map((d) => d.name))
      .range([0, width]);
    const y = d3
      .scaleLinear()
      .domain([0, 1.05 * d3.max(data, (d) => d.height)])
      .range([height, 0]);

    const rect = this.g.selectAll("rect").data(data);

    rect.join(
      (enter) =>
        enter
          .append("rect")
          .attr("fill", "cyan")
          .attr("x", (d, i) => x(d.name))
          .attr("y", height)
          .attr("width", x.bandwidth())
          .call((enter) =>
            enter
              .transition(t)
              .attr("y", (d) => y(d.height))
              .attr("height", (d) => height - y(d.height))
          ),
      (update) =>
        update.call((update) =>
          update
            .transition(t)
            .attr("x", (d) => x(d.name))
            .attr("y", (d) => y(d.height))
            .attr("width", x.bandwidth())
            .attr("height", (d) => height - y(d.height))
        ),
      (exit) => exit.transition(t).attr("height", 0).attr("y", height).remove()
    );

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);
    this.xAxisGroup.transition(t).call(xAxis);
    this.yAxisGroup.transition(t).call(yAxis);
  }
}

