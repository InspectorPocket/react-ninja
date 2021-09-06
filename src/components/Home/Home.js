import React from 'react';
import styles from './Home.module.scss';
import { useState, useEffect } from 'react';
import BlogList from '../BlogList/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  // cannot use async/await here, can externalise function to do so
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className={styles.content}>
      {blogs && <BlogList blogs={blogs} title="Showing all blogs" />}
    </div>
  )

};

export default Home;
