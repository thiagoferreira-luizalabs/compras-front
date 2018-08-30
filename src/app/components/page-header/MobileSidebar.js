import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import itemsMenu from "./ItemsMenu"


export const MobileSidebar = ({ handleSidebarHide, visible }) => (
  <Sidebar as={Menu} animation='overlay' icon='labeled' inverted onHide={handleSidebarHide} vertical visible={visible} width='thin' >
    {itemsMenu}
    <Menu.Item as={Link} to="/logout">Logout</Menu.Item>
  </Sidebar>
)

MobileSidebar.propTypes = {
  handleSidebarHide: PropTypes.func,
  visible: PropTypes.bool
}

export default MobileSidebar