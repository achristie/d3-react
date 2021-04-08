/**
 * @class       : ChartWrapper
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Monday Apr 05, 2021 15:08:35 EDT
 * @description : ChartWrapper
 */

import React, { useRef, useState, useEffect } from "react";
import D3Chart from "./D3Chart";

const ChartWrapper = () => {
  const chartArea = useRef(null);
  const [chart, setChart] = useState(null);
  const [gender, setGender] = useState("male");

  useEffect(() => {
    console.log("called");
    if (!chart) {
      setChart(new D3Chart(chartArea.current));
    } else {
      chart.update(gender);
      // chart.update();
    }
  }, [gender]);

  return (
    <>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Men</option>
        <option value="female">Women</option>
      </select>

      <div className="chart-area" ref={chartArea}></div>
    </>
  );
};

export default ChartWrapper;

