import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from "../../axios.save"
import { Link } from 'react-router-dom'

class Register extends Component {
constructor(){
  super()
  this.state={
    username:null,
    password:'',
    contactNumber:'',
   contactNumberError:'',
   passwordError:'',
   con:true
   
  }
}

  onInputChange=(event)=>{
this.setState({[event.target.name]:event.target.value})
  }
  submitted=(event)=>{
    // event.preventDefault()
    console.log(this.state.username,"sucess")
    const Data={ 
      username:this.state.username,
      password:this.state.password,
      contactNumber:this.state.contactNumber
    }
    if(this.state.contactNumber.length<10 || this.state.contactNumber.length>10){
      this.setState({contactNumberError: 'Please enter valid contact number',})
    }else{
      this.setState({contactNumberError: ''})

    }
    if(this.state.password.length<8 || this.state.contactNumber.length>12){
      this.setState({passwordError: 'Password length should be 8 - 12 character'})
    }else{
      this.setState({passwordError: ''})

    }
    if((this.state.contactNumberError!=='Please enter valid contact number' && this.state.contactNumber!=='' )  && (this.state.passwordError!=='Password length should be 8 - 12 character' && this.state.password!=='') && this.state.username!==null){
   axios.post('/RegistedUserDetails.json',Data).then(response => {console.log(response)
    this.props.history.push('/login');
     console.log("database")
    alert("Registration success")
      this.setState({username:'',password:''})
    
 })   
   .catch(error => {
       console.log(error)
       window.alert(error);
}
   );}
  }
  render() {
    return (
      <div>
        <Container>
         <div  className="paper">
       <Typography component="h1" variant="h5">
      Register
       </Typography>
       <form   onClick={this.submitted}  className="form" >
         <TextField
           variant="outlined"
           margin="normal"
          
           fullWidth
           label="Create Username"
           name="username"
           onChange={this.onInputChange}
           autoFocus
           required
         />
          <TextField
           variant="outlined"
           margin="normal"
       
           fullWidth
           name="password"
           label="Password"
           type="password"
           id="password"
           autoComplete="current-password"
           onChange={this.onInputChange}
           required />
           <div style={{color:"red"}}> {this.state.passwordError}</div>

       <TextField
           variant="outlined"
           margin="normal"
           required
           fullWidth
           label="Contact Number"
           name="contactNumber"
           onChange={this.onInputChange}
           autoFocus   
           type="number"   
              />
        <div style={{color:"red"}}> {this.state.contactNumberError}</div>
        <br/>
        <br/>
       <Button 
        fullWidth
        variant="contained"
        color="primary"
       >Register</Button>
       <br/><br/>
       <Grid container>
            <Grid item xs>
              <Link to="/login">
              <Button> login</Button>
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
export default Register;