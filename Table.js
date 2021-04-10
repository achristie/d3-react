/**
 * @class       : Table
 * @author      : awc (awc@$HOSTNAME)
 * @created     : Friday Apr 09, 2021 20:22:07 EDT
 * @description : Table
 */

import { useState } from "react";

export default function Table({ data, setData }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  const handleRemove = (e) => {
    const newData = data.filter((d) => e.target.name != d.name);
    setData(newData);
  };

  const handleAdd = (e) => {
    const newData = [...data, { name, height, age }];
    setData(newData);
    setName("");
    setAge("");
    setHeight("");
  };

  const renderHeader = () => {
    return (
      <tr>
        <th>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </th>
        <th>
          <input
            type="text"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </th>
        <th>
          <input
            type="text"
            name="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </th>
        <th>
          <button onClick={handleAdd}>Add</button>
        </th>
      </tr>
    );
  };

  const renderRow = () => {
    return data.map((d) => (
      <tr key={d.name}>
        <td>{d.name}</td>
        <td>{d.age}</td>
        <td>{d.height}</td>
        <td>
          <button name={d.name} onClick={handleRemove}>
            Remove
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <table>
      <thead>{renderHeader()}</thead>
      <tbody>{renderRow()}</tbody>
    </table>
  );
}

