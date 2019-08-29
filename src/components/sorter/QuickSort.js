import React from "react";
import SortingAnimation from "../SortingAnimation";

class QuickSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...this.props.sortingData],
      sortingState: [0, -1, -1, 0, 0], // i for loop, stack left, stack right, pivot, pivot index
      stack: [[0, this.props.sortingData.length - 1]],
      ended: false
    };

    this.sort = this.sort.bind(this);
  }

  // swaps two values within an array
  swap(values, pos1, pos2) {
    let tmp = values[pos1];
    values[pos1] = values[pos2];
    values[pos2] = tmp;
    return values;
  }

  //was wenn array 0 ?
  sort() {
    let numbers = this.state.data;
    let stack = this.state.stack;
    let curRun = this.state.sortingState;
    let ended = this.state.ended;
    if (!ended) {
      // sorting run: move everything that is smaller than the pivot element to the left side and everything that is bigger to the right side
      if (curRun[0] < curRun[2]) {
        if (numbers[curRun[0]] <= curRun[3]) {
          numbers = this.swap(numbers, curRun[0], curRun[4]);
          curRun[4]++;
        }
        curRun[0]++;
      } else if (curRun[0] === curRun[2]) {
        // after the sorting run has finished, initialize the new sorting arrays
        numbers = this.swap(numbers, curRun[4], curRun[2]);
        if (curRun[4] - 1 > curRun[1]) {
          stack.push([curRun[1], curRun[4] - 1]);
        }
        if (curRun[4] + 1 < curRun[2]) {
          stack.push([curRun[4] + 1, curRun[2]]);
        }
        curRun[0]++;
      } else {
        // initialize the parameters for the next sorting run
        let current = stack.pop();
        if (current === undefined) {
          ended = true;
        } else {
          curRun[1] = current[0];
          curRun[2] = current[1];
          curRun[3] = numbers[curRun[2]];
          curRun[4] = curRun[1];
          curRun[0] = curRun[1];
        }
      }
    }
    this.setState({
      data: numbers,
      sortingState: curRun,
      stack: stack,
      ended: ended
    });
  }

  render() {
    return (
      <SortingAnimation
        data={this.state.data}
        ended={this.state.ended}
        sort={this.sort}
        action={this.props.action}
        setAction={this.props.setAction}
      />
    );
  }
}

export default QuickSort;
