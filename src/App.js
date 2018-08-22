import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Button } from 'semantic-ui-react'


class App extends Component {
  render() {
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
      </div>
    );
  }
}

export default App;
