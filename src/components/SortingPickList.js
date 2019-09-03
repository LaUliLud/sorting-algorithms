import React from "react";
import Form from "react-bootstrap/Form";

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
          <div>
            {this.props.sortings.map(name => (
              <Form.Check
                inline
                label={name}
                name={name}
                key={`checkbox-${name}`}
                type={"checkbox"}
                onChange={this.handleChange}
              />
            ))}
          </div>
        </Form>
      </section>
    );
  }
}

export default SortingPickList;
