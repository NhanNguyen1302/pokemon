import ChartStatus from '../components/Charts/ChartTop/ChartStatus'
import ChartMiddle from '../components/Charts/ChartMiddle/ChartMiddle'
import ChartBottom from '../components/Charts/ChartBottom/ChartBottom'

type Props = {}

const Charts = (props: Props) => {
  return (
    <section className='container'>
      <div>
        <ChartStatus /> 
      </div>
      <div>
        <ChartMiddle />
      </div>
      <div>
       <ChartBottom />
      </div>
    </section>
  )
}

export default Charts