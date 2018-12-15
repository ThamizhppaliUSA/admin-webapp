import React, { Component } from 'react';

export default class ListResource extends Component {

  render() {
    console.log(this.props);

    return (
        <h2>{this.props.name} </h2>
    );
  }
}
