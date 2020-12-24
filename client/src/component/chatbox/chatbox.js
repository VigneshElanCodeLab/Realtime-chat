import React from 'react'
import Message from '../message/message'
import './chatbox.css'
import Drawer from '@material-ui/core/Drawer';
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
          <button 
          variant="contained" 
          color="blue" 
          style={{position:"absolute",top:"590px",right:"2%"}} 
          onClick={toggleDrawer(anchor, true)}>
            chat
            </button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            <Message cartMessage={props.cartMessage} order={state.bottom} name={props.name}/>
          </Drawer>
       </>
      ))}
    </div>
    )
}
export default Chatbox