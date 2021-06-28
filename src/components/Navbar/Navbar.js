import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => (
  <nav className={styles.navbar}>
    <a href="/" className='logo'>
      <h1>Dojo Dingo</h1>
    </a>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/create">New blog</a></li>
    </ul>
  </nav>
);

export default Navbar;
