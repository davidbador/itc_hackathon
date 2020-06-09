import React from 'react';
import './App.css';
import Home from './components/Home'
import Rating from './components/Rating'
import { BrowserRouter as Router, NavLink, Switch, Route, Link, Redirect } from 'react-router-dom';
import Businesses from './components/Businesses';
import RegisterInvestor from './components/RegisterInvestor';
import ScrollTop from "react-scrolltop-button";
import LoginInvestor from './components/LoginInvestor';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Redirect from='/' to='/home' />
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
                to="/opportunities"
                style={{ marginInlineStart: '40px' }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "white"
                }}>
                Opportunities
              </NavLink>
            </div>
            <NavLink
              to="/login"
              className='Sign'
              activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}>
              Login
            </NavLink>
            <NavLink
              to="/register"
              className='Sign'
              activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}>
              Register
            </NavLink>
          </div>
          <Switch>
            <Route exact path='/home'>
              <Home />
              <Rating />
            </Route>
            <Route exact path="/opportunities">
              <Businesses />
            </Route>
            <Route exact path="/login">
              <LoginInvestor />
            </Route>
            <Route exact path="/register">
              <RegisterInvestor />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;