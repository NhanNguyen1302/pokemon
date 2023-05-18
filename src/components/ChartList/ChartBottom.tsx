import ChartColumn from '../ChartDemo/ChartColumn'
import ChartCustomer from '../ChartDemo/ChartCustomer'

const ChartBottom = () => {
  return (
        <div className="row p-3">
            <div 
              className="col-8 shadow p-3" 
              style={{borderRadius: 20}}
            >
                <ChartColumn />
            </div>
            <div 
              className="col-4 shadow p-2"
              style={{borderRadius: 20}}
            >
                <ChartCustomer />
            </div>
        </div>
  )
}

export default ChartBottom