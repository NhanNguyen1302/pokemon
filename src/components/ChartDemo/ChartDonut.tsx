import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";
import { AVAIABLE, ROOM, ROOM_AVAIABLE, SOLD_OUT } from "../../constant";

interface ChartDonutProps {
  data?: number[];
  height?: number;
}
const ChartDonut: React.FC<ChartDonutProps> = ({ 
  data, 
  height = 400 
}) => {
  const options: ApexOptions = {
    labels: [SOLD_OUT, AVAIABLE],
    title: { text: ROOM_AVAIABLE, style: { fontSize: "20" } },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              label: ROOM,
              show: true,
              showAlways: false,
              fontSize: "14",
            },
            value: { fontSize: "30", fontWeight: 400 },
          },
        },
      },
    },
    legend: { position: "bottom", fontSize: "16" },
    dataLabels: { enabled: false },
  };
  return (
    <div 
      className="shadow h-100" 
      style={{ borderRadius: 20 }}
    >
      <Chart 
        type="donut" 
        height={height}
        series={data} 
        options={options} 
      />
    </div>
  );
};

export default ChartDonut;
