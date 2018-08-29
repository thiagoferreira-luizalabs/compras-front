import React from 'react';
import { Menu, Dropdown, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import Strips from "../strips/Strips"
import Logo from "../../../assets/img/magazineluiza.png"
import "./page-header.css"


export default () => (
  <div >
    <Strips />
    <Menu className="navbar">
      <Link className="item" to="/">
        <Image src={Logo} className="logo" />
      </Link>
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

      <Link className="item" to="/theme">Tema</Link>

      <Menu.Menu position='right' className="logout">
        <Dropdown item text='Olá, CBT_SILVA'>
          <Dropdown.Menu>
            <Link className="item" to="/logout">Logout</Link>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>

    </Menu>
  </div >
)