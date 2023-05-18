import ChartColumn from '../ChartDemo/ChartColumn'
import ChartCustomer from '../ChartDemo/ChartCustomer'

const ChartBottom = () => {
  return (
        <div className="row" style={{padding: '0 13px'}}>
            <div 
              className="col-8 shadow" 
              style={{borderRadius: 20}}
            >
                <ChartColumn />
            </div>
            <div className="col-4">
                <ChartCustomer />
            </div>
        </div>
  )
}

export default ChartBottom