import React, { Component } from 'react'
import AuthService from '../AuthService/AuthService'
import { Redirect, Route } from 'react-router-dom'

class AuthRoute extends Component {
    render() {
        if (AuthService.isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }
    }
}
export default AuthRoute;