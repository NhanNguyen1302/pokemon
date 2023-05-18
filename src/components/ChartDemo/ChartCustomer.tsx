import React from 'react'


const ChartCustomer = () => {
  return (
    <div 
      className='shadow p-3' 
      style={{borderRadius: 20, lineHeight: 2}}
    >
      <h5>Customer Reviews</h5>
      <p>12 Reviews</p>
      <div className='row'>
        <img 
          className='col-3 rounded-circle' 
          src="https://picsum.photos/10" 
          alt="avatar2" />
        <div className="col-9">
          <h6>Jayvion Simon</h6>
          <p>Posted Aug 2022 10:00 PM</p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Iste, consectetur adipisicing elit. Iste, unde!
      </p>
      <div className='mb-5 text-center'>
        <span className='btn btn-secondary mx-1'>Service</span>
        <span className='btn btn-secondary mx-1'>Recommended</span>
        <span className='btn btn-secondary'>Best Price</span>
      </div>
      <div className='text-center'>
        <button className='btn btn-success mx-4' style={{width: 150}}>Accept</button>
        <button className='btn btn-danger' style={{width: 150}}>Reject</button>
      </div>
    </div>
  )
}

export default ChartCustomer