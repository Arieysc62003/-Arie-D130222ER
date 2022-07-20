import React, { Component } from "react";

class FnWithArgInCc extends Component {
  state = {};
  secondFn = (text) => {
    console.log(text);
  };
  render() {
    return (
      <button
        onClick={() => this.secondFn("victor")}
        className="btn btn-danger"
      >
        {" "}
        +{" "}
      </button>
    );
  }
}

export default FnWithArgInCc;
