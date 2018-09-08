import React, { Component } from "react";

export default class Saludo extends Component {
  render() {
    return <h1>Hello {this.props.nombre}</h1>;
  }
}
