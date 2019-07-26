import React from "react";
import Menu from "./components/layout/Menu";
import Header from "./components/layout/Header";
import SortingPickList from "./components/SortingPickList";
import BubbleSort from "./components/sorter/BubbleSort";
import InsertionSort from "./components/sorter/InsertionSort";
import DataInput from "./components/DataInput";

import "./App.css";

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
        <DataInput
          sortingData={this.state.sortingData}
          generateData={this.generateData}
          setSortingData={this.setSortingData}
        />
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
