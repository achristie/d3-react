/**
 * @class       : home
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Sunday Apr 04, 2021 17:58:52 EDT
 * @description : home
 */

import { useState } from "react";
import ChartWrapper from "../ChartWrapper";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ChartWrapper />
      <h1> Hello! </h1>{" "}
      <button onClick={() => setCount(count + 1)}>Click! </button>
      <p>{count}</p>
    </>
  );
}

