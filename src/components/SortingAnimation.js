import React from "react";
import Chart from "chart.js";

class SortingAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.props.setAction("created");
  }

  CreateChart() {
    const myChartRef = this.chartRef.current.getContext("2d");
    this.chart = new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: this.props.data,
        datasets: [
          {
            labels: "Values",
            data: this.props.data
          }
        ]
      },
      options: {
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

  componentDidUpdate() {
    if (this.props.action === "created") {
      if (typeof this.chart !== "undefined") {
        this.chart.destroy();
      }
      this.CreateChart();
    } else if (this.props.action === "run") {
      if (this.interval) {
        clearInterval(this.interval);
      }
      this.interval = setInterval(() => this.SortData(), 10);
      this.props.setAction("running");
    } else if (this.props.action === "pause") {
      clearInterval(this.interval);
    } else if (this.props.action === "step") {
      clearInterval(this.interval);
      this.SortData();
      this.props.setAction("running");
    } else if (this.props.action === "running") {
      this.chart.data.labels = this.props.data;
      this.chart.data.datasets[0].data = this.props.data;
      this.chart.update();
    } else if (this.props.action === "update") {
      if (this.interval) {
        clearInterval(this.interval);
      }
      this.chart.data.labels = this.props.data;
      this.chart.data.datasets[0].data = this.props.data;
      this.chart.update();
    }
  }

  SortData() {
    if (this.props.ended) {
      clearInterval(this.interval);
    } else {
      this.props.sort();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.props.setAction("created");
  }

  render() {
    return <canvas id="myChart" ref={this.chartRef} />;
  }
}

export default SortingAnimation;
