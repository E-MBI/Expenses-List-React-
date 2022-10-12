import React from "react";
import "./chart.css";
import ChartBar from "./chartBar";
const Chart = (props) => {
  //get maxmum value for expenses
  const totalValues = props.dataPoint.map((dataPoint) => dataPoint.value);
  const totalMaxValue = Math.max(...totalValues);
  //render all expenses that return on props
  return (
    <div className="charts">
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
