import React from 'react';
import Home from './home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideosPage from './components/videos'
import Navbar from './components/navbar';

import {BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import notFoundPage from './components/404';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/404" component={notFoundPage} />
        <Route exact path="/videos" component={VideosPage} />
        <Redirect to="/404" />
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
