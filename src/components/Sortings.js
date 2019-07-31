import React from "react";
import BubbleSort from "./sorter/BubbleSort";
import InsertionSort from "./sorter/InsertionSort";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStepForward
} from "@fortawesome/free-solid-svg-icons";

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
  }

  setAction(a) {
    console.info(a);
    this.setState({
      action: a
    });
  }

  play(e) {
    e.preventDefault();
    this.setAction("run");
  }

  pause(e) {
    e.preventDefault();
    this.setAction("pause");
  }

  step(e) {
    e.preventDefault();
    this.setAction("step");
  }

  render() {
    let st = [];
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
          default:
            break;
        }
      }
    }

    return (
      <section id="sortings">
        <div className="controls">
          <ButtonToolbar aria-label="Animation controls">
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
          </ButtonToolbar>
        </div>
        <div className="animations">{st}</div>
      </section>
    );
  }
}

export default Sortings;
