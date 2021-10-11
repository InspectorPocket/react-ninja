import React from 'react';
import styles from './Home.module.scss';
import BlogList from '../BlogList/BlogList';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

  return (
    <div className={styles.content}>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} title="Showing all blogs" />}
    </div>
  )

};

export default Home;
