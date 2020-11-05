import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

function Navigation() {
  return (
    <nav>
      <Link className="nav__child nav__home" to="/">Hey.Movie</Link>
      <Link className="nav__child" to="/about">About</Link>
      <div className="nav__child nav__search">
        <input placeholder="Search">
        </input>
      </div>
    </nav>
  )
}

export default Navigation