import React, { Component } from 'react';
import PageHeader, { ItemsMenu } from "./components/page-header/PageHeader"
import { Menus } from "./routes/Pages"
import { Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Link } from "react-router-dom"

class App extends Component {

  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { isAuthenticated } = this.props.auth
    const { visible } = this.state

    return (
      <div className="app">
        {isAuthenticated && <PageHeader menus={Menus} onToggleSideBar={this.handleButtonClick} />}

        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' icon='labeled' inverted onHide={this.handleSidebarHide} vertical visible={visible} width='thin' >
            {ItemsMenu(Menus)}
            <Menu.Item as={Link} to="/logout">Logout</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>


      </div>
    );
  }
}

export default App;
