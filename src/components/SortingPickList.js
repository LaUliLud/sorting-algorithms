import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

class SortingPickList extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.toggleSorterActive(event.target.name);
  }

  render() {
    return (
      <section id="sorting-pick-list">
        <h4 className="heading">Algorithms:</h4>
        <Form className="pick-list-group">
          <Form.Group as={Row} controlId="formCheckAlgorithms">
            {this.props.sortings.map(name => (
              <div key={`check-box-${name}`} className="mb-3">
                <Form.Check
                  inline
                  label={name}
                  name={name}
                  type={"checkbox"}
                  onChange={this.handleChange}
                />
              </div>
            ))}
          </Form.Group>
        </Form>
      </section>
    );
  }
}

export default SortingPickList;
