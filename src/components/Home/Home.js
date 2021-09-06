import React from 'react';
import styles from './Home.module.scss';
import { useState, useEffect } from 'react';
import BlogList from '../BlogList/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // cannot use async/await here, can externalise function to do so
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        if(!res.ok) {
          throw Error("Couldn't fetch data");
        }
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className={styles.content}>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} title="Showing all blogs" />}
    </div>
  )

};

export default Home;
