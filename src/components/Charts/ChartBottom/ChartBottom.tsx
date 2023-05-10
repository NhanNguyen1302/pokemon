import React from 'react'
import ReserveChart from './ReserveChart'
import Customer from './Customer'

type Props = {}

const ChartBottom = (props: Props) => {
  return (
    <section className='container'>
      <div className="row">
        <div className="col-8">
          <ReserveChart />
        </div>
        <div className="col-4">
          <Customer />
        </div>
      </div>
    </section>
  )
}

export default ChartBottom