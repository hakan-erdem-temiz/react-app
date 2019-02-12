import React, { Component, PropTypes } from "react";

export default class AddTodo extends Component {
  state = {
    data: {}
  };

  render() {
    return (
      <div>
        <input type="text" name="input" onChange={this.handleChange} />
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onChange={this.handleChange}
          name="isApproved"
        />
        <button onClick={e => this.handleClick(e)}>Add</button>
      </div>
    );
  }

  handleClick(e) {
    const { input, isApproved } = this.state.data;
    const node = input;
    const text = node.trim();
    this.props.onAddClick(text, isApproved);
  }

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.type == "checkbox" ? input.checked : input.value;
    this.setState({ data });
  };
}
