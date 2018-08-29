import React from 'react';
import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import Strips from "../strips/Strips"
import Logo from "../../../assets/img/magazineluiza.png"
import "./page-header.css"


export const ItemsMenu = (menus) => (
  Object.keys(menus).map((key, idx) => (
    <Dropdown key={idx} item text={menus[key].title} className={idx === 0 ? "active" : ""}>
      <Dropdown.Menu>
        {menus[key].subItems.map((item, idx) =>
          (<Dropdown.Item as={Link} key={idx} to={item.route}>{item.menuName}</Dropdown.Item>))}
      </Dropdown.Menu>
    </Dropdown>
  ))
)

const PageHeader = ({ onToggleSideBar, menus }) => (
  <div>
    <Strips />

    <Menu className="topbar-mobile" >
      <Menu.Item onClick={onToggleSideBar}><Icon name="bars" /></Menu.Item>
      <Menu.Item as={Link} to="/home" className="logo"><Image src={Logo} /></Menu.Item>
    </Menu>

    <Menu className="navbar">
      <Menu.Item as={Link} to="/">
        <Image src={Logo} className="logo" />
      </Menu.Item>

      {ItemsMenu(menus)}

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

export default PageHeader