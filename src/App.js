import React, { Component } from 'react';
import PageHeader from "./components/page-header/PageHeader"

class App extends Component {
  render() {
    const version = process.env.REACT_APP_VERSION
    const { isAuthenticated } = this.props.auth

    return (
      <div className="App">
        {isAuthenticated && <PageHeader />}
        {this.props.children}
        <p>Version {version}</p>
      </div>
    );
  }
}

export default App;
