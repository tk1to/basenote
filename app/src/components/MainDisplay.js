import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainDisplay extends Component {
  render() {
    return (
      <div className="mainDisplay">
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(MainDisplay);
