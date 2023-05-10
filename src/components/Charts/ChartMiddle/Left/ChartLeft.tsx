import TotalIncome from './LeftContent/TotalIncome'
import BookedRoom from './LeftContent/BookedRoom'
import CheckInOut from './LeftContent/CheckInOut'

type Props = {}

const ChartLeft = (props: Props) => {
  return (
    <section className='container'>
      <div className="row">
        <div className="col-6">
          <TotalIncome />
        </div>
        <div className="col-6">
          <BookedRoom />
        </div>
      </div>
      <div className="row">
        <CheckInOut />
      </div>
    </section>
  )
}

export default ChartLeft