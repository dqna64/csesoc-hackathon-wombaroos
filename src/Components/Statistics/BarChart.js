import React from 'react'
import Chart from 'react-apexcharts'

export default class BarChart extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          chart: {
            type: 'bar'
          },
          xaxis: {
            categories: ["Cameron", "Danil", "Dominic", "Joseph", "Gordon"]
          }
        },
        series: [{
          name: 'series-1',
          data: [89,85,82,80,76]
        }]
      }
    }
    render() {
        return (
        <Chart options={this.state.options} series={this.state.series} type="bar" width={800} height={320} />
      )
    }
  }
