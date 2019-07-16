import React from "react";
import Menu from "./components/layout/Menu";
import Header from "./components/layout/Header";
import Animations from "./components/Animations";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
        <Animations />
      </div>
    );
  }
}

export default App;
