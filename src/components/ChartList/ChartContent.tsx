import ChartBar from "../ChartDemo/ChartBar"
import ChartLine from "../ChartDemo/ChartLine"

const ChartContent = () => {
  return (
    <div className='row'>
        <div 
            className="col-6 p-3 shadow" 
            style={{borderRadius: 20}}
        >
            <ChartLine />
        </div>
        <div 
            className="col-6 p-3 shadow"
            style={{borderRadius: 20 }}
        >
            <ChartBar />
        </div>
    </div>
  )
}

export default ChartContent