import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "initial"
    };
    this.handleOnchangeWithBind = this.handleOnchangeWithBind.bind(this);
  }

  state = {
    data: "initial value"
  };

  handleOnchange = e => {
    this.setState({ data: e.target.value });
    console.log("onChange");
  };

  handleOnchangeWithBind(e) {
    this.setState({ data: e.target.value });
    console.log("onChange");
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.data}
          onChange={this.handleOnchange}
        />
        {console.log("render")}
      </div>
    );
  }
}

export default Forms;
