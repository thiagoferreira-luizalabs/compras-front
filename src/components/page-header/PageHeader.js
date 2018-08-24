import React from 'react';
import { Menu, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"

export default () => (
  <Menu>
    <Menu.Item header>Compras</Menu.Item>
    <Menu.Item name='aboutUs' />
    <Menu.Item name='jobs' />
    <Menu.Item name='locations' />
    <Menu.Item>
      <Button primary>Sign up</Button>
    </Menu.Item>

    <Menu.Item>
      <Link to="/logout"><Button>Logout</Button></Link> :
    </Menu.Item>
  </Menu>
)