import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import styles from './BlogDetails.module.scss';

const BlogDetails = () => {
  const blogsUrl = 'http://localhost:8000/blogs/';
  const {id} = useParams();
  const {data: blog, error, isPending} = useFetch(blogsUrl + id);
  const history = useHistory();

  const handleClick = () => {
    fetch(blogsUrl + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div className={styles.BlogDetails}>
      { isPending && <p>Loading...</p> }
      { error && <p>{error}</p> }
      { blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by:{blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article> )
      }

    </div>
  )
};

export default BlogDetails;
