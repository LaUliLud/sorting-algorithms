import React from "react";

class Header extends React.Component {
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
