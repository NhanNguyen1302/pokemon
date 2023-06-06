import { 
  ChartColumn, 
  ChartCustomer 
} from 'components/ChartDemo'

interface ChartBottomProps {
  columnData?: string[]
  numberReviews?: number
  name?: string
  paragraph?: string
  images?: string
}
const ChartBottom: React.FC<ChartBottomProps> = ({
  columnData,
  numberReviews,
  name,
  paragraph,
  images
}) => {
  return (
        <div className="row" style={{padding: '0 13px'}}>
            <div 
              className="col-8 shadow" 
              style={{borderRadius: 20}}
            >
                <ChartColumn data={columnData} />
            </div>
            <div className="col-4">
                <ChartCustomer 
                  number={numberReviews}
                  name={name}
                  paragraph={paragraph}
                  image={images}
                />
            </div>
        </div>
  )
}

export default ChartBottom