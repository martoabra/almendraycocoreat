import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CartState from "./context/cart/CartState"
import {initializeApp} from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAoyxOS3ONcRGDpw2dqQ1y9G6YcQJDolpI",
  authDomain: "coderhouse-react-abramowicz.firebaseapp.com",
  projectId: "coderhouse-react-abramowicz",
  storageBucket: "coderhouse-react-abramowicz.appspot.com",
  messagingSenderId: "995423879394",
  appId: "1:995423879394:web:ffbf1af889338852dfdebb",
  measurementId: "G-XJSCQ7F91W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <CartState>
       <App />
    </CartState>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
