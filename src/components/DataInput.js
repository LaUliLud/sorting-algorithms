import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class DataInput extends React.Component {
  constructor(props) {
    super(props);

    this.randomClick = this.randomClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  randomClick(e) {
    e.preventDefault();
    this.props.generateData();
  }

  handleChange(event) {
    this.props.setSortingData(event.target.value);
  }

  render() {
    return (
      <section id="data-input">
        <h4 className="heading">Sorting values:</h4>
        <InputGroup className="sorting-data-input">
          <FormControl
            placeholder="Comma separated data"
            aria-label="Comma separated data"
            aria-describedby="Sorting data"
            value={this.props.sortingData}
            onChange={this.handleChange}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.randomClick}>
              Random
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </section>
    );
  }
}

export default DataInput;
