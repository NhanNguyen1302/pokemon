import Chart from "react-apexcharts";
import React, { useMemo } from "react";
import { ApexOptions } from "apexcharts";
interface ChartLineProps {
  color?: string;
  data: number[];
  height?: number;
  total?: number;
  percent?: number;
}

const ChartLine: React.FC<ChartLineProps> = ({
  data,
  color = "#4CAF50",
  height = 350,
  percent,
  total,
}) => {

  const options: ApexOptions = useMemo(() => {
    return {
      colors: [color],
      stroke: { curve: "smooth" },
      chart: {
        background: "#b3e6b3",
        sparkline: { enabled: true },
      },
      dataLabels: { enabled: false },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        marker: { show: false },
      },
    }
  }, [color])
  return (
    <div className="position-relative pt-3">
      <Chart
        type="line"
        height={height}
        series={[{ data }]}
        options={options}
      />

      <span
        style={{
          position: "absolute",
          top: 30,
          left: 18,
        }}
      >
        <h6>Total Incomes</h6>
        <h3>${total}</h3>
      </span>
      <span
        style={{
          position: "absolute",
          top: 30,
          right: 18,
          textAlign: "end",
        }}
      >
        <h6>
          {" "}
          +{percent}% <br /> than last week
        </h6>
      </span>
    </div>
  );
};

export default ChartLine;
