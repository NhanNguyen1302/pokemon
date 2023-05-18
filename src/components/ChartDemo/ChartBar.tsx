import Chart from 'react-apexcharts'

const ChartBar = () => {
  
  return (
    <>
      <Chart 
            type="bar"
            height={400}
            series= {[
              {name: 'Pending',data : [100, 30, 44]},
              {name: 'Cancle',data: [45, 56,44]},
              
            ]}
            options={{
              title: {text: 'Booked Room'},
              chart: {stacked: true},
              stroke: {width: 5},
              plotOptions: {
               bar: {horizontal: true, columnWidth: '20%'}
              },
              dataLabels: {enabled: true},
              legend: {position: 'bottom', fontSize: '16'}
            }}
        />
    </>
  )
}

export default ChartBar