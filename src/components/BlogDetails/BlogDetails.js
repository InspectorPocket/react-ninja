import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import styles from './BlogDetails.module.scss';

const BlogDetails = () => {
  const {id} = useParams();
  const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);

  return (
    <div className={styles.BlogDetails}>
      { isPending && <p>Loading...</p> }
      { error && <p>{error}</p> }
      { blog &&(
        <article>
          <h2>{blog.title}</h2>
          <p>Written by:{blog.author}</p>
          <div>{blog.body}</div>
        </article> )
      }

    </div>
  )
};

export default BlogDetails;
