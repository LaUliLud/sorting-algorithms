import React from "react";
import Chart from "chart.js";

class SortingAnimations extends React.Component {
  state = {
    data: [
      31,
      29,
      18,
      49,
      72,
      29,
      19,
      6,
      82,
      34,
      55,
      86,
      33,
      26,
      29,
      36,
      21,
      78,
      98,
      37,
      40,
      93,
      15,
      40,
      35,
      95,
      11,
      57,
      64,
      41,
      26,
      51,
      95,
      35,
      26,
      3,
      54,
      85,
      37,
      7,
      39,
      79,
      35,
      25,
      25,
      29,
      11,
      100,
      79,
      89
    ],
    sortingRun: [0, 0]
  };

  chartRef = React.createRef();
  chart = null;
  interval = null;

  componentDidMount() {
    this.CreateChart();
    this.interval = setInterval(() => this.SortData(), 10);
  }

  CreateChart() {
    const myChartRef = this.chartRef.current.getContext("2d");

    this.chart = new Chart(myChartRef, {
      type: "bar",
      data: {
        //Bring in data
        labels: this.state.data,
        datasets: [
          {
            labels: "Values",
            data: this.state.data
          }
        ]
      },
      options: {
        //Customize chart options
        animation: {
          duration: 0
        },
        legend: { display: false },
        title: { display: false },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  SortData() {
    let numbers = this.state.data;
    let run = this.state.sortingRun;
    if (run[0] < numbers.length - 1) {
      if (run[1] < numbers.length - run[0] - 1) {
        if (numbers[run[1]] < numbers[run[1] + 1]) {
          let temp = numbers[run[1]];
          numbers[run[1]] = numbers[run[1] + 1];
          numbers[run[1] + 1] = temp;
        }
        run[1]++;
      } else {
        run[1] = 0;
        run[0]++;
      }
    } else {
      clearInterval(this.interval);
    }
    this.setState({
      data: numbers,
      sortingRun: run
    });
    this.chart.data.labels = this.state.data;
    this.chart.data.datasets[0].data = this.state.data;
    this.chart.update();
  }

  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}

export default SortingAnimations;
