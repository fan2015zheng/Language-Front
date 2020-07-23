import React from 'react';
import './App.css';
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Chapter from './Chapter';
import Home from './Home'

function App() {
 
  return (
    <>
      <Router>
        <Navbar />
        <div className="_emptySpace"></div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/chapter/:id" exact component={Chapter}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
