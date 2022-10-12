import React from "react";
import "./chartBar.css";

const ChartBar = (props) => {
  let barfillHieght = "0%";

  if (props.maxValue > 0) {
    barfillHieght = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart_bar">
      <div className="chart_bar__inner">
        <div className="chart_bar__bg" style={{ height: barfillHieght }}></div>
      </div>

      <div className="chart_bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
