import React from 'react';
import './App.css';
import Login from './components/login';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
      <div className="App">
      <div className="Nav">
        <h2 className="Header">Friends Database</h2>
        <Link to="/"><h5 className="Nav-link">LOGIN.</h5></Link>
        <Link to="/friends"><h5 className="Nav-link">FRIENDLIST.</h5></Link>
        <Link to="/friends/add"><h5 className="Nav-link">ADDFRIEND.</h5></Link>
        <h5 className="Nav-link">LOGOUT</h5>
      </div>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/friends"  />
      </Routes>
      

      </div>
  );
}

export default App;
