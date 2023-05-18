import Chart from 'react-apexcharts'


const   ChartLine = () => {
  return (
        <div className='position-relative pt-3'>
          <Chart 
            type='line'
            height={350}
            series={[{
              data: [30, 35, 34, 42, 31, 28],
              color: '#4CAF50'
            }]}
            options={{
              stroke: { curve: 'smooth' },
              chart: {
                background: '#b3e6b3',
                sparkline: { enabled: true }
              },
              dataLabels: { enabled: false },
                tooltip: {
                  fixed: {enabled: false},
                  x: {show: false},
                  marker: {show: false}
                }
              }}
          />
         
          <span 
            style={{
              position: 'absolute', 
              top: 30, left: 18,
            }}
          >
            <h6>Total Incomes</h6>
            <h3>$9,900</h3>
          </span>
          <span 
            style={{
              position: 'absolute', 
              top: 30, right: 18, textAlign: 'end'
            }}
          >
            <h6> +8.2% <br/> than last week</h6>
          </span>
        </div>
  )
}

export default ChartLine