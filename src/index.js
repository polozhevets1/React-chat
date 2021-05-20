import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth'


// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBebUggGE-vCA_hBqWiGHIqTCnpfaNCtOI",
    authDomain: "react-chat-9caf9.firebaseapp.com",
    projectId: "react-chat-9caf9",
    storageBucket: "react-chat-9caf9.appspot.com",
    messagingSenderId: "318392421543",
    appId: "1:318392421543:web:971c8912f03b7681abdf82",
    measurementId: "G-HFS6CGMCXJ"
    }
);

export const Context =  createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);



