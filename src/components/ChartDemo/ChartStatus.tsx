import React from 'react'


const ChartStatus = () => {
  return (
      <div 
        className="row shadow p-3" 
        style={{ width: 400, borderRadius: 18}}
      >
        <div className="col-6">
          <h3>8.2k</h3>
          <p>Total booking</p>
        </div>  
        <div 
          className="col-6"             
          style={{textAlign: 'end'}}
        >
          <img 
            className='col-6 rounded-circle' 
            src="https://picsum.photos/101" 
            alt='avatar'
          />
        </div>
          
      </div>
  )
}

export default ChartStatus