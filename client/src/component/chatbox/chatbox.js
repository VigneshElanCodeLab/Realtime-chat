import React from 'react'
import Message from '../message/message'
import './chatbox.css'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function Chatbox(props) {
    
  const [state, setState] = React.useState({
   message:props.cartMessage,
    bottom: false,
  });
  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

    return (
        <div  > 
      {['bottom'].map((anchor) => (
       <>
       <Grid   container justify="flex-end">
          <Button className="chatButton"
          size="small"
          variant="contained" 
          color="primary" 

          style={{position:"absolute",top:"590px",right:"4%"}} 
          onClick={toggleDrawer(anchor, true)}>
           <p style={{color:"white"}}>Chat</p>
          </Button>
      </Grid>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            <Message cartMessage={props.cartMessage} order={state.bottom} name={props.name}/>
          </Drawer>
       </>
      ))}
    </div>
    )
}
export default Chatbox