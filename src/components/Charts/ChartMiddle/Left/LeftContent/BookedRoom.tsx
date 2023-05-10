import React from 'react'
import ReactApexChart from 'react-apexcharts'
const BookedRoom: React.FC = () => {
  
          
  return (
    <div>
      <ReactApexChart 
        type="bar"
        width={400}
        height={400}
        series={[
          {
            data: [800, 400, 400, 400]
          }
        ]}
        options={{
          dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
              fontSize: '12px',
              colors: ['#fff']
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
          },
          tooltip: {
            shared: true,
            intersect: false
          },
        }}
      />
    </div>
  )
}

export default BookedRoom
