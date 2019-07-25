import React from "react";
import Menu from "./components/layout/Menu";
import Header from "./components/layout/Header";
import SortingAnimations from "./components/SortingAnimations";
import SortingPickList from "./components/SortingPickList";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  toggleSorterActive(sorter) {
    console.info("I am in toggle-sorter: " + sorter);
    this.setState({
      sorter: this.state.sorter.map(s => {
        if (s.name === sorter) {
          s.active = !s.active;
        }
        return s;
      })
    });
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
        <SortingPickList
          toggleSorterActive={this.toggleSorterActive}
          sortings={this.state.sorter.map(s => s.name)}
        />
        <SortingAnimations />
      </div>
    );
  }
}

export default App;
