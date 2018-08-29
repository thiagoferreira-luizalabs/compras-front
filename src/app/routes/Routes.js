import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import AppRoute from "./AppRoute"
import App from "../App"
import AuthService from "../services/AuthService"
// Pages
import Login from "../containers/login/Login"
import Theme from "../containers/theme/Theme"
import Home from "../containers/home/Home"

class Routes extends Component {

  constructor(props) {
    super(props)
    this.state = { auth: AuthService.getAuth() }
    this.setAuth = this.setAuth.bind(this)
    this.logout = this.logout.bind(this)
  }

  setAuth() {
    AuthService.setAuth()
    this.setState({ auth: AuthService.getAuth() })
  }

  logout() {
    AuthService.logout()
    this.setState({ auth: AuthService.getAuth() })
    return <Redirect to={{ pathname: '/' }} />
  }

  render() {
    return (
      <Router>
        <Switch>
          <App auth={this.state.auth}>
            {/* Public Routes */}
            <AppRoute public exact {...this.state} path="/" component={Login}
              componentProps={{ setAuth: this.setAuth }} />

            {/* Private Routes */}
            <AppRoute private exact {...this.state} path="/home" component={Home} />
            <AppRoute private exact {...this.state} path="/theme" component={Theme} />

            <AppRoute exact {...this.state} path="/logout" component={() => this.logout()} />

          </App>
        </Switch>
      </Router>
    )
  }

}

export default Routes