import React, { useMemo } from 'react'
import ReactApexChart from 'react-apexcharts'
import { CATEGORY, RESERVATION_STATS } from '../../constant'
import { ApexOptions } from 'apexcharts'

interface ChartColumnProps {
  data?: any[]
  height?: number
  color?: string[]
}
const ChartColumn: React.FC<ChartColumnProps> = ({
  data,
  height = 500
}) => {
  const options: ApexOptions = useMemo(() => {
    return {
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
        categories: CATEGORY,
      },
      yaxis: {
        title: {
          text: RESERVATION_STATS
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
  }, [])
  return (
    <div style={{borderRadius: 20}}>
      <ReactApexChart 
        type='bar'
        height={height}
        series={data}
        options={options}
      />
    </div>
  )
}

export default ChartColumn