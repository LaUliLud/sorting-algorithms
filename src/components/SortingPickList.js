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
      <section className="page_section">
        <Form onSubmit={this.handleSubmit}>
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
        </Form>
      </section>
    );
  }
}

export default SortingPickList;
