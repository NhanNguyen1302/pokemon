import React from 'react'
import ReactApexChart from 'react-apexcharts'

const CheckInOut: React.FC = () => {
  return (
    <div className='row'>
      <div className="col-6">
        <div className="row">
          <div className="col-6">
            <ReactApexChart
              type='donut'
              width={200}
              height={200}
              series={[300,200]}
              options={{
                legend:{
                  show: false
                }
              }}
            />
          </div>
          <div className="col-6 mt-5">
            <h1>9,990</h1>
            <p>check in</p>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="row">
          <div className="col-6">
            <ReactApexChart
              type='donut'
              width={200}
              height={200}
              series={[300,200]}
              options={{
                legend:{
                  show: false
                }
              }}
            />
          </div>
          <div className="col-6 mt-5">
            <h1>10,989</h1>
            <p>check out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckInOut