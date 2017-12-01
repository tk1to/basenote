import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import MainDisplay from './MainDisplay';
import Menu from './Menu';
import Console from './Console';

class App extends Component {
  componentDidMount() {
    axios.get('http://0.0.0.0:3000/check').then((response) => {
      console.log(response);
    }).catch((response) => {
      console.log(response);
    });
  }
  render() {
    return (
      <div className="app">
        <MainDisplay />
        <Menu />
        <Console />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
