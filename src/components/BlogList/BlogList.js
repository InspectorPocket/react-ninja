import React from 'react';
import styles from './BlogList.module.scss';

const BlogList = ({blogs, title}) => {
  return (
    <div className={styles.BlogList}>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <article className={styles.blog} key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
        </article>
      ))}
    </div>
  )
};

export default BlogList;
