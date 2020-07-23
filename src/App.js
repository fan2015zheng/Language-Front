import React, {useState} from 'react';
import './App.css';
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Chapter from './Chapter';
import Home from './Home'

function App() {
 
  const [language, setLanguage] = useState(() => "english")
  
  function updateLanguage(language) {
    setLanguage(language)
  }

  return (
    <>
      <Router>
        <Navbar updateLanguage={updateLanguage}/>
        <div className="_emptySpace"></div>
        <Switch>
          <Route path="/chapter/:id" exact render={(prop) => <Chapter {...prop} language={language}/>}/>
          <Route path="/" exact render={() => <Home language={language}/>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
