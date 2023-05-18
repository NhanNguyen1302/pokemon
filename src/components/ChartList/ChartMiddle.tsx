import ChartDonutSmall from '../ChartDemo/ChartDonutSmall'
import ChartDonut from '../ChartDemo/ChartDonut'
import ChartContent from './ChartContent'


const ChartMiddle = () => {
  return (
        <div className="row p-3">
            <div className="col-8">
               <div className="row">
                <ChartContent />
               </div>
                <div className="row">
                    <div className="col-6 p-3" >
                        <ChartDonutSmall />
                    </div>
                    <div className="col-6 p-3">
                        <ChartDonutSmall />
                    </div>
                </div>
            </div>
            <div 
                className="col-4 shadow" 
                style={{borderRadius: 20}}
            >
                <ChartDonut />
            </div>
        </div>
     )
}

export default ChartMiddle