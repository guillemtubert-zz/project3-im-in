import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import { Link, withRouter } from "react-router-dom";


import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

let socket= io();


const Chat = (props) => { //location
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = process.env.REACT_APP_API_URL;
  // console.log("PROPS", props);
  // console.log("message---", message);
  // console.log("messages---", messages);


  

  useEffect(() => {
    const { username, room } = props;
    // const {name} = "ramon";
    // const {room} = "1234";


    socket = io(ENDPOINT);

    setRoom(room);
    setUsername(username)

    socket.emit('join', { username, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, props.location.search]); // location.search

  useEffect(() => {
    socket.on('message', (newMessage) => {
      console.log('newMessage empty?', newMessage)
      const updatedMessages =[...messages, newMessage]
      setMessages(updatedMessages);
    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    }
  }, [messages])

 


  const sendMessage = (event) => {
    event.preventDefault();
    console.log('message', message)
    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  
  return (
    <div>
      
      {/* <div className="outerContainer"> */}
        <div className="">
            {/* <InfoBar room={room} /> */}
            <Messages className="loqsea" messages={messages} username={username} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
      </div>
    // </div>
  );
}

export default withRouter(Chat);
