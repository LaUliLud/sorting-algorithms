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

  randomClick(event) {
    event.preventDefault(event);
    this.props.generateData();
  }

  handleChange(event) {
    this.props.setSortingData(event.target.value);
  }

  render() {
    return (
      <InputGroup>
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
    );
  }
}

export default DataInput;
