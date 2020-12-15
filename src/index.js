import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 

var firebase = require('firebase/firebase-app');
require('firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyCGpkWbu5zt0d7He0egHcQ8i4gRUGgCwhI",
  authDomain: "notebook-01-a3fb5.firebaseapp.com",
  projectId: "notebook-01-a3fb5",
  storageBucket: "notebook-01-a3fb5.appspot.com",
  messagingSenderId: "361765729735",
  appId: "1:361765729735:web:055f424e98a4528ac415e2",
  measurementId: "G-X12SL9Z92E"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <App />, document.getElementById('notebook-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
