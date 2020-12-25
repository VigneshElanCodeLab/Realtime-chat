
import React from 'react'
import './App.css'
import Chatbox from './component/chatbox/chatbox'
import Login from './component/login/login'
import Register from '../src/component/Register/Register'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  Home from '../src/component/home/home';
import AuthRoute from '../src/component/AuthRoute/AuthRoute'
function App() {
  return (
    <div >
      <Router >
        <br />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/chat" component={Chatbox} />
          <AuthRoute exact path="/home/:username/" component={Home} />
          <Route component={ErrorComponent} />

        </Switch>
      </Router>
    </div>
  )

}
function ErrorComponent() {
  return <div > <p style={{textAlign:"center"}}>Oops...Error</p></div>
}

export default App
