import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Form from './Form';

class App extends React.Component {
  componentDidMount() {
    axios.get('http://0.0.0.0:3000/check').then((response) => {
      console.log(response);
    }).catch((response) => {
      console.log(response);
    });
  }
  render() {
    return (
      <div>
        <Form />
        <div className="list">
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);