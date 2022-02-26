import React from 'react';
import './index.css'
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="main">
      <Header/>
    </div>
  );
}

export default App;
