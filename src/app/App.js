import React, { Component } from 'react';
import PageHeader from "./components/page-header/PageHeader"
import MobileSidebar from "./components/page-header/MobileSidebar"
import { Segment, Sidebar } from 'semantic-ui-react'


class App extends Component {

  state = { visible: false }

  handleSidebarToggle = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { isAuthenticated } = this.props.auth
    const { visible } = this.state

    return (
      <div className="app">
        {isAuthenticated &&
          <PageHeader handleSidebarToggle={this.handleSidebarToggle} />}

        <Sidebar.Pushable as={Segment}>
          <MobileSidebar visible={visible} handleSidebarHide={this.handleSidebarHide} />

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
