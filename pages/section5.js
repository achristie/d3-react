/**
 * @class       : section5
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Thursday Apr 08, 2021 19:34:35 EDT
 * @description : section5
 */

import { useState, useEffect } from "react";
import ChartWrapper from "../ChartWrapper2";
import { json } from "d3";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    json("https://udemy-react-d3.firebaseio.com/children.json")
      .then((d) => setData(d))
      .catch((error) => console.log(error));
  }, []);
  return data.length > 0 ? <ChartWrapper data={data} /> : <h1> No Data </h1>;
}

