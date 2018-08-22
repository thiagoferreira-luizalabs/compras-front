import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Button } from 'semantic-ui-react'

console.log(`${process.env.REACT_APP_NAME} `)

class App extends Component {
  render() {
    const version = process.env.REACT_APP_VERSION
    return (
      <div className="App">
        <Menu>
          <Menu.Item header>Compras</Menu.Item>
          <Menu.Item name='aboutUs' />
          <Menu.Item name='jobs' />
          <Menu.Item name='locations' />
          <Menu.Item>
            <Button primary>Sign up</Button>
          </Menu.Item>

          <Menu.Item>
            <Button>Log-in</Button>
          </Menu.Item>
        </Menu>
        <p>Version {version}</p>
      </div>
    );
  }
}

export default App;
