import firebase from 'firebase/app';

import React from 'react';
import { auth } from './fire.js';
import './SignIn.css';

function SignIn() {

    const signInwithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };

    return (
        <button onClick={signInwithGoogle} className="sign-in">Sign in with Google</button>
    )
}

export default SignIn;
