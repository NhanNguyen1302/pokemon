import Chart from 'react-apexcharts'

const ChartDonutSmall = () => {
  return (
      <div 
        className="row p-3" 
        style={{borderRadius: 20, width: 400}}
      >
        <div className="col-6 text-left">
          <Chart 
            type="donut"
            series={[689, 340]}
            options={{
              plotOptions: {
                pie: {
                  donut: {
                    labels:{
                    show: true,
                      total:{ show: true, showAlways: true, },
                      value: {fontSize: '10', fontWeight: 400 }}}
                }},
                legend: {show: false},
                dataLabels: {enabled: false}
            }}
          />
        </div>
        <div className="col-6 text-center mt-4">
          <h4>9.990</h4>
          <p>Check in</p>
        </div>
      </div>
  )
}

export default ChartDonutSmall