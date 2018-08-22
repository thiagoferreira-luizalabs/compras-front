import React, { Component } from 'react';
import Login from "./containers/login/login"


class App extends Component {
  render() {
    const version = process.env.REACT_APP_VERSION
    return (
      <div className="App">
        <Login />
        <p>Version {version}</p>
      </div>
    );
  }
}

export default App;
