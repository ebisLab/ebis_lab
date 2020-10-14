import React from 'react';
import logo from './logo.svg';
import Home from './components/Home'
import Init from './components/Init'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {AnimatePresence} from 'framer-motion'
import './App.css';
import Intro from './components/Intro';

function App() {
  return (
    <Router>
    <div className="App">
    <AnimatePresence exitBeforeEnter>
      <div style={{background:"limegreen", position: "absolute",  width: "100%"}}>
        <Link to="/home">Home</Link>
      </div>

      <Intro style={{marginTop:"-50px"}}/>
      <Route path="/home" component={Home}/>
      <Router path="/" component={Init}/>
      </AnimatePresence>

    </div>
    </Router>
  );
}

export default App;
