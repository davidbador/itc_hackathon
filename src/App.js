import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, NavLink, Switch, Route, Link, Redirect } from 'react-router-dom';


function App() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Redirect from='/' to='/home'/>
            <div className='Navbar'>
            <div>
            <NavLink
              to="/home"
              activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}>
              Home
            </NavLink>
            <NavLink
              to="/selling"
              style={{ marginInlineStart: '50px' }}
              activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}>
              Sell
            </NavLink>
            </div>
            <NavLink
              to="/user"
              className='Sign'
              
              activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}>
              Login \ Sign Up
            </NavLink>
            </div>
          </Router>
      </header>
    </div>
    );
}

export default App;