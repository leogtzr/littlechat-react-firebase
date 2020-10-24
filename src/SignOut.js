import React from 'react';
import { auth } from './fire.js';
import './SignOut.css';

function SignOut() {
    return (
        auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export default SignOut
