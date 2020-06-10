import React from 'react';
import './App.css';
import Home from './components/Home'
import Rating from './components/Rating'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Businesses from './components/Businesses';
import RegisterInvestor from './components/RegisterInvestor';
import ScrollTop from "react-scrolltop-button";
import LoginInvestor from './components/LoginInvestor';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Redirect from='/' to='/home' />
          <ScrollTop
            style={{ backgroundColor: "inherit" }} 
            distance={200}/>
          <NavBar />
          <Switch>
            <Route exact path='/home'>
              <Home />
              <Rating/>
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