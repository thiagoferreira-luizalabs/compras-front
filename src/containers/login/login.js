import React from 'react';
import { Menu, Button } from 'semantic-ui-react'

export default () => (
  <div className="">
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
)

