// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { addShoppingItem } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addShoppingItem: shoppingItem => dispatch(addShoppingItem(shoppingItem))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingItem: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { shoppingItem } = this.state;
    this.props.addShoppingItem({ shoppingItem });
    this.setState({ shoppingItem: "" });
  }
  render() {
    const { shoppingItem } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="shoppingItem">Shopping</label>
          <input
            type="text"
            id="shoppingItem"
            value={shoppingItem}
            onChange={this.handleChange}
          />
        <button type="submit">Add Item</button>
        </div>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
