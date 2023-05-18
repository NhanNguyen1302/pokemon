import Chart from 'react-apexcharts'

const ChartDonut = () => {
  return (
    <div 
      className='shadow h-100' 
      style={{borderRadius: 20}}>
        <Chart 
            type="donut"
            height={400}
            width={400}
            series={[6890, 3000]}
            options={{
              labels: ['Sold out', 'Avaiable'],
              title: {text: 'Room Available', style: {fontSize: '20'}},
              plotOptions: {
                pie: {
                    donut: {
                        labels:{
                            show: true,
                            total:{label: 'Rooms', show: true, showAlways: false, fontSize:'14'},
                            value: {fontSize: '30', fontWeight: 400}
                        }
                    }
                }
              },
              legend: {position: 'bottom', fontSize: '16'},
              dataLabels: {enabled: false},

            }}
        />
    </div>
  )
}

export default ChartDonut