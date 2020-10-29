import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
    </Router>
  )
}
export default App;