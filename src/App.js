import React from "react";
import Menu from "./components/layout/Menu";
import Header from "./components/layout/Header";
import SortingAnimations from "./components/SortingAnimations";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
        <SortingAnimations />
      </div>
    );
  }
}

export default App;
