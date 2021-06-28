import React from 'react';
import styles from './Home.module.scss';
import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('Mario');
  const [age, setAge] = useState(25);
  
  const handleClick = () => {
    setName('Luigi');
    setAge(30);
  }

  return (
    <div className={styles.content}>
      <h1>Dojo Dingo</h1>
      <p>{name} is {age} years old</p>
      <button className="btn__primary" onClick={handleClick}>Click me</button>
    </div>
  )

};

export default Home;
