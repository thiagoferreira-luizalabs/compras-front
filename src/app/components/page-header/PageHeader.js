import React from 'react';
import { Menu, Button, Dropdown } from 'semantic-ui-react'
import { Link } from "react-router-dom"

export default () => (
  <Menu className="navbar">
    <Link className="item active" to="/home">Compras</Link>
    <Link className="item" to="/theme">Theme</Link>
    <Menu.Item>
      Teste
    </Menu.Item>
    <Dropdown item text='Categories'>
      <Dropdown.Menu>
        <Dropdown.Item>Electronics</Dropdown.Item>
        <Dropdown.Item>Automotive</Dropdown.Item>
        <Dropdown.Item>Home</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item>
      <Link to="/logout"><Button>Logout</Button></Link>
    </Menu.Item>
  </Menu>
)