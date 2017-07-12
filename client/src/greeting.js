import React from "react";
import ReactDOM from "react-dom";

export default class Greeting extends React.Component {
  render() {
    return (
      <div className="greet">
        Greet, {this.props.name}!
      </div>
    );
  }
}