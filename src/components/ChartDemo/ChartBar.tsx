import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

interface ChartBarProps {
  data: any[]
  height?: number
}
const ChartBar: React.FC<ChartBarProps> = ({ data, height = 350 }) => {
  const options: ApexOptions = {
    title: { text: "Booked Room" },
    chart: { stacked: true },
    stroke: { width: 5 },
    plotOptions: {
      bar: { horizontal: true, columnWidth: "20%" },
    },
    dataLabels: { enabled: true },
    legend: { position: "bottom", fontSize: "16" },
  }
  return (
    <div className="shadow" style={{ borderRadius: 20 }}>
      <Chart
        type="bar"
        height={height}
        series={data}
        options={options}
      />
    </div>
  );
};

export default ChartBar;
