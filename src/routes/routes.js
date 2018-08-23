import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppRoute from "./appRoute"
import App from "../App"

const Login = () => (<p>Welcome. Insert your credentials to log in. <button>Click here to log in</button></p>)
const Home = () => (<h1>Welcome to the homepage. You are logged in! Go corintia.</h1>)

const Routes = () => {
  const props = {
    isAuthenticated: true
  }

  return (
    <Router>
      <Switch>
        <App>
          {/* Public Routes */}
          <AppRoute public exact {...props} path="/" component={Login} />

          {/* Private Routes */}
          <AppRoute private exact {...props} path="/home" component={Home} />
        </App>
      </Switch>
    </Router>
  )
}

export default Routes