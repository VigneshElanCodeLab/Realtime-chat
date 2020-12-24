import React, { useState, useEffect ,useRef } from 'react'
import io from 'socket.io-client'
import TextField from '@material-ui/core/TextField'
import './message.css'
//import { makeStyles } from '@material-ui/core/styles';
import { InputBase     } from '@material-ui/core';

const socket = io.connect('http://localhost:4000')

function App(props) {
    const [state, setState] = useState({ message: '', name: '' ,cartMessage:props.cartMessage})
  const [chat, setChat] = useState([])

  const messagesEndRef = useRef(null)
 


  useEffect(() => {
    messagesEndRef.current.scrollTop =messagesEndRef.current.scrollHeight

    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }])
    })
    
  })

  const onTextChange = event => {
    setState({ ...state, [event.target.name]: event.target.value })
  }
 

   const onMessageSubmit = (event) => {
    event.preventDefault()
    const { name, message } = state
    socket.emit('message', { name, message })
    setState({ message: '', name })
  }
 
  const renderChat = () => {
 
    return chat.map(({ name, message }, index) => (
     
 <div key={index}>
  {state.cartMessage}
      <div className="chat" >
     <div style={{color:"#fff"}}> {name}</div>
        {message}      
        </div>
      </div>))
    }

  return (
    <div >
     
      <form onSubmit={onMessageSubmit} >
    
        <div  className="name-field">
          
          <InputBase 
            name="name"
            onChange={event => onTextChange(event)}
            value={state.name}
            placeholder="Name"
           required
          />
        </div>
        <div>
        <div   className="chatBox">
          {state.cartMessage} 

        {renderChat()}
      </div>
      <div ref={messagesEndRef} id={'messagesEndRef'} >

      </div>
      </div>
    <br/>
        <div>
          <TextField 
            name="message"
            onChange={event => onTextChange(event)}
            value={state.message}
           placeholder=" Type Here"
            fullWidth="true"
            variant="outlined"
            margin="normal"
            required
          />
        </div>
        <button >
      Send
      </button>
      </form>
    

    </div>
  )
}

export default App
