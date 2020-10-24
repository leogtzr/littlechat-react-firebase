import { firestore } from './fire.js';
import React, { useRef, useState } from 'react';
import './ChatRoom.css';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';
import { auth } from './fire.js';
import firebase from 'firebase';

function ChatRoom() {

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});
    const [formValue, setFormValue] = useState('');

    const dummy = useRef();

    const sendMessage = async(event) => {
        event.preventDefault();

        const { uid, photoURL } = auth.currentUser;
        // Create a new document in the database:
        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        });

        setFormValue('');
        dummy.current.scrollIntoView( { behavior: 'smooth'} );
    };


    return (
        <div>
            <div className="main">
                {messages && messages.map((msg) => (
                    <ChatMessage key={msg.id} message={msg} />
                ))}

                <div ref={dummy}></div>

            </div>
            <div>
                <form onSubmit={sendMessage} className="send_message">
                    <input value={formValue} onChange={(e) => setFormValue(e.target.value)} className="input_user"/>
                    <button type="submit">🐦</button> 
                </form>
            </div>
        </div>
    )
}

export default ChatRoom
