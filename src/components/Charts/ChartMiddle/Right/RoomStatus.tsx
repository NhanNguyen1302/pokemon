import React from 'react'
import ReactApexChart from 'react-apexcharts'

const RoomStatus = () => {
  return (
    <>
      <ReactApexChart 
        type="donut"
        width={400}
        height={400}
        series={[100, 200]}
        options={{
          labels: ['Sold out', 'Avaiable'],
          legend:{
            show: true,
            position: 'bottom'
          }
          
        }}
      />
    </>
  )
}

export default RoomStatus