import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Menu extends React.Component {
  scrollToSection(id) {
    let section = document.getElementById(id);
    let yCoordinate = section.getBoundingClientRect().top + window.pageYOffset;
    let menu = document.getElementById("menu");
    window.scrollTo({
      top: yCoordinate - menu.clientHeight,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div id="menu" className="fixed-top">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Sorting Algorithms</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => this.scrollToSection("header")}>
                Home
              </Nav.Link>
              <Nav.Link onClick={() => this.scrollToSection("data-input")}>
                Data
              </Nav.Link>
              <Nav.Link
                onClick={() => this.scrollToSection("sorting-pick-list")}
              >
                Algorithms
              </Nav.Link>
              <Nav.Link onClick={() => this.scrollToSection("sortings")}>
                Animation
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
