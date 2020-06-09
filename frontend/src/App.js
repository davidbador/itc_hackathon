import React from 'react';
import './App.css';
import Home from './components/Home'
import Rating from './components/Rating'
import { BrowserRouter as Router, NavLink, Switch, Route, Link, Redirect } from 'react-router-dom';
import Businesses from './components/Businesses';
import ScrollTop from "react-scrolltop-button";


function App() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Redirect from='/' to='/home'/>
            <ScrollTop
              style={{ backgroundColor: "inherit" }} />
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
              style={{ marginInlineStart: '40px' }}
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
            <Switch>
              <Route exact path='/home'>
                <Home/>
                <Rating/>
              </Route>
              <Route exact path="/selling">
                <Businesses />
              </Route>
            </Switch>
          </Router>
      </header>
    </div>
    );
}

export default App;