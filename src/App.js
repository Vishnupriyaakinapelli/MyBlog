import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlesList from './pages/ArticlesList'
import ArticlePage from './pages/ArticlePage'
import NotFoundPage from './pages/NotFoundPage'
import NavBar from './NavBar'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <HomePage></HomePage> */}
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact></Route>
            <Route path="/about" component={AboutPage} ></Route>
            <Route path="/articles-list" component={ArticlesList} ></Route>
            <Route path="/article/:name" component={ArticlePage} ></Route>
            <Route component={NotFoundPage}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
