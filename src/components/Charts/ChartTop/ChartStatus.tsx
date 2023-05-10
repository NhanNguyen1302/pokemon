import React from 'react'
import './ChartStatus.css'
type Props = {}

const ChartStatus = (props: Props) => {
  return (
    <section className='container'>
      <div className="chart-status row">
        <div className='chart-top col'>
          <div className="row">
            <div className='chart-top-content col-6'>
              <h3>8.2k</h3>
              <p>Total Booking</p>
            </div>
            <img
              className='avatar col-6'
              src="https://picsum.photos/200"
              alt="..."
            />
          </div>
        </div>
        <div className='chart-top col'>
          <div className="row">
            <div className='chart-top-content col-6'>
              <h3>311k</h3>
              <p>Check in</p>
            </div>
            <img
              className='avatar col-6'
              src="https://picsum.photos/101"
              alt="..."
            />
          </div>
        </div>
        <div className='chart-top col'>
          <div className="row">
            <div className='chart-top-content col-6'>
              <h3>124k</h3>
              <p>Check out</p>
            </div>
            <img
              className='avatar col-6'
              src="https://picsum.photos/300"
              alt="..."
            />
          </div>
        </div>
      </div>

    </section>
  )
}

export default ChartStatus