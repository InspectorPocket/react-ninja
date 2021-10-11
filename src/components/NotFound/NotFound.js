import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h2>Sorry</h2>
      <p>That page is gonners</p>
      <Link to="/">Back to homepage</Link>
    </div>
  );
};

export default NotFound;
