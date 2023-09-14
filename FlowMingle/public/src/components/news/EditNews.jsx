import React, { useEffect, useState } from 'react';
import { useParams,} from 'react-router-dom';
import axios from 'axios';

function EditNews() {
  const { id } = useParams();
  console.log(id);
  const [newsData, setNewsData] = useState({});

  useEffect(() => {
    // Fetch all data
    axios.get('http://localhost:5001/api/mssql/data')
      .then((response) => {
        const allNews = response.data;
        // Find the item that matches the ID
        const selectedNews = allNews.find((news) => news.NewsID === parseInt(id));

        if (selectedNews) {
          setNewsData(selectedNews);
          console.log(selectedNews)
        } else {
          // Handle case where item with matching ID was not found
          console.error('News item not found.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewsData({
      ...newsData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5001/api/mssql/edit/${id}`, newsData)
      .then((response) => {
        console.log('Data updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
  };

  return (
    <div>
      <h2>Edit News</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="NewsTitle"
            value={newsData.NewsTitle}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="NewsAuthor"
            value={newsData.NewsAuthor}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="NewsDesc"
            value={newsData.NewsDesc}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            name="NewsContent"
            value={newsData.NewsContent}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label>Publish Date:</label>
          <input
            type="date"
            name="PublishDate"
            value={newsData.PublishDate}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditNews;
