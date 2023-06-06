import React from "react"

interface ChartStatusProps {
  status?: any[],
  title?: string,
  views?: number,
  images?: string
}
const ChartStatus: React.FC<ChartStatusProps> = ({
  status,
  title,
  views,
  images
}) => {
  return (
      <div 
        className="row shadow p-4" 
        style={{ width: 420, borderRadius: 20}}
      >
        <div className="col-6">
          <h3>{views}k</h3>
          <p>{title}</p>
        </div>  
        <div 
          className="col-6"             
          style={{textAlign: 'end'}}
        >
          <img 
            className='col-6 rounded-circle' 
            src={images}
            alt='avatar'
          />
        </div>
          
      </div>
  )
}

export default ChartStatus