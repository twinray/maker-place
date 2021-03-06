import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



// Pages used in routes
import HomePage from './components/Home/HomePage.js';
import ClassesPage from './components/Classes/ClassesPage.js';
import ClassPage from './components/Class/ClassPage'; 
import Nav from './components/Nav/';
import Scrape from './components/Scrape.js';
import './App.css';

// This is where you define top level routes in the app mapping some url to a given page component
// to add a new page/route:
// 1) import page component
// 2) add <Route> jsx tag with path and component
//
// adding route with custom params:
// <Route exact path="/classes" render={(props)=> (
//   <ClassesPage {...props} classNames={CLASS_NAMES} />
// )}/>

const App = () => (
  <div>
    <Nav/ >
    <Router>
      <div>
        <ul className="Nav">
          <li><Link to="/classes">Classes</Link></li>
        </ul>
    
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/classes" component={ClassesPage} />
        <Route path="/classes/:title" component={ClassPage} />
       
      </div>
    </Router>
     <Scrape/>
  </div>
);

export default App;
