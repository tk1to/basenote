import React, { Component } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Menu);
