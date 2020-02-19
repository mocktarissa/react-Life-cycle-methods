import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import './loader.css'

import Zenquote from './Zenquote'

function App() {
  return (
    <div className="App">
      <Zenquote></Zenquote>
    </div>
  );
}

export default App;
