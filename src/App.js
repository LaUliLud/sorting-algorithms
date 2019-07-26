import React from "react";
import Menu from "./components/layout/Menu";
import Header from "./components/layout/Header";
import SortingPickList from "./components/SortingPickList";
import BubbleSort from "./components/sorter/BubbleSort";
import InsertionSort from "./components/sorter/InsertionSort";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortingData: [
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
      sorter: [
        {
          name: "Bubble Sort",
          active: false
        },
        {
          name: "Insertion Sort",
          active: false
        }
      ]
    };
    this.toggleSorterActive = this.toggleSorterActive.bind(this);
    this.setSortingData = this.setSortingData.bind(this);
  }

  toggleSorterActive(sorter) {
    this.setState({
      sorter: this.state.sorter.map(s => {
        if (s.name === sorter) {
          s.active = !s.active;
        }
        return s;
      })
    });
  }

  setSortingData(data) {
    this.setState({
      sortingData: data
    });
  }

  render() {
    let st = [];
    for (let i = 0; i < this.state.sorter.length; i++) {
      if (this.state.sorter[i].active) {
        switch (this.state.sorter[i].name) {
          case "Bubble Sort":
            st.push(<BubbleSort sortingData={this.state.sortingData} />);
            break;
          case "Insertion Sort":
            st.push(<InsertionSort sortingData={this.state.sortingData} />);
            break;
          default:
            break;
        }
      }
    }
    return (
      <div className="App">
        <Menu />
        <Header />
        <SortingPickList
          toggleSorterActive={this.toggleSorterActive}
          sortings={this.state.sorter.map(s => s.name)}
        />
        <section className="page_section">{st}</section>
      </div>
    );
  }
}

export default App;
