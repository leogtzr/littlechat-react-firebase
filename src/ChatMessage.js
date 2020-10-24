import React from 'react';
import { auth } from './fire.js';
import './ChatMessage.css';

function ChatMessage(props) {

    const { text, uid, photoURL } = props.message;

    // Conditional CSS
    const messageClass = (uid === auth.currentUser.uid) ? 'sent' : 'received'; 

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL} alt="" className="msg__image"/>
            <p className="msg">{text}</p>
        </div>
    )
}

export default ChatMessage
