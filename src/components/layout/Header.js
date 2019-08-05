import React from "react";

class Header extends React.Component {
  componentDidMount() {
    let menu = document.getElementById("menu");
    let header = document.getElementById("header");
    header.style.marginTop = menu.clientHeight + "px";
  }

  render() {
    return (
      <section id="header">
        <div className="overlay">
          <div className="head">
            <h1>Sorting Algorithms Animation</h1>
            <h3>by Ulrich Ludolfinger</h3>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
