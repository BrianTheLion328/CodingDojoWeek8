import React from 'react';
import { Router } from "@reach/router";
import './App.css';

import Hello from './Components/Hello';
import BlueRed from './Components/BlueRed';
import Home from './Components/Home';
import Number from './Components/Number';


function App() {
  return (
    <div className="App">
      <h2>Hello User!</h2>
      <div>
      <Router>
        <Home path="/" />
        <Hello path="/hello" />
        <BlueRed path="/hello/blue/red" />
        <Number path="/4"/>
      </Router>
      </div>
    </div>
  );
}

export default App;
