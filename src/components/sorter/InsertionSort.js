import React from "react";
import SortingAnimation from "../SortingAnimation";

class InsertionSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...this.props.sortingData],
      sortingState: [1, 1, 0],
      ended: false
    };

    this.sort = this.sort.bind(this);
  }

  /*
Läuft noch nicht ganz korrekt bei mehreren Zahlen wie z.B. 29 überschreibt er eine Zahl mit der nächstgrößeren
Fehler währe mit debuggen leichter nachzuvollziehen
Erst weiter Implementieren: Button: Go, Step
*/
  sort() {
    let numbers = this.state.data;
    let curRun = this.state.sortingState;
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
    this.setState({
      data: numbers,
      sortingState: curRun,
      ended: ended
    });
  }

  render() {
    return (
      <div>
        <SortingAnimation
          data={this.state.data}
          ended={this.state.ended}
          sort={this.sort}
        />
      </div>
    );
  }
}

export default InsertionSort;
