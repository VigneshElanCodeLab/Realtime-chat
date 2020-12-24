class AuthService {
    isUserLoggedIn() {
    let user = sessionStorage.getItem('AuthenticatedUser')
    console.log(user, 'getusername');
    if (user === null) return false
    return true
}

registerUser(username, password) {

    sessionStorage.setItem('AuthenticatedUser', username)
    console.log("registerUser")
}
logout() {
    sessionStorage.removeItem('AuthenticatedUser')

}
}

export default new AuthService()