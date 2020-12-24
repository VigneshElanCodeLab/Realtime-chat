import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ChatBox from '../chatbox/chatbox'
import './home.css'
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Bls from '../../assets/images/blueShirt.jpg'
import Bs from '../../assets/images/blackShirt.jpg'
import Rs from '../../assets/images/redShirt.jpg'
import Gs from '../../assets/images/greenShirt.jpg'
import Blue from '../../assets/images/blue.jpg'
import Black from '../../assets/images/black.jpg'
import Red from '../../assets/images/red.jpg'
import Green from '../../assets/images/green.jpg'
import Grid from '@material-ui/core/Grid';
import axios from '../../axios.save'
import {Link} from 'react-router-dom'
import AuthService from '../AuthService/AuthService'
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
   
 
    marginLeft:25,
    marginTop:50,
    marginBottom:10,
    width:"300px",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    flexGrow:1
  },
  pos: {
    marginBottom: 12,
  },
 
};
class Home extends Component {
  
    constructor(props){
        super(props)
        this.state={
            open:false,
            itemOne:0,
            itemTwo:0,
            itemThree:0,
            itemFour:0,
            itemFive:0,
            itemSix:0,
            itemSeven:0,
            itemEight:0,
            orderItemOne:"",
            orderItemTwo:"",
            orderItemThree:"",
            orderItemFour:"",
            orderItemFive:"",
            orderItemSix:"",
            orderItemSeven:"",
            orderItemEight:"",
            results:[]
        };
    }
    componentDidMount(){
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
    onAddItemsInCart=(id,itemName)=>{
      let itemname =itemName
      switch(id){
        case 1 : 
        const countItemOne = this.state.itemOne+1;
        this.setState({itemOne:countItemOne ,orderItemOne:itemname+"is added to the cart"})
        console.log("1",this.state.itemOne,itemname)

        window.alert(itemname +"Added to cart")
        break;
        case 2 : 
        const countItemTwo = this.state.itemTwo+1;
        this.setState({itemTwo:countItemTwo,orderItemTwo:itemname+"is added to the cart"})
        console.log("2",this.state.itemTwo,itemname)
        window.alert(itemname +"Added to cart")
        break; 
        case 3 : 
        const countItemThree = this.state.itemThree+1;
        this.setState({itemThree:countItemThree,orderItemThree:itemname+"is added to the cart"})
        console.log("3",this.state.itemThree,itemname)
        window.alert(itemname +"Added to cart")
        break; 
        case 4 : 
        const countItemFour = this.state.itemFour+1;
        this.setState({itemFour:countItemFour,orderItemFour:itemname+"is added to the cart"})
        console.log("4",this.state.itemFour,itemname)
        window.alert(itemname +"Added to cart")
        break; 
        case 5 : 
        const countItemFive = this.state.itemFive+1;
        this.setState({itemFive:countItemFive,orderItemFive:itemname+"is added to the cart"})
        console.log("5",this.state.itemFive,itemname)
        window.alert(itemname +"Added to cart")
        break; 
        case 6 : 
        const countItemSix = this.state.itemSix+1;
        this.setState({itemSix:countItemSix,orderItemSix:itemname+"is added to the cart"})
        console.log("6",this.state.itemSix,itemname)
        window.alert(itemname +"Added to cart")

        break; 
        case 7 : 
        const countItemSeven = this.state.itemSeven+1;
        this.setState({itemSeven:countItemSeven,orderItemSeven:itemname+"is added to the cart"})
        console.log("7", this.state.itemSeven,itemname)
        window.alert(itemname +"Added to cart")
        break;
        case 8 : 
        const countItemEight = this.state.itemEight+1;
        this.setState({itemEight:countItemEight,orderItemEight:itemname+"is added to the cart"})
        console.log("8",this.state.itemEight,itemname)
        window.alert(itemname +"Added to cart")
        break;
        default:
        break;
      }
    }


    handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    
    render() {
      if(this.props.match.params.username===this.state.results.username ){
        console.log(this.state.results.contactNumber)
      
      }
      let cartMessage =(
        <div>
          <Grid container spacing={2}>
        {this.state.orderItemOne && <Grid  item xs={4} sm={3}>
          {this.state.orderItemOne}   {this.state.itemOne} times
            </Grid> }
            <br/>
            {this.state.orderItemTwo && <Grid  item xs={4} sm={3}>
          {this.state.orderItemTwo}  {this.state.itemTwo} times
            </Grid> } 
           
            <br/>
             {this.state.orderItemThree && <Grid item xs={4} sm={3}>
          {this.state.orderItemThree}  {this.state.itemThree} times
            </Grid> }
            </Grid>
            <br/>
            <Grid container spacing={2}>
            {this.state.orderItemFour && <Grid item xs={4} sm={3}>
              {this.state.orderItemFour}  {this.state.itemFour} times
            </Grid> }
            <br/>
            {this.state.orderItemFive && <Grid item xs={4} sm={3}>
          {this.state.orderItemFive}   {this.state.itemFive} times
            </Grid> }
            <br/>
            {this.state.orderItemSix && <Grid item xs={4} sm={3}>
          {this.state.orderItemSix} {this.state.itemSix} times
            </Grid> }
          </Grid>
            <br/>
            <Grid container spacing={2}>
            {this.state.orderItemSeven && <Grid item xs={4} sm={3}>
          {this.state.orderItemSeven} {this.state.itemSeven} times
            </Grid> }
            <br/>
            {this.state.orderItemEight && <Grid item xs={4} sm={3}>
          {this.state.orderItemEight}   {this.state.itemEight} times
            </Grid> }
            </Grid></div>
      );
      const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar color="primary">
                    <Toolbar>

                        <Typography variant="h6"  >
                            Home  
                   
                       
                        </Typography>
                      
                       
                        <Grid container justify="flex-end">
                        <Link>
                        <Button  variant="h6" onclick={AuthService.logout()}> 
                        <p style={{color:"white"}}>Logout</p>
                        </Button>
                        </Link>
                     
                      
                     
                       
                        <Button  onClick={this.handleOpen} > <p style={{color:"white"}}>Cart</p></Button>
  
</Grid>
                         </Toolbar>
                </AppBar>

                <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
       <Paper className="MuiPaper-root-modal">
          <div >
            <h4 style={{textAlign:"center"}}>{this.props.match.params.username}  Your ordered items in cart</h4>
            <h5 style={{marginLeft:"10px"}}>Name: {this.props.match.params.username} </h5>
            <h5  style={{marginLeft:"10px"}}>Contact Number: {this.state.results.contactNumber}</h5>
          
            <Typography variant="h6" id="modal-title" color="primary">
                          
            {cartMessage}       <br/>

            </Typography>
          
          </div>
          </Paper>
        </Modal>
        <div>
       <table style={{width:"100%",display:"flex-row",zomm:"90%"}} >
         <tr>
           <td>
        <Card className={classes.card}>
      <CardContent>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image={Bls}
          title="Contemplative Reptile"
        />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Blue Shirt ₹ 500
        </Typography>
        
      
      </CardContent>
      
      <CardActions>
        <Button size="small" variant="outlined"color="primary" onClick={()=>{this.onAddItemsInCart(1,"Blue Shirt ")}} >Add To Cart </Button>
   
      </CardActions>
    </Card>
    </td>
   <td>
    <Card className={classes.card}>
      <CardContent>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image={Bs}
          title="Contemplative Reptile"
        />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Black Shirt ₹ 500
        </Typography>
        
      
      </CardContent>
      
      <CardActions>
        <Button size="small" variant="outlined"color="primary" onClick={()=>{this.onAddItemsInCart(2 ,"Black Shirt ")}} >Add To Cart</Button>
      </CardActions>
    </Card>
    </td>
    <td>
    <Card className={classes.card}>
      <CardContent>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image={Rs}
          title="Contemplative Reptile"
        />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Red Shirt ₹ 500
        </Typography>
        
      
      </CardContent>
      
      <CardActions>
        <Button size="small" variant="outlined"color="primary" onClick={()=>{this.onAddItemsInCart(3,"Red Shirt ")}}>Add To Cart</Button>
      </CardActions>
    </Card>
    </td> <td>
    <Card className={classes.card}>
      <CardContent>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image={Gs}
          title="Contemplative Reptile"
        />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Green Shirt ₹ 500
        </Typography>
        
      
      </CardContent>
      
      <CardActions>
        <Button size="small" variant="outlined"color="primary" onClick={()=>{this.onAddItemsInCart(4,"Green Shirt ")}}>Add To Cart</Button>
      </CardActions>
    </Card>
    </td>
    </tr>
    <tr>
           <td>
        <Card className={classes.card}>
      <CardContent>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image={Green}
          title="Contemplative Reptile"
        />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Green T - Shirt ₹ 300
        </Typography>
        
      
      </CardContent>
      
      <CardActions>
        <Button size="small"  variant="outlined"color="primary"onClick={()=>{this.onAddItemsInCart(5,"Green T - Shirt ")}}>Add To Cart</Button>
      </CardActions>
    </Card>
    </td>
   <td>
    <Card className={classes.card}>
      <CardContent>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image={Blue}
          title="Contemplative Reptile"
        />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Blue T - Shirt ₹ 300
        </Typography>
        
      
      </CardContent>
      
      <CardActions>
        <Button size="small" variant="outlined"color="primary"  onClick={()=>{this.onAddItemsInCart(6,"Blue T - Shirt ")}}>Add To Cart</Button>
      </CardActions>
    </Card>
    </td>
    <td>
    <Card className={classes.card}>
      <CardContent>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image={Red}
          title="Contemplative Reptile"
        />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Red T - Shirt ₹ 300        </Typography>
        
      
      </CardContent>
      
      <CardActions>
        <Button size="small" variant="outlined"color="primary" onClick={()=>{this.onAddItemsInCart(7,"Red T - Shirt ")}}>Add To Cart</Button>
      </CardActions>
    </Card>
    </td> <td>
    <Card className={classes.card}>
      <CardContent>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image={Black}
          title="Contemplative Reptile"
        />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Black T - Shirt ₹ 300
        </Typography>
        
      
      </CardContent>
      
      <CardActions>
        <Button size="small" variant="outlined"color="primary"  onClick={()=>{this.onAddItemsInCart(8 ,"Black T - Shirt ")}}>Add To Cart</Button>
      </CardActions>
    </Card>
    </td>
    </tr>
    </table>
    </div>
        
                 <ChatBox cartMessage={cartMessage} name={this.props.match.params.username}/>
                      
                        
        
            </div>
        )
    }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);