import React from 'react';
import './App.css';
import Login from './components/login';
import Friends from './components/Friends';
import Add from './components/Add';
import PrivateRoutes from './components/PrivateRoutes';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  const logout = () => {
    localStorage.removeItem("token");
  }

  return (
      <div className="App">
      <div className="Nav">
        <h2 className="Header">Friends Database</h2>
        <Link to="/"><h5 className="Nav-link">LOGIN.</h5></Link>
        <Link to="/friends"><h5 className="Nav-link">FRIENDLIST.</h5></Link>
        <Link to="/friends/add"><h5 className="Nav-link">ADDFRIEND.</h5></Link>
        <Link to="/" onClick={logout}><h5 className="Nav-link">LOGOUT</h5></Link>
      </div>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/friends"  element={<PrivateRoutes><Friends /></PrivateRoutes>} />
        <Route exact path="/friends/add"  element={<PrivateRoutes><Add /></PrivateRoutes>} />
      </Routes>
      </div>
  );
}

export default App;



