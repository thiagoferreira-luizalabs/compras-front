import React, { Component } from 'react';
import PageHeader from "./components/page-header/PageHeader"
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Dropdown } from 'semantic-ui-react'

class App extends Component {

  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { isAuthenticated } = this.props.auth
    const { visible } = this.state

    return (
      <div className="app">
        {isAuthenticated && <PageHeader onToggleSideBar={this.handleButtonClick} />}

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            {
              ["Comercial", "Logística", "Pós Venda", "ERP"]
                .map((item, idx) =>
                  (<Dropdown key={idx} item text={item} className={idx === 0 ? "active" : ""} >
                    <Dropdown.Menu>
                      <Dropdown.Item>Electronics</Dropdown.Item>
                      <Dropdown.Item>Automotive</Dropdown.Item>
                      <Dropdown.Item>Home</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>))
            }
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
