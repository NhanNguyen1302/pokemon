import React from 'react'


const Customer = () => {
  return (
    <div className="container card" >
      <h4>Customer Reviews</h4>
      <p>12 Reviews</p>
      <div className="row">
        <img className='col-3' src="" alt="" />
        <div className="col-9">
          <h6>Nhan Nguyen</h6>
          <p>Posted 12 Aug 2022</p>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit?</p>

      <div className='text-center'>
        <button type="button" className="btn btn-secondary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-secondary">Success</button>
      </div>
      <div className='mt-2 text-center'>
        <button type='button' className='btn btn-success'>Accept</button>
        <button type='button' className='btn btn-danger'>Reject</button>
      </div>


    </div>

  )
}

export default Customer