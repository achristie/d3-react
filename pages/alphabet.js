/**
 * @class       : alphabet
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Saturday Apr 10, 2021 17:39:09 EDT
 * @description : alphabet
 */

import React, { useRef, useState, useEffect } from "react";
import alphabet from "../alphabet";

const ChartWrapper = ({ data }) => {
  const chartArea = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (!chart) {
      setChart(new alphabet(chartArea.current, data));
    }
  }, []);

  return (
    <div
      style={{ fontFamily: "monospace", fontSize: 20 }}
      className="chart-area"
      ref={chartArea}
    ></div>
  );
};

export default ChartWrapper;

