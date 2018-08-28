import React from 'react';
import { Menu, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"

export default () => (
  <Menu>
    <Menu.Item active>
      <Link to="/home">Compras</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/theme">Theme</Link>
    </Menu.Item>

    <Menu.Item>
      <Link to="/logout"><Button>Logout</Button></Link>
    </Menu.Item>
  </Menu>
)