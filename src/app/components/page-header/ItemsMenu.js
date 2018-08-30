import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import { Menus } from "../../routes/Pages"

export default Object.keys(Menus).map((key, idx) => (
  <Dropdown key={idx} item text={Menus[key].title} className={idx === 0 ? "active" : ""}>
    <Dropdown.Menu>
      {Menus[key].subItems.map((item, idx) =>
        (<Dropdown.Item as={Link} key={idx} to={item.route}>{item.menuName}</Dropdown.Item>))}
    </Dropdown.Menu>
  </Dropdown>
))