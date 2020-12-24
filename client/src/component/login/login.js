import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './login.css'
import { Link } from 'react-router-dom'
import axios from "../../axios.save"
import AuthService from '../AuthService/AuthService'
class Login extends Component {
constructor(){
  super()
  this.state={
    username:'',
    password:'',
    results:[],
    login:false,

  }
}
componentDidMount(){
  this.handleDatabasecalls();
  setInterval(this.handleDatabasecalls, 1000 * 60 * 10);

}
  onInputChange=(event)=>{
this.setState({[event.target.name]:event.target.value})
  }
  handleDatabasecalls=()=>{
    axios.get('/RegistedUserDetails.json').then(response => {
      const fetchedResults=[];
      for(let key in response.data){
    
      this.setState({results:response.data[key]})
      }
  })   
    .catch(error => {
        console.log(error)
       
  }
    );
    setInterval( 1000 * 60 * 10);
  }
  submitted=(event)=>{
    event.preventDefault()
   if(this.state.results.username===this.state.username && this.state.results.password===this.state.password){
     console.log("login success")
     AuthService.registerUser(this.state.username, this.state.password)
     const userLoggedIn = AuthService.isUserLoggedIn();
        console.log(userLoggedIn);
     this.props.history.push(`/home/${this.state.username}`)
   }else{
     console.log("Login failed")
    window.alert("Login failed")
   }
  }
  render() {
    return (
      <div>
        <Container>
         <div className="paper">
       
       <Avatar >
         <LockOutlinedIcon />
       </Avatar>
       <Typography component="h1" variant="h5">
         Sign in
       </Typography>
       <form    className="form" >
         <TextField
           variant="outlined"
           margin="normal"
           required
           fullWidth
           label="username"
           name="username"
           onChange={this.onInputChange}
           autoFocus
         />
          <TextField
           variant="outlined"
           margin="normal"
           required
           fullWidth
           name="password"
           label="Password"
           type="password"
           id="password"
           autoComplete="current-password"
           onChange={this.onInputChange}
         />
     

        <br/>
        <br/>
       <Button 
       
        fullWidth
        variant="contained"
        color="primary"
    
       onClick={this.submitted}>Login</Button>
       <br/><br/>
       <Grid container>
           
            <br/>
            <Grid item>
              <Link to="/Register">
             <Button variant="text" >  Register</Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      </Container>

      </div>
    )
  }
}
export default Login;