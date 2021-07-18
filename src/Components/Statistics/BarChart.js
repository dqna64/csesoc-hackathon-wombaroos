import React from 'react'
import Chart from 'react-apexcharts'

export default class BarChart extends React.Component {
    constructor(props) {
      super(props);

      this.data = [89,86,74,48,55];
  
      this.state = {
        options: {
          chart: {
            type: 'bar'
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          xaxis: {
            categories: ["Cameron", "Danil", "Dominic", "Joseph", "Gordon"]
          }
        },
        series: [{
          name: 'Contributions',
          data: this.data
        }]
      }
    }
    render() {
        return (
        <Chart options={this.state.options} series={this.state.series} type="bar" width={800} height={320} />
      )
    }
  }
