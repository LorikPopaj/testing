import React, { useState } from 'react';
import axios from 'axios';

function CreateNews() {
  const [newsIcon, setNewsIcon] = useState('');
  const [newsTitle, setNewsTitle] = useState('');
  const [newsAuthor, setNewsAuthor] = useState('');
  const [newsDesc, setNewsDesc] = useState('');
  const [newsContent, setNewsContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      NewsIcon: newsIcon,
      NewsTitle: newsTitle,
      NewsAuthor: newsAuthor,
      NewsDesc: newsDesc,
      NewsContent: newsContent,
    };

    axios
      .post('http://localhost:5001/api/mssql/create', formData) 
      .then((response) => {
        console.log('Data created successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error creating data:', error);
      });
  };

  return (
    <div>
      <h1>Create News</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Icon:</label>
          <input type="text" value={newsIcon} onChange={(e) => setNewsIcon(e.target.value)} />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" value={newsTitle} onChange={(e) => setNewsTitle(e.target.value)} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={newsAuthor} onChange={(e) => setNewsAuthor(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={newsDesc} onChange={(e) => setNewsDesc(e.target.value)} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={newsContent} onChange={(e) => setNewsContent(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateNews;
