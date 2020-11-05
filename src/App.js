import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <div className="app__container">
        <Navigation />
        <div className="app__inner">
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" exact={true} component={About} />
          <Route path="/movie-detail" exact={true} component={Detail} />
        </div>
      </div>
    </Router>
  )
}
export default App;