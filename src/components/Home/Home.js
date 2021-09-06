import React from 'react';
import styles from './Home.module.scss';
import { useState, useEffect } from 'react';
import BlogList from '../BlogList/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(
    [
      { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
      { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]
  );

  const [name, setName] = useState("mario");

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  // Ran everytime dom renders or data is changed
  useEffect(() => {
    console.log('use effect');
  }, [name]);

  // ^ after the , is a dependancy array
  // empty means the function ONLY runs on first render
  // putting in a variable means it will load on that data changing

  return (
    <div className={styles.content}>
      <BlogList blogs={blogs} title="Showing all blogs" handleDelete={handleDelete} />
      <button className="btn__primary" onClick={() => setName("luigi")}>Change name</button>
      <p>{name}</p>
    </div>
  )

};

export default Home;
