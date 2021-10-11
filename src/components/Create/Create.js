import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styles from './Create.module.scss';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Mario');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  
  const handleSubmit = e => {
    e.preventDefault();
    const blog = {title, body, author};

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }) .then(() => {
      console.log('Blog sucessfully added');
      setIsPending(false);
      // history.go(1);
      history.push('/');
    })
  }

  return (
    <div className={styles.create}>
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label>Body</label>
        <textarea
          required
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <label>Author</label>
        <select
          value={author}
          onChange={e => setAuthor(e.target.value)}
        >
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button>Adding...</button>}
      </form>
    </div>
  )
};

export default Create;
