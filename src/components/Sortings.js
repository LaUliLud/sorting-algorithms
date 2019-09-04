import React from "react";
import BubbleSort from "./sorter/BubbleSort";
import InsertionSort from "./sorter/InsertionSort";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStepForward
} from "@fortawesome/free-solid-svg-icons";
import QuickSort from "./sorter/QuickSort";

class Sortings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: ""
    };

    this.setAction = this.setAction.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.step = this.step.bind(this);
    this.calcAnimationWidth = this.calcAnimationWidth.bind(this);
  }

  setAction(a) {
    this.setState({
      action: a
    });
  }

  scrollToSection() {
    let section = document.getElementById("sortings");
    let yCoordinate = section.getBoundingClientRect().top + window.pageYOffset;
    let menu = document.getElementById("menu");
    window.scrollTo({
      top: yCoordinate - menu.clientHeight,
      behavior: "smooth"
    });
  }

  play(e) {
    e.preventDefault();
    this.scrollToSection();
    this.setAction("run");
  }

  pause(e) {
    e.preventDefault();
    this.scrollToSection();
    this.setAction("pause");
  }

  step(e) {
    e.preventDefault();
    this.scrollToSection();
    this.setAction("step");
  }

  calcAnimationWidth(number) {
    let width = 0;
    if (number > 0) {
      if (number > 3) {
        number = 3;
      }
      let space = number * 20 + 20;
      width = (window.innerWidth - space) / number;
    }
    return width;
  }

  render() {
    let st = [];
    let animations = 0;
    for (let i = 0; i < this.props.sorter.length; i++) {
      if (this.props.sorter[i].active) {
        switch (this.props.sorter[i].name) {
          case "Bubble Sort":
            st.push(
              <BubbleSort
                key="BubbleSort"
                sortingData={this.props.sortingData}
                action={this.state.action}
                setAction={this.setAction}
              />
            );
            break;
          case "Insertion Sort":
            st.push(
              <InsertionSort
                key="InsertionSort"
                sortingData={this.props.sortingData}
                action={this.state.action}
                setAction={this.setAction}
              />
            );
            break;
          case "Quick Sort":
            st.push(
              <QuickSort
                key="QuickSort"
                sortingData={this.props.sortingData}
                action={this.state.action}
                setAction={this.setAction}
              />
            );
            break;
          default:
            break;
        }
        animations++;
      }
    }

    const sorterWidth = {
      width: this.calcAnimationWidth(animations)
    };

    return (
      <section id="sortings">
        <div className="controls" aria-label="Animation controls">
          <Button className="mr-2" variant="success" onClick={this.play}>
            <FontAwesomeIcon className="mr-1" icon={faPlay} /> Go
          </Button>
          <Button className="mr-2" variant="warning" onClick={this.pause}>
            <FontAwesomeIcon className="mr-1" icon={faPause} />
            Pause
          </Button>
          <Button variant="info" onClick={this.step}>
            <FontAwesomeIcon className="mr-1" icon={faStepForward} />
            Next
          </Button>
        </div>
        <div className="animations">
          {st.map(sorter => (
            <div
              className="animation"
              style={sorterWidth}
              key={`div-${sorter.key}`}
            >
              {sorter}
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Sortings;
