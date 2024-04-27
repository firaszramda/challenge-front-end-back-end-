const express = require('express');

const axios = require("axios")

const app = express();



app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/users');
    let users = response.data;

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/users/search', async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/users');
    console.log(response.data); 
    let users = response.data.users; 
    let search = req.query.search; 
    let regex = new RegExp(search, "i");
  
    let filteredUsers = users.filter(user => {
      return regex.test(user.firstName);
    });

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = app; 
