import React from "react";
import Menu from "./components/layout/Menu";
import Header from "./components/layout/Header";
import SortingPickList from "./components/SortingPickList";
import DataInput from "./components/DataInput";

import "./App.css";
import Sortings from "./components/Sortings";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortingData: [],
      sorter: [
        {
          name: "Bubble Sort",
          active: false
        },
        {
          name: "Insertion Sort",
          active: false
        },
        {
          name: "Quick Sort",
          active: false
        }
      ]
    };
    this.toggleSorterActive = this.toggleSorterActive.bind(this);
    this.setSortingData = this.setSortingData.bind(this);
    this.generateData = this.generateData.bind(this);
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
    let fData = data.replace(/[^0-9,]/g, "");
    this.setState({
      sortingData: fData.split(/[,]+/)
    });
  }

  generateData() {
    let data = [];
    for (let i = 0; i < 50; i++) {
      data.push(Math.floor(Math.random() * 100));
    }
    this.setState({
      sortingData: data
    });
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
        <DataInput
          sortingData={this.state.sortingData}
          generateData={this.generateData}
          setSortingData={this.setSortingData}
        />
        <SortingPickList
          toggleSorterActive={this.toggleSorterActive}
          sortings={this.state.sorter.map(s => s.name)}
        />
        <Sortings
          sorter={this.state.sorter}
          sortingData={this.state.sortingData}
        />
      </div>
    );
  }
}

export default App;
