import React from 'react';
import api from "./services/api"
import './App.css';
import logo from './assets/logo.svg'

import Routes from './routes'
import { Route } from 'react-router-dom';

function App() {


  return (
    <div className="container">
        <img src={logo} alt="LOGO"/>

        <div className="content">
            <Routes/>
        </div>
    </div>
   
  );
}

export default App;
