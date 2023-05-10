import React from 'react'
import ReactApexChart from 'react-apexcharts';

const TotalIncome: React.FC = () => {
  const options = {
    chart: {
      background: '#b3e6b3',
      sparkline: {
        enabled: true
      }
    },
    title: {
      text: 'Total Incomes'
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      marker: {
        show: false
      }
    }
  };
  const series = [{
      data: [31, 40, 28, 51, 42, 109, 100],
      color: '#39ac39'
    }];
  
  return (
    <>
      <ReactApexChart 
        type='line'
        width={400}
        height={400}
        options={options}
        series={series}
      ></ReactApexChart>
    
    </>
  )
}

export default TotalIncome