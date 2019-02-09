import React, { Component } from "react";
class ArrowVsBind extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };

    this.setStateHandlerWithBind = this.setStateHandlerWithBind.bind(this);
  }

  setStateHandlerWithBind() {
    var item = "setState...";
    var myArray = this.state.data.slice();
    myArray.push(item);
    this.setState({ data: myArray });
  }

  setStateHandlerWithArrowFunc = () => {
    var item = "setState...";
    var myArray = this.state.data.slice();
    myArray.push(item);
    this.setState({ data: myArray });
  };

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={this.setStateHandlerWithBind}>Set State bind</button>
        <button onClick={this.setStateHandlerWithArrowFunc}>
          Set State bind
        </button>
        <h4>State Array: {this.state.data}</h4>
      </div>
    );
  }
}
export default ArrowVsBind;
