/**
 * @class       : ChartWrapper2
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Thursday Apr 08, 2021 19:41:09 EDT
 * @description : ChartWrapper2
 */

import React, { useRef, useState, useEffect } from "react";
import scatter from "./scatter";

const ChartWrapper = ({ data }) => {
  const chartArea = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (!chart) {
      setChart(new scatter(chartArea.current, data));
    } else {
      chart.update(data);
    }
  }, [data]);

  return <div className="chart-area" ref={chartArea}></div>;
};

export default ChartWrapper;

