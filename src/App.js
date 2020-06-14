// import React from 'react';
import React, { Component } from 'react';
import {BrowserRouter as Router ,  Route, Link, Redirect, withRouter} from "react-router-dom";
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page4 from './Page4.js'
import Page3 from './Page3.js'
import Page2 from './Page2.js'
import Page1 from './Page1.js'
import Header from './Header.js'


class Main extends React.Component{
  constructor(){
    super()

    this.state = {
      show: true
    }
  }

  render(){
    return(
      <Router>
        <Page1></Page1>
        <Page2></Page2>
        <Page3></Page3>
        <Page4></Page4>
      </Router>
    )
  }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <div>
        <p>You must log in to view the page</p>
        <button onClick={this.login}>Log in</button>
        </div>  
      </div>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

class AuthExample extends React.Component {
 render(){ 
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/public">Public Page</Link></li>
          <li><Link to="/protected">Protected Page</Link></li>
        </ul>
        <Route path="/public" component={Public}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path='/protected' component={Protected} />
      </div>
    </Router>
  )
}
}


export  {Main, Header, AuthExample};
