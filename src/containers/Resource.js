import React, { Component } from "react";
import CreateResource from '../component/CreateResource';
import ListResource from '../component/ListResource';
import "./Resource.css";

export default class Resource extends Component {

  render() {
    return (
        <div className="Resource">
        <CreateResource name={this.props.match.params.name} />
        <ListResource name={this.props.match.params.name} />
      </div>
    );
  }
}