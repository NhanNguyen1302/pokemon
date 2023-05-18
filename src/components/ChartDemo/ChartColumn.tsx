import React from 'react'
import ReactApexChart from 'react-apexcharts'

const ChartColumn = () => {
  const series=[{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 33]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 44]
    }];
  const options={
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return "$ " + val + " thousands"
        }
      }
    }
  }
  return (
    <div className='row p-3'>
      <ReactApexChart 
        type='bar'
        width={800}
        height={500}
        series={series}
        options={options}
      />
    </div>
  )
}

export default ChartColumn