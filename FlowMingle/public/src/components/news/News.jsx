import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function NewsShow() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your Node.js server
    axios.get('http://localhost:5001/api/mssql/data') // Replace with your server's URL
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>MSSQL Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Icon</th>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Content</th>
            <th>Publish Date</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.NewsID}>
              <td>{item.NewsID}</td>
              <td>{item.NewsIcon}</td>
              <td>{item.NewsTitle}</td>
              <td>{item.NewsAuthor}</td>
              <td>{item.NewsDesc}</td>
              <td>{item.NewsContent}</td>
              <td>{item.PublishDate}</td>
              <td><Link to={`/editNews/${item.NewsID}`}>Edit</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NewsShow;