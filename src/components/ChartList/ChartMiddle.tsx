
import { 
  ChartBar, 
  ChartDonut, 
  ChartDonutSmall, 
  ChartLine 
} from "components/ChartDemo"

interface ChartMiddleProps {
  lineData: number[]
  percent: number
  total: number
  bookedRoom: any[]
  donut: number[],
  donutSmall: any[]
}

const ChartMiddle: React.FC<ChartMiddleProps> = ({
  lineData,
  percent,
  total,
  bookedRoom,
  donut,
  donutSmall
}) => {
  return (
    <div className="row p-2">
      <div className="col-8 m-auto">
        <div className="row">
          <div className="col-6 shadow" style={{ borderRadius: 20 }}>
            <ChartLine 
              data={lineData} 
              percent={percent} 
              total={total} 
            />
          </div>
          <div className="col-6" style={{ paddingRight: 2 }}>
            <ChartBar data={bookedRoom}/>
          </div>
        </div>
          <ChartDonutSmall dataSmall={donutSmall} />
      </div>
      <div className="col-4">
        <ChartDonut data={donut} />
      </div>
    </div>
  );
};

export default ChartMiddle;
