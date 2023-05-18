import ChartStatus from '../ChartDemo/ChartStatus'


const ChartTop = () => {
  return (
    <div className='row' 
      style={{padding: '0 14px'}}
    >
        <div className="col-4">
            <ChartStatus />
        </div>
        <div className="col-4">
            <ChartStatus />
        </div><div className="col-4">
            <ChartStatus />
        </div>
    </div>
  )
}

export default ChartTop