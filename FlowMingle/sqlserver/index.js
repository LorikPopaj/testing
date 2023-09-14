const express = require('express');
const mssql = require('mssql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001; 

app.use(cors());
app.use(bodyParser.json());

const config = {
  user: 'sa',          
  password: '123',     
  server: 'OLTION',    
  database: 'FlowMingle',
  port: 1433, 
  options: {
    encrypt: true, // Enable encryption
    trustServerCertificate: true, // Accept self-signed certificates (not recommended for production)
  },
};

mssql.connect(config, (err) => {
  if (err) {
    console.error('Error connecting to MSSQL:', err);
  } else {
    console.log('Connected to MSSQL database');
  }
});


app.get('/api/mssql/data', (req, res) => {
    const query = 'SELECT NewsID, NewsIcon, NewsTitle, NewsAuthor, NewsDesc, NewsContent, PublishDate FROM News';
  
    mssql.query(query, (err, result) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(result.recordset);
      }
    });
  });

  app.post('/api/mssql/create', (req, res) => {
    const { NewsIcon, NewsTitle, NewsAuthor, NewsDesc, NewsContent } = req.body;
  
    const query = `
      INSERT INTO News (NewsIcon, NewsTitle, NewsAuthor, NewsDesc, NewsContent)
      VALUES (@NewsIcon, @NewsTitle, @NewsAuthor, @NewsDesc, @NewsContent)
    `;
  
    const request = new mssql.Request();
  
    request.input('NewsIcon', mssql.NVarChar, NewsIcon);
    request.input('NewsTitle', mssql.NVarChar, NewsTitle);
    request.input('NewsAuthor', mssql.NVarChar, NewsAuthor);
    request.input('NewsDesc', mssql.NVarChar, NewsDesc);
    request.input('NewsContent', mssql.NVarChar, NewsContent);
  
    request.query(query, (err, result) => {
      if (err) {
        console.error('Error creating data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Data created successfully');
        res.status(201).json({ message: 'Data created successfully' });
      }
    });
  });

  app.put('/api/mssql/edit/:id', (req, res) => {
    const newsID = req.params.id;
    const { NewsIcon, NewsTitle, NewsAuthor, NewsDesc, NewsContent } = req.body;
  
    const query = `
      UPDATE News
      SET NewsIcon = @NewsIcon, NewsTitle = @NewsTitle, NewsAuthor = @NewsAuthor, NewsDesc = @NewsDesc, NewsContent = @NewsContent
      WHERE NewsID = @newsID
    `;
  
    const request = new mssql.Request();
  
    request.input('NewsIcon', mssql.NVarChar, NewsIcon);
    request.input('NewsTitle', mssql.NVarChar, NewsTitle);
    request.input('NewsAuthor', mssql.NVarChar, NewsAuthor);
    request.input('NewsDesc', mssql.NVarChar, NewsDesc);
    request.input('NewsContent', mssql.NVarChar, NewsContent);
    request.input('newsID', mssql.Int, newsID);
  
    request.query(query, (err, result) => {
      if (err) {
        console.error('Error updating data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Data updated successfully');
        res.status(200).json({ message: 'Data updated successfully' });
      }
    });
  });

  app.delete('/api/mssql/delete/:id', (req, res) => {
    const newsID = req.params.id;
  
    const query = `
      DELETE FROM News
      WHERE NewsID = @newsID
    `;
  
    const request = new mssql.Request();
  
    request.input('newsID', mssql.Int, newsID);
  
    request.query(query, (err, result) => {
      if (err) {
        console.error('Error deleting data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else if (result.rowsAffected[0] === 0) {
        // If no rows were affected, it means the item with that ID doesn't exist
        res.status(404).json({ error: 'Item not found' });
      } else {
        console.log('Data deleted successfully');
        res.status(200).json({ message: 'Data deleted successfully' });
      }
    });
  });

app.listen(PORT, () => {
  console.log(`MSSQL Server is running on port ${PORT}`);
});
