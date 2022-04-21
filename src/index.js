import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Components/Login/Login';
let componente;
localStorage.getItem("jwt") ? componente = <App/> : componente = <Login/>
ReactDOM.render(
  <React.StrictMode>
   {componente}
  </React.StrictMode>,
  document.getElementById('root')
);


