import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './components/home/HomePage.jsx'
import LoginPage from './components/login/LoginPage.jsx'
import IdeaPage from './components/idea/IdeaPage.jsx'


class App extends Component {
  render() {
    return (
     <Router>
        <div>
          <div>
              <div>
                <Link to ="/"> Home </Link>
              </div>
              <div>
                <Link to ="/login"> Login </Link>
              </div>
              <div>
                <Link to ="/idea"> Idea </Link>
              </div>
          </div>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />              
              <Route exact path="/idea/:userId" component={IdeaPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
