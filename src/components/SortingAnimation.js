import React from "react";
import Chart from "chart.js";

class SortingAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

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
        labels: this.props.data,
        datasets: [
          {
            labels: "Values",
            data: this.props.data
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

  componentDidUpdate() {
    this.chart.data.labels = this.props.data;
    this.chart.data.datasets[0].data = this.props.data;
    this.chart.update();
  }

  SortData() {
    if (this.props.ended) {
      clearInterval(this.interval);
    } else {
      this.props.sort();
    }
  }

  render() {
    return <canvas id="myChart" ref={this.chartRef} />;
  }
}

export default SortingAnimation;

/*
LiveServer
Live Sass Compiler
html and css support (Klass im CSS werden automatisch im HTML File vorgeschlagen)
auto rename tag (auto rename anding tag with beginning tag in html files)
Prettier
Java Script ES6 code snippets
Turbo Console log (hepls for dugging (LOGGER))
indent-rainbow (color for indents)
Bracket Pair Colorizer
Code Spell Checker (Tells you if a variable isn't known)
REST Client
Git Lens (Git repository durchstöbern, zeigt für jede Codezeile an wer sie bearbeitet und aktualisiert hat)
Auto-Open Markdown Preview (Git Hub read me)
ES7 React/Redux/GraphQL/React-Native snippets
*/
