import React from 'react';
import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import Strips from "../strips/Strips"
import Logo from "../../../assets/img/magazineluiza.png"
import PropTypes from "prop-types"
import itensMenu from "./ItemsMenu"
import "./page-header.css"

const PageHeader = ({ handleSidebarToggle }) => (
  <div>
    <Strips />

    <Menu className="topbar-mobile" >
      <Menu.Item onClick={handleSidebarToggle}><Icon name="bars" /></Menu.Item>
      <Menu.Item as={Link} to="/home" className="logo"><Image src={Logo} /></Menu.Item>
    </Menu>

    <Menu className="navbar">
      <Menu.Item as={Link} to="/">
        <Image src={Logo} className="logo" />
      </Menu.Item>

      {itensMenu}

      <Menu.Menu position='right' className="logout">
        <Dropdown item text='Olá, CBT_SILVA'>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/logout">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>

    </Menu>
  </div >
)

PageHeader.propTypes = {
  handleSidebarToggle: PropTypes.func
}

export default PageHeader