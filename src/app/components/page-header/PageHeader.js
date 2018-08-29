import React from 'react';
import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import Strips from "../strips/Strips"
import Logo from "../../../assets/img/magazineluiza.png"
import "./page-header.css"

const PageHeader = ({ onToggleSideBar }) => (
  <div>
    <Strips />

    <Menu className="topbar-mobile" >
      <Menu.Item onClick={onToggleSideBar}><Icon name="bars" /></Menu.Item>
      <Menu.Item className="logo"><Image src={Logo} /></Menu.Item>
    </Menu>

    <Menu className="navbar">
      <Menu.Item as={Link} to="/">
        <Image src={Logo} className="logo" />
      </Menu.Item>
      {
        ["Comercial", "Logística", "Pós Venda", "ERP"]
          .map((item, idx) =>
            (<Dropdown key={idx} item text={item} className={idx === 0 ? "active" : ""}>
              <Dropdown.Menu>
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Automotive</Dropdown.Item>
                <Dropdown.Item>Home</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>))
      }

      <Menu.Item as={Link} to="/theme">Tema</Menu.Item>

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