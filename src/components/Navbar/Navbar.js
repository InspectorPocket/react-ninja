import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => (
  <nav className={styles.navbar}>
    <Link to="/" className='logo'>
      <h1>Dojo Dingo</h1>
    </Link>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/create">New blog</Link></li>
    </ul>
  </nav>
);

export default Navbar;
