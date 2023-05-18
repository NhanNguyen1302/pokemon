import ChartStatus from '../ChartDemo/ChartStatus'


const ChartTop = () => {
  return (
    <div className='row p-3'>
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