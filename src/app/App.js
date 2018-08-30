import React, { Component } from 'react';
import PageHeader, { ItemsMenu, MobileSidebar } from "./components/page-header/PageHeader"
import { Menu, Segment, Sidebar } from 'semantic-ui-react'


class App extends Component {

  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { isAuthenticated } = this.props.auth
    const { visible } = this.state

    return (
      <div className="app">
        {isAuthenticated &&
          <PageHeader onToggleSideBar={this.handleButtonClick} />}

        <Sidebar.Pushable as={Segment}>
          <MobileSidebar
            visible={visible}
            handleSidebarHide={this.handleSidebarHide}
          />

          <Sidebar.Pusher>
            <Segment basic className="content-wraper">
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>


      </div>
    );
  }
}

export default App;
