import React from 'react'
import ChartLeft from './Left/ChartLeft'
import RoomStatus from './Right/RoomStatus'

type Props = {}

const ChartMiddle = (props: Props) => {
  return (
    <section className='container'>
      <div className="row">
        <div className='col-8'>
          <ChartLeft />
        </div>
        <div className='col-4'>
          <RoomStatus />
        </div>
      </div>

    </section>
  )
}

export default ChartMiddle