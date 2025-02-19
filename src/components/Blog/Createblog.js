import React, { useState } from 'react';
import firebase from '../../firebase'; // Adjust the path as necessary
import './Createblog.css'; // Import CSS for styling

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    await db.collection('blogs').add({
      title,
      content,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    setTitle('');
    setContent('');
  };

  return (
    <div className="create-blog-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Content</label>
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Post Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
