import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import AppRoute from "./AppRoute"
import App from "../App"
import AuthService from "../services/AuthService"
// Pages
import Login from "../containers/login/Login"
const Home = () => (<h1>Welcome to the homepage. You are logged in! Go corintia. </h1>)

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

            <AppRoute exact {...this.state} path="/logout" component={() => this.logout()} />

          </App>
        </Switch>
      </Router>
    )
  }

}

export default Routes