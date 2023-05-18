import ChartDonutSmall from '../ChartDemo/ChartDonutSmall'
import ChartDonut from '../ChartDemo/ChartDonut'
import ChartLine from '../ChartDemo/ChartLine'
import ChartBar from '../ChartDemo/ChartBar'


const ChartMiddle = () => {
  return (
        <div className="row p-3">
            <div className="col-8">
               <div className="row">
                <div 
                    className="col-6 shadow" 
                    style={{borderRadius: 20}}
                >
                    <ChartLine />
                </div>
                <div className='col-6' style={{ paddingRight: 2}}>
                    <ChartBar />
                </div>
               </div>
                <div 
                    className="row shadow mt-2" 
                    style={{borderRadius: 20}}
                >
                    <div className="col-6 border-end"  >
                        <ChartDonutSmall /> 
                    </div>
                    <div className="col-6">
                        <ChartDonutSmall />
                    </div>
                </div>
            </div>
            <div className="col-4" >
                <ChartDonut />
            </div>
        </div>
     )
}

export default ChartMiddle