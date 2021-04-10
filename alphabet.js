/**
 * @class       : alphabet
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Saturday Apr 10, 2021 17:32:51 EDT
 * @description : alphabet
 */

import * as d3 from "d3";

const height = 400;
const width = 600;

function randomLetters() {
  return d3
    .shuffle("abcdefghijklmnopqrstuvwxyz".split(""))
    .slice(0, Math.floor(6 + Math.random() * 20))
    .sort();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function createChart(svg) {
  while (true) {
    const text = svg.selectAll("text").data(randomLetters(), (d) => d);
    const t = d3.transition(1000);

    text.join(
      (enter) =>
        enter
          .append("text")
          .attr("fill", "green")
          .attr("x", (d, i) => 100 + i * 22)
          .attr("y", height / 2 - 20)
          .text((d) => d)
          .call((enter) => enter.transition(t).attr("y", height / 2)),
      (update) =>
        update
          .attr("fill", "gray")
          .attr("y", height / 2)
          .call((update) =>
            update.transition(t).attr("x", (d, i) => 100 + i * 22)
          ),
      (exit) =>
        exit
          .attr("fill", "red")
          .call((exit) => exit.transition(t).attr("dy", 20).remove())
    );

    await sleep(3000);
  }
}

export default class alphabet {
  constructor(element, data) {
    const svg = d3
      .select(element)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    createChart(svg);
  }
}

