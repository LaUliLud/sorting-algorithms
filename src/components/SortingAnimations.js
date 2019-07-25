import React from "react";
import Chart from "chart.js";

function BubbleSort(props) {
  let numbers = props.data;
  let curRun = props.sortingState;
  let ended = false;
  if (curRun[0] < numbers.length - 1) {
    // does not belong here
    if (curRun[1] < numbers.length - curRun[0] - 1) {
      if (numbers[curRun[1]] < numbers[curRun[1] + 1]) {
        let temp = numbers[curRun[1]];
        numbers[curRun[1]] = numbers[curRun[1] + 1];
        numbers[curRun[1] + 1] = temp;
      }
      curRun[1]++;
    } else {
      curRun[1] = 0;
      curRun[0]++;
    }
  } else {
    ended = true;
  }
  var newState = {
    data: numbers,
    sortingState: curRun,
    ended: ended
  };
  return newState;
}

/*
Läuft noch nicht ganz korrekt bei mehreren Zahlen wie z.B. 29 überschreibt er eine Zahl mit der nächstgrößeren
Fehler währe mit debuggen leichter nachzuvollziehen
Erst weiter Implementieren: Button: Go, Step
*/
function InsertionSort(props) {
  let numbers = props.data;
  let curRun = props.sortingState;
  let ended = false;
  if (curRun[0] === 1 && curRun[1] === 1) {
    curRun[2] = numbers[0];
  }
  if (curRun[0] < numbers.length) {
    if (curRun[1] > 0 && numbers[curRun[1] - 1] > curRun[2]) {
      numbers[curRun[1]] = numbers[curRun[1] - 1];
      curRun[1]--;
    } else {
      numbers[curRun[1]] = curRun[2];
      curRun[0]++;
      curRun[1] = curRun[0];
      curRun[2] = numbers[curRun[0]];
    }
  } else {
    ended = true;
  }
  var newState = {
    data: numbers,
    sortingState: curRun,
    ended: ended
  };
  return newState;
}

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
    sortingState: [1, 1, 0], //[0, 0], BubbleSort
    ended: false
  };

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

  componentDidUpdate() {
    this.chart.data.labels = this.state.data;
    this.chart.data.datasets[0].data = this.state.data;
    this.chart.update();
  }

  SortData() {
    if (this.state.ended) {
      clearInterval(this.interval);
    } else {
      let newSt = InsertionSort(this.state);
      this.setState({
        data: newSt.data,
        sortingState: newSt.sortingState,
        ended: newSt.ended
      });
    }
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
