import React, { Component } from "react";
import "./Home.css";
import { Header } from 'semantic-ui-react';
import { API } from 'aws-amplify';

function getSchools() {
  let apiName = 'tamilpalliapi';
  let path = '/tpusa/school'; 
  let myInit = { // OPTIONAL
      headers: {}, // OPTIONAL
      response: false
  }
  API.get(apiName, path, myInit).then(response => {
      console.log(response)
  }).catch(error => {
      console.log(error.response)
  });
}

export default class Home extends Component {

  componentDidMount () {
    getSchools();
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <Header as='h3' content='Welcome, Admin!' textAlign='center' />
          <p>A simple note taking app</p>
        </div>
      </div>
    );
  }
}