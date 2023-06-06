import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

interface DonutSmall {
  dataSmall?: any[];
}
const ChartDonutSmall: React.FC<DonutSmall> = ({ dataSmall }) => {
  const options: ApexOptions = {
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: { show: true, showAlways: true },
            value: { fontSize: "10", fontWeight: 400 },
          },
        },
      },
    },
    legend: { show: false },
    dataLabels: { enabled: false },
  };
  return (
    <div className="row shadow" style={{ borderRadius: 20 }}>
      {dataSmall?.map((small, index) => {
        return (
          <div key={index} className="col-6 p-2" >
            <div className="row" >
              <div className="col-6 text-left">
                <Chart type="donut" series={small.data} options={options} />
              </div>
              <div className="col-6 text-center mt-4">
                <h4>{small.totals}</h4>
                <p>{small.status}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChartDonutSmall;
