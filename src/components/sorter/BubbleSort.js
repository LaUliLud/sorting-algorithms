import React from "react";
import SortingAnimation from "../SortingAnimation";

class BubbleSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...this.props.sortingData],
      sortingState: [0, 0],
      ended: false
    };

    this.sort = this.sort.bind(this);
  }

  sort() {
    let numbers = this.state.data;
    let curRun = this.state.sortingState;
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
    this.setState({
      data: numbers,
      sortingState: curRun,
      ended: ended
    });
  }

  render() {
    return (
      <div className="sortings">
        <SortingAnimation
          data={this.state.data}
          ended={this.state.ended}
          sort={this.sort}
        />
      </div>
    );
  }
}

export default BubbleSort;
