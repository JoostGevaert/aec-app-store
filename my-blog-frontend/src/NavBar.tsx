import * as React from 'react';
import { Link } from 'react-router-dom'

const NavBar = (): JSX.Element => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles-list">Articles</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar
